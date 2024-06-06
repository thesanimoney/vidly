"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors = require("cors");
const express = require("express");
const routes_1 = __importDefault(require("../routes"));
const errorHandling_1 = __importDefault(require("./errorHandling"));
const helmet_1 = __importDefault(require("helmet"));
const compression = require("compression");
const corsOptions = {
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
