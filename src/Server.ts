import { Server } from "../ServerIncludes/ServerIncludes";
import express from "express";
import * as path from "path";

const __dirname = path.resolve();
const messageFunc = (isRunning: boolean) => {
  return isRunning ? "Running" : "Not Running";
};

enum PickedRoute {
  RGBColor,
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

  if (url == PickedRoute.RGBColor) {

    return "/RGBConvert";
  }

  return url;
};

const SetupServer = () => {
  const app = express();
  const PORT = 5000;
  app.use(express.static("./public/Pages"));
  app.use(express.static("./public/Pages/TodosList/html"))
  // app.use(express.static("/public/Pages/RandomRGB"))

  const client = new Server(PORT);
  const port = client.isRunning();

  const URLsCreate = URLCreate(PickedRoute.OTHER);
  // const AboutPageURL = URLCreate(PickedRoute.ABOUT);
  const todosRoute = URLCreate(PickedRoute.TODOS);
  const rgbConverter = URLCreate(PickedRoute.RGBColor);

  app.get(URLsCreate.toString(), (_req, res) => {
    res.sendFile(
      path.join(__dirname, "/public/Pages/MathRoute/MathRoute.html"),
    );
  });

  app.get(todosRoute.toString(), (_req, res) => {
    res.sendFile(
        path.join(__dirname, "/public/Pages/TodosList/html/Todos.html"),
    );
  });

  app.get(rgbConverter.toString(), (_req, res) => {
    res.sendFile(
        path.join(__dirname, "/public/Pages/RandomRGB/RGB/RGBPage.html"),
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

};


SetupServer();
