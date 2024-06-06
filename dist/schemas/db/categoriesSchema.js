"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categorySchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.categorySchema = new mongoose_1.default.Schema({
    name: { type: String, required: true, minlength: 2, maxlength: 50 },
});
const Category = mongoose_1.default.model("Category", exports.categorySchema);
exports.default = Category;
