"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const authorSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true, minlength: 2, maxlength: 255 },
    age: { type: Number, required: true },
});
const Author = mongoose_1.default.model("Author", authorSchema);
exports.default = Author;
