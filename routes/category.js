"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRouter = void 0;
const express_1 = __importDefault(require("express"));
const addCategory_1 = __importDefault(require("../controllers/categories/addCategory"));
const deleteCategory_1 = __importDefault(require("../controllers/categories/deleteCategory"));
exports.categoryRouter = express_1.default.Router();
exports.categoryRouter.post("/api/category", (req, res, next) => {
    return (0, addCategory_1.default)(req, res);
});
exports.categoryRouter.delete("/api/category/:id", (req, res) => {
    return (0, deleteCategory_1.default)(req, res);
});
