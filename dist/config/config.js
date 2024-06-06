"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbTest = exports.dbProd = exports.jwtSecret = exports.port = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.port = process.env.PORT;
exports.jwtSecret = process.env.JWT_SECRET;
exports.dbProd = process.env.DB_PROD;
exports.dbTest = process.env.DB_TEST;
