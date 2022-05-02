# GRPC HERE BABY...

Yeah... I'm gonna do it just for the experience in a real project.

## Generate Code For Python

```bash
python3 -m grpc_tools.protoc -I./python/proto --python_out=./python/ovpn_server --grpc_python_out=./python/ovpn_server ./python/proto/ovpn.proto
```

## Run Server

```bash
python3 ./python/ovpn_server/ovpn_server.py
```

## Run Client

There are three functions in `./python/ovpn_server/ovpn_client.py` file:

1. list() -> dict
2. get_name(string) -> int
3. get_id(int or string that is can convert to int) -> string
