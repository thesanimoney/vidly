"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express = require("express");
// import {port} from "./config/config";
const mongoConnection_1 = __importDefault(require("./services/mongoConnection"));
const middleware_1 = __importDefault(require("./middleware"));
exports.app = express();
const connection = (0, mongoConnection_1.default)();
(0, middleware_1.default)(exports.app);
exports.app.listen(3333, () => {
    console.log('Listening on port... ', 3333);
});
