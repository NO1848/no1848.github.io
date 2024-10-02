function FindProxyForURL(url, host) {
    if (shExpMatch(host, "*")) {
        return "PROXY 192.168.2.223:10809; DIRECT";
    }
    return "DIRECT";
}
