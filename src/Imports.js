"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buttonLight = exports.button = void 0;
exports.OPENUrl = OPENUrl;
exports.button = document.getElementById("button");
exports.buttonLight = document.getElementById("buttonLight");
function OPENUrl(url) {
    return window.open(url);
}
