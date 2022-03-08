# This option could be documented a bit better and maybe even be simplified
# ...but what can I say, I want some sleep too  -# i feel you bruh
number_of_clients=$(tail -n +2 /etc/openvpn/server/easy-rsa/pki/index.txt | grep -c "^V")
if [[ "$number_of_clients" = 0 ]]; then
    echo
    echo "There are no existing clients!"
    exit
fi
echo
echo "Select the client to revoke:"
tail -n +2 /etc/openvpn/server/easy-rsa/pki/index.txt | grep "^V" | cut -d '=' -f 2 | nl -s ') '
read -p "Client: " client_number
until [[ "$client_number" =~ ^[0-9]+$ && "$client_number" -le "$number_of_clients" ]]; do
    echo "$client_number: invalid selection."
    read -p "Client: " client_number
done
client=$(tail -n +2 /etc/openvpn/server/easy-rsa/pki/index.txt | grep "^V" | cut -d '=' -f 2 | sed -n "$client_number"p)
echo
read -p "Confirm $client revocation? [y/N]: " revoke
until [[ "$revoke" =~ ^[yYnN]*$ ]]; do
    echo "$revoke: invalid selection."
    read -p "Confirm $client revocation? [y/N]: " revoke
done
if [[ "$revoke" =~ ^[yY]$ ]]; then
    cd /etc/openvpn/server/easy-rsa/
    ./easyrsa --batch revoke "$client"
    EASYRSA_CRL_DAYS=3650 ./easyrsa gen-crl
    rm -f /etc/openvpn/server/crl.pem
    cp /etc/openvpn/server/easy-rsa/pki/crl.pem /etc/openvpn/server/crl.pem
    # CRL is read with each client connection, when OpenVPN is dropped to nobody
    chown nobody:"$group_name" /etc/openvpn/server/crl.pem
    echo
    echo "$client revoked!"
else
    echo
    echo "$client revocation aborted!"
fi
exit
