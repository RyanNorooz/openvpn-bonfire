import os, subprocess

def add_dir_and_get_data():
    item = "WorkingDirectory"
    pwd = os.getcwd()

    file = open("openvpn-automation.service", "r")
    lines = file.readlines()
    file.close()

    lines_str = ""
    for line in lines:
        if line.find(item) != -1:
            line = line.strip() + pwd + "\n"
        lines_str += line

    return lines_str

def write_data(data):
    file = open("/etc/systemd/system/openvpn-automation.service", "w")
    file.write(data)
    file.close()

def is_service_defined():
    res = subprocess.run(['systemctl', 'is-enabled', 'openvpn-automation.service'], stdout=subprocess.PIPE)
    output = res.stdout.decode('utf-8').strip()
    if output != "enabled":
        return False

    return True
