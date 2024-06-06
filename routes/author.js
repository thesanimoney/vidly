"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorsRouter = void 0;
var express_1 = require("express");
var addAuthor_1 = require("../controllers/authors/addAuthor");
var deleteAuthor_1 = require("../controllers/authors/deleteAuthor");
exports.authorsRouter = express_1.default.Router();
exports.authorsRouter.post("/api/authors", function (req, res) {
    return (0, addAuthor_1.default)(req, res);
});
exports.authorsRouter.delete("/api/authors/:id", function (req, res) {
    return (0, deleteAuthor_1.default)(req, res);
});
