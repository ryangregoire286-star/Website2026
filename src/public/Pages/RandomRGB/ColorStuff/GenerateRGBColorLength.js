"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateRGB = void 0;
var GenerateRGB = function (r) {
    return Math.floor(Math.random() * r.SIZE_Y);
};
exports.GenerateRGB = GenerateRGB;
