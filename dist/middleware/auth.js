"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../config/config");
function auth(req, res, next) {
    const token = req.header('x-auth-token');
    if (!token)
        return res.status(401).send('Access Denied. Token not found');
    try {
        req.body.user = jsonwebtoken_1.default.verify(token, config_1.jwtSecret);
        next();
    }
    catch (ex) {
        if (ex instanceof Error) {
            res.status(404).send("Invalid token");
        }
    }
}
exports.default = auth;
