"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbTest = exports.dbProd = exports.jwtSecret = exports.port = void 0;
var dotenv_1 = require("dotenv");
dotenv_1.default.config();
exports.port = process.env.PORT;
exports.jwtSecret = process.env.JWT_SECRET;
exports.dbProd = process.env.DB_PROD;
exports.dbTest = process.env.DB_TEST;
