"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorsRouter = void 0;
const express_1 = __importDefault(require("express"));
const addAuthor_1 = __importDefault(require("../controllers/authors/addAuthor"));
const deleteAuthor_1 = __importDefault(require("../controllers/authors/deleteAuthor"));
exports.authorsRouter = express_1.default.Router();
exports.authorsRouter.post("/api/authors", (req, res) => {
    return (0, addAuthor_1.default)(req, res);
});
exports.authorsRouter.delete("/api/authors/:id", (req, res) => {
    return (0, deleteAuthor_1.default)(req, res);
});
