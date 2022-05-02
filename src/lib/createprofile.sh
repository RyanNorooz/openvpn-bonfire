#!/bin/bash

# lets make our lives easier

cat /etc/openvpn/client-template.txt

echo "<ca>"
cat "/etc/openvpn/easy-rsa/pki/ca.crt"
echo "</ca>"

echo "<cert>"
awk '/BEGIN/,/END/' "/etc/openvpn/easy-rsa/pki/issued/$CLIENT.crt"
echo "</cert>"

echo "<key>"
cat "/etc/openvpn/easy-rsa/pki/private/$CLIENT.key"
echo "</key>"

case $TLS_SIG in
    1)
        echo "<tls-crypt>"
        cat /etc/openvpn/tls-crypt.key
        echo "</tls-crypt>"
    ;;
    2)
        echo "key-direction 1"
        echo "<tls-auth>"
        cat /etc/openvpn/tls-auth.key
        echo "</tls-auth>"
    ;;
esac
