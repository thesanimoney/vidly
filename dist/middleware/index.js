"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const compression_1 = __importDefault(require("compression"));
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("../routes"));
const errorHandling_1 = __importDefault(require("./errorHandling"));
const helmet_1 = __importDefault(require("helmet"));
const corsOptions = {
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
