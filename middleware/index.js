"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cors_1 = require("cors");
var express_1 = require("express");
var routes_1 = require("../routes");
var errorHandling_1 = require("./errorHandling");
var helmet_1 = require("helmet");
var compression_1 = require("compression");
var corsOptions = {
    exposedHeaders: ['x-auth-token'],
};
function runMiddlewares(app) {
    app.use((0, helmet_1.default)());
    app.use((0, cors_1.default)(corsOptions));
    app.use((0, compression_1.default)());
    app.use(express_1.default.json());
    app.use(routes_1.default);
    app.use(errorHandling_1.default);
}
exports.default = runMiddlewares;
