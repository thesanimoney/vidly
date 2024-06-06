"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var joi_1 = require("joi");
var courseSchemaValidation = joi_1.default.object({
    _id: joi_1.default.optional(),
    __v: joi_1.default.optional(),
    name: joi_1.default.string().min(3).max(255).required(),
    tags: joi_1.default.array().min(1).max(255).required(),
    description: joi_1.default.string().min(3).max(255).required(),
    isPublished: joi_1.default.boolean().required(),
    price: joi_1.default.number().when('isPublished', {
        is: true,
        then: joi_1.default.required(),
        otherwise: joi_1.default.optional()
    }),
    category: {
        _id: joi_1.default.string().hex().length(24),
        name: joi_1.default.string().min(3).max(255)
    },
    numberInStock: joi_1.default.number().required(),
    dailyRent: joi_1.default.number().required(),
});
var validateCourse = function (object) {
    return courseSchemaValidation.validate(object);
};
exports.default = validateCourse;
