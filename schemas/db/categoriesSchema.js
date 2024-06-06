"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categorySchema = void 0;
var mongoose_1 = require("mongoose");
exports.categorySchema = new mongoose_1.default.Schema({
    name: { type: String, required: true, minlength: 2, maxlength: 50 },
});
var Category = mongoose_1.default.model("Category", exports.categorySchema);
exports.default = Category;
