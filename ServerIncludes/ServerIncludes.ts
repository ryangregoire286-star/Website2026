interface IServer {
  port: number;
}

export class Server implements IServer {
  port: number;
  constructor(private ports: number) {
    this.port = ports;
  }

  isRunning() {
    return this.port;
  }

  isRunningServer() {
    return true;
  }
}
