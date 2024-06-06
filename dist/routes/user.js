"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRouter = void 0;
const express_1 = __importDefault(require("express"));
const registerUser_1 = __importDefault(require("../controllers/users/registerUser"));
const loginUser_1 = __importDefault(require("../controllers/users/loginUser"));
const auth_1 = __importDefault(require("../middleware/auth"));
const getUserInfo_1 = __importDefault(require("../controllers/users/getUserInfo"));
exports.usersRouter = express_1.default.Router();
exports.usersRouter.post("/register/", (req, res) => {
    return (0, registerUser_1.default)(req, res);
});
exports.usersRouter.post("/login/", (req, res) => {
    return (0, loginUser_1.default)(req, res);
});
exports.usersRouter.get("/api/me", auth_1.default, (req, res) => {
    return (0, getUserInfo_1.default)(req, res);
});
