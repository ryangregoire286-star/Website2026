"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
var Server = /** @class */ (function () {
    function Server(ports) {
        this.ports = ports;
        this.port = ports;
    }
    Server.prototype.isRunning = function () {
        return this.port;
    };
    Server.prototype.isRunningServer = function () {
        return true;
    };
    return Server;
}());
exports.Server = Server;
