"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jwt = require("jsonwebtoken");
var config_1 = require("../config/config");
function auth(req, res, next) {
    var token = req.header('x-auth-token');
    if (!token)
        return res.status(401).send('Access Denied. Token not found');
    try {
        req.body.user = jwt.verify(token, config_1.jwtSecret);
        next();
    }
    catch (ex) {
        if (ex instanceof Error) {
            res.status(404).send("Invalid token");
        }
    }
}
exports.default = auth;
