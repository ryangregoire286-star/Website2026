"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ServerIncludes_1 = require("../ServerIncludes/ServerIncludes");
const express_1 = __importDefault(require("express"));
const path = __importStar(require("path"));
const __dirname = path.resolve();
const messageFunc = (isRunning) => {
    return isRunning ? "Running" : "Not Running";
};
var PickedRoute;
(function (PickedRoute) {
    PickedRoute[PickedRoute["RGBColor"] = 0] = "RGBColor";
    PickedRoute[PickedRoute["OTHER"] = 1] = "OTHER";
    PickedRoute[PickedRoute["TODOS"] = 2] = "TODOS";
})(PickedRoute || (PickedRoute = {}));
const URLCreate = (url) => {
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
    const app = (0, express_1.default)();
    const PORT = 5000;
    app.use(express_1.default.static("./public/Pages"));
    app.use(express_1.default.static("./public/Pages/TodosList/html"));
    // app.use(express.static("/public/Pages/RandomRGB"))
    const client = new ServerIncludes_1.Server(PORT);
    const port = client.isRunning();
    const URLsCreate = URLCreate(PickedRoute.OTHER);
    // const AboutPageURL = URLCreate(PickedRoute.ABOUT);
    const todosRoute = URLCreate(PickedRoute.TODOS);
    const rgbConverter = URLCreate(PickedRoute.RGBColor);
    app.get(URLsCreate.toString(), (_req, res) => {
        res.sendFile(path.join(__dirname, "/public/Pages/MathRoute/MathRoute.html"));
    });
    app.get(todosRoute.toString(), (_req, res) => {
        res.sendFile(path.join(__dirname, "/public/Pages/TodosList/html/Todos.html"));
    });
    app.get(rgbConverter.toString(), (_req, res) => {
        res.sendFile(path.join(__dirname, "/public/Pages/RandomRGB/RGB/RGBPage.html"));
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
