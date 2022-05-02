#!/bin/bash

# lets make our lives easier

# Determine if we use tls-auth or tls-crypt
if grep -qs "^tls-crypt" /etc/openvpn/server.conf; then
    TLS_SIG="1"
elif grep -qs "^tls-auth" /etc/openvpn/server.conf; then
    TLS_SIG="2"
fi

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
