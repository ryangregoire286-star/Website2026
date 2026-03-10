import { Server } from "../ServerIncludes/ServerIncludes";
import express from "express";
import path from "path";

const messageFunc = (isRunning: boolean) => {
  return isRunning == true ? "Running" : "Not Running";
};

enum PickedRoute {
  HOME,
  ABOUT,
  OTHER,
  CONTACT,
}

const URLCreate = (url: PickedRoute) => {
  if (url == PickedRoute.OTHER) {
    return "/other";
  }

  return url;
};

const SetupServer = () => {
  const app = express();
  const PORT = 5000;
  app.use(express.static("./public/Pages"));

  const client = new Server(PORT);
  const port = client.isRunning();

  const URLsCreate = URLCreate(PickedRoute.OTHER);

  app.get(URLsCreate.toString(), (req, res) => {
    res.sendFile(
      path.join(__dirname, "/public/Pages/MathRoute/MathRoute.html"),
    );
  });

  console.log(path.join(__dirname + "./public/Pages/MathRoute/MathRoute.html"));
  const message = client.isRunningServer();
  if (message === true) {
    const messageServer = messageFunc(message);
    app.listen(port, () => {
      console.log("Listening " + `http://localhost:${port}`);
      console.log("Server is Currently: " + messageServer);
    });
  }
};

SetupServer();
