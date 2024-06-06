"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var authorSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true, minlength: 2, maxlength: 255 },
    age: { type: Number, required: true },
});
var Author = mongoose_1.default.model("Author", authorSchema);
exports.default = Author;
