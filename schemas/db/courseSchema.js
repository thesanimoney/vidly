"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Course = exports.courseSchema = void 0;
var mongoose_1 = require("mongoose");
var categoriesSchema_1 = require("./categoriesSchema");
// noinspection JSUnusedGlobalSymbols
exports.courseSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true, minlength: 3, maxlength: 255 },
    description: { type: String, required: true, minLength: 10, maxlength: 255 },
    tags: {
        type: [String], validate: {
            validator: function (array) {
                return array.length > 0;
            },
            message: 'Please enter a tags for this course.',
        }
    },
    isPublished: { type: Boolean, default: false },
    price: {
        type: Number, required: function () {
            return this.isPublished;
        }
    },
    category: { type: categoriesSchema_1.categorySchema, required: true },
    numberInStock: { type: Number, required: true },
    dailyRent: { type: Number, required: true },
});
exports.Course = mongoose_1.default.model('course', exports.courseSchema);
