import { execSync } from 'child_process'

export default class Clients {
  // list of clients
  _raw_list() {
    const output = execSync(
      "sudo tail -n +2 /etc/openvpn/easy-rsa/pki/index.txt | grep \"^V\" | cut -d '=' -f 2 | nl -s ') '",
      { encoding: 'utf-8' }
    ).trim()
    return output.split('\n')
  }

  // dictionary of id: name
  list(): Record<number, string> {
    const lines = this._raw_list()
    const elements = {}
    for (let i = 0; i < lines.length; i++) {
      const item = lines[i].trim().split(' ')
      elements[parseInt(item[0].substring(0, item[0].length - 1))] = item[1]
    }
    return elements
  }

  // dictionary of name: id
  reversed_list() {
    const lines = this._raw_list()
    const elements = {}
    for (let i = 0; i < lines.length; i++) {
      const item = lines[i].trim().split(' ')
      elements[item[1]] = parseInt(item[0].substring(0, item[0].length - 1))
    }
    return elements
  }

  // returns name from client id
  get_name(id) {
    id = parseInt(id)
    const li = this.list()
    if (id in li) {
      return li[id]
    }
    return -1
  }

  // returns id from client name
  get_id(name) {
    const li = this.reversed_list()
    if (name in li) {
      return li[name]
    }
    return ''
  }
}

console.log(new Clients().list())
