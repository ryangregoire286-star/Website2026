"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
class Server {
    ports;
    port;
    constructor(ports) {
        this.ports = ports;
        this.port = ports;
    }
    isRunning() {
        return this.port;
    }
    isRunningServer() {
        return true;
    }
}
exports.Server = Server;
