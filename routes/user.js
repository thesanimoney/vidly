"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRouter = void 0;
var express = require("express");
var registerUser_1 = require("../controllers/users/registerUser");
var loginUser_1 = require("../controllers/users/loginUser");
var auth_1 = require("../middleware/auth");
var getUserInfo_1 = require("../controllers/users/getUserInfo");
exports.usersRouter = express.Router();
exports.usersRouter.post("/register/", function (req, res) {
    return (0, registerUser_1.default)(req, res);
});
exports.usersRouter.post("/login/", function (req, res) {
    return (0, loginUser_1.default)(req, res);
});
exports.usersRouter.get("/api/me", auth_1.default, function (req, res) {
    return (0, getUserInfo_1.default)(req, res);
});
