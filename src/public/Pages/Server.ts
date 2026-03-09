import express from "express";
import { Server } from "../ServerIncludes/ServerIncludes";

const messageFunc = (isRunning: boolean) => {
  return isRunning == true ? "Running" : "Not Running";
};

const SetupServer = () => {
  const app = express();
  const PORT = 5000;
  app.use(express.static("./"));

  const client = new Server(PORT);
  const port = client.isRunning();

  const message = client.isRunningServer();
  if (message == true) {
    const messageServer = messageFunc(message);
    app.listen(port, () => {
      console.log("Listening " + `http://localhost:${port}`);
      console.log("Server is Currently: " + messageServer);
    });
  }
};

SetupServer();
