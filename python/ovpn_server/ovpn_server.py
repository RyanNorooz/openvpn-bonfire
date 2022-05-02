from concurrent import futures
import logging, grpc
import ovpn_pb2_grpc as ovpn
import ovpn_pb2 as ovpn_io
import subprocess as sp


class OVPN(ovpn.OVPNServicer):

    def _raw_list(self) -> list:
        # TODO: /etc/openvpn/easy-rsa/pki/index.txt
        out = sp.getoutput(f"tail -n +2 ./python/test.txt | grep \"^V\" | cut -d '=' -f 2 | nl -s ') '")
        lines = out.split("\n")
        return lines

    # id: name
    def _list(self) -> dict:
        lines = self._raw_list()
        elements = {}
        for line in lines:
            items = line.strip().split(" ")
            elements[int(items[0][:len(items[0]) - 1])] = items[1]
        return elements

    # name: id
    def _reversed_list(self) -> dict:
        lines = self._raw_list()
        elements = {}
        for line in lines:
            items = line.strip().split(" ")
            elements[items[1]] = int(items[0][:len(items[0]) - 1])
        return elements

    def list(self, request, context):
        li = self._list()
        outlist = []
        for key, value in li.items():
            outlist.append(ovpn_io.Client(id=key, name=value))
        return ovpn_io.ListResponse(clients=outlist)

    def get_id(self, request, context):
        li = self._reversed_list()
        if request.name in li.keys():
            return ovpn_io.ID(id=li[request.name])
        return ovpn_io.ID(id=-1)

    def get_name(self, request, context):
        li = self._list()
        if request.id in li.keys():
            return ovpn_io.Name(name=li[request.id])
        return ovpn_io.Name(name="")

def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    ovpn.add_OVPNServicer_to_server(OVPN(), server)
    server.add_insecure_port('[::]:4001')
    server.start()
    server.wait_for_termination()


if __name__ == '__main__':
    logging.basicConfig()
    serve()
