case $BR in
    B)
        cd /etc && rm -f /tmp/openvpn_backup.tar.gz && tar -czvf /tmp/openvpn_backup.tar.gz ./openvpn
    ;;
    R)
        [ -f $FILE_ADDRESS ] && tar -xzvf $FILE_ADDRESS -C /tmp && [ -d "/tmp/openvpn" ] && rm -rf /etc/openvpn && mv /tmp/openvpn /etc/ && rm -f $FILE_ADDRESS
    ;;
esac
