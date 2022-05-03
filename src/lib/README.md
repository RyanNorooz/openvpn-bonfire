# Backup And Restore Script

## How To Backup?

Example:

```bash
export BR=B;./src/lib/backup_restore.sh
```

With putting BR(which means Backup or Restore), to B backup action activates.

## How To Restore?

Example:

```bash
export BR=R;export FILE_ADDRESS=/tmp/openvpn_backup.tar.gz;./src/lib/backup_restore.sh
```

First set BR(which means Backup or Restore) to R, then set FILE_ADDRESS to full address that the compressed tar.gz file exists in and then when you activate the script, it decompresses the compressed file and replaces it in /etc/openvpn folder.
