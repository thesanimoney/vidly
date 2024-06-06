"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCategory = void 0;
var joi_1 = require("joi");
var categorySchemaValidation = joi_1.default.object({
    _id: joi_1.default.optional(),
    name: joi_1.default.string().required().min(3).max(255),
    __v: joi_1.default.optional()
});
var validateCategory = function (object) {
    return categorySchemaValidation.validate(object);
};
exports.validateCategory = validateCategory;
