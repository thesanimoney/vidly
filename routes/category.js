"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRouter = void 0;
var express = require("express");
var addCategory_1 = require("../controllers/categories/addCategory");
var deleteCategory_1 = require("../controllers/categories/deleteCategory");
exports.categoryRouter = express.Router();
exports.categoryRouter.post("/api/category", function (req, res, next) {
    return (0, addCategory_1.default)(req, res);
});
exports.categoryRouter.delete("/api/category/:id", function (req, res) {
    return (0, deleteCategory_1.default)(req, res);
});
