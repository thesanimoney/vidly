"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRouter = void 0;
const express = __importStar(require("express"));
const registerUser_1 = __importDefault(require("../controllers/users/registerUser"));
const loginUser_1 = __importDefault(require("../controllers/users/loginUser"));
const auth_1 = __importDefault(require("../middleware/auth"));
const getUserInfo_1 = __importDefault(require("../controllers/users/getUserInfo"));
exports.usersRouter = express.Router();
exports.usersRouter.post("/register/", (req, res) => {
    return (0, registerUser_1.default)(req, res);
});
exports.usersRouter.post("/login/", (req, res) => {
    return (0, loginUser_1.default)(req, res);
});
exports.usersRouter.get("/api/me", auth_1.default, (req, res) => {
    return (0, getUserInfo_1.default)(req, res);
});
