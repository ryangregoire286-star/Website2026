"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ServerIncludes_1 = require("../ServerIncludes/ServerIncludes");
var express_1 = require("express");
var path = require("path");
var messageFunc = function (isRunning) {
    return isRunning == true ? "Running" : "Not Running";
};
var PickedRoute;
(function (PickedRoute) {
    PickedRoute[PickedRoute["HOME"] = 0] = "HOME";
    PickedRoute[PickedRoute["ABOUT"] = 1] = "ABOUT";
    PickedRoute[PickedRoute["OTHER"] = 2] = "OTHER";
    PickedRoute[PickedRoute["CONTACT"] = 3] = "CONTACT";
})(PickedRoute || (PickedRoute = {}));
var URLCreate = function (url) {
    if (url == PickedRoute.OTHER) {
        return "/other";
    }
    return url;
};
var SetupServer = function () {
    var app = (0, express_1.default)();
    var PORT = 5000;
    app.use(express_1.default.static("./public/Pages"));
    var client = new ServerIncludes_1.Server(PORT);
    var port = client.isRunning();
    var URLsCreate = URLCreate(PickedRoute.OTHER);
    app.get(URLsCreate.toString(), function (req, res) {
        res.sendFile(path.join(__dirname, "/public/Pages/MathRoute/MathRoute.html"));
    });
    console.log(path.join(__dirname + "./public/Pages/MathRoute/MathRoute.html"));
    var message = client.isRunningServer();
    if (message === true) {
        var messageServer_1 = messageFunc(message);
        app.listen(port, function () {
            console.log("Listening " + "http://localhost:".concat(port));
            console.log("Server is Currently: " + messageServer_1);
        });
    }
};
SetupServer();
