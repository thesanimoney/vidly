"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAuthor = void 0;
var joi_1 = require("joi");
var authorSchemaValidation = joi_1.default.object({
    _id: joi_1.default.optional(),
    name: joi_1.default.string().required().min(3).max(255),
    age: joi_1.default.number().required().min(1).max(130),
    __v: joi_1.default.optional()
});
var validateAuthor = function (object) {
    return authorSchemaValidation.validate(object);
};
exports.validateAuthor = validateAuthor;
