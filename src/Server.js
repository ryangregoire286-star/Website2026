"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var SetupServer = function () {
    var app = (0, express_1.default)();
    var PORT = process.env.PORT || 5000;
    app.use(express_1.default.static("./public"));
    app.listen(PORT, function () {
        console.log("Listening " + "http://localhost:".concat(PORT));
    });
};
SetupServer();
