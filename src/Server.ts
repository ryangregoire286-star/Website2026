import { Server } from "../ServerIncludes/ServerIncludes";
import express from "express";
import * as path from "path";

const messageFunc = (isRunning: boolean) => {
  return isRunning ? "Running" : "Not Running";
};

enum PickedRoute {
  // ABOUT,
  OTHER,
  TODOS
}

const URLCreate = (url: PickedRoute) => {
  if (url == PickedRoute.OTHER) {
    return "/other";
  }

  if (url == PickedRoute.TODOS) {

    return "/Todos";
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
  // const AboutPageURL = URLCreate(PickedRoute.ABOUT);
  const todosRoute = URLCreate(PickedRoute.TODOS);

  app.get(URLsCreate.toString(), (_req, res) => {
    res.sendFile(
      path.join(__dirname, "/public/Pages/MathRoute/MathRoute.html"),
    );
  });

  const message = client.isRunningServer();
  if (message) {
    const messageServer = messageFunc(message);
    app.listen(port, () => {
      console.log("Listening " + `http://localhost:${port}`);
      console.log("Server is Currently: " + messageServer);
    });
  }

  app.get(todosRoute.toString(), (_req, res) => {
    res.sendFile(
        path.join(__dirname, "/public/Pages/TodosList/TodoList.html"),
    );
  });
};


SetupServer();
