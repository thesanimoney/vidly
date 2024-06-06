"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cors = require("cors");
var express = require("express");
var routes_1 = require("../routes");
var errorHandling_1 = require("./errorHandling");
var helmet_1 = require("helmet");
var compression = require("compression");
var corsOptions = {
    exposedHeaders: ['x-auth-token'],
};
function runMiddlewares(app) {
    app.use((0, helmet_1.default)());
    app.use(cors(corsOptions));
    app.use(compression());
    app.use(express.json());
    app.use(routes_1.default);
    app.use(errorHandling_1.default);
}
exports.default = runMiddlewares;
