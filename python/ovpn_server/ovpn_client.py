from __future__ import print_function

import logging

import grpc
import ovpn_pb2_grpc as ovpn
import ovpn_pb2 as ovpn_io


def list():
    response = None
    with grpc.insecure_channel('localhost:4001') as channel:
        stub = ovpn.OVPNStub(channel)
        response = stub.list(ovpn_io.Empty())
    return response.clients

def get_name(id):
    response = None
    with grpc.insecure_channel('localhost:4001') as channel:
        stub = ovpn.OVPNStub(channel)
        response = stub.get_name(ovpn_io.ID(id=int(id)))
    return response.name

def get_id(name):
    response = None
    with grpc.insecure_channel('localhost:4001') as channel:
        stub = ovpn.OVPNStub(channel)
        response = stub.get_id(ovpn_io.Name(name=name))
    return response.id


if __name__ == '__main__':
    logging.basicConfig()
    print(list())
    print(get_name("23"))
    print(get_id("Mohammad_01"))
