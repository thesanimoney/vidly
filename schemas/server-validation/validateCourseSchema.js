"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Joi = require("joi");
var courseSchemaValidation = Joi.object({
    _id: Joi.optional(),
    __v: Joi.optional(),
    name: Joi.string().min(3).max(255).required(),
    tags: Joi.array().min(1).max(255).required(),
    description: Joi.string().min(3).max(255).required(),
    isPublished: Joi.boolean().required(),
    price: Joi.number().when('isPublished', {
        is: true,
        then: Joi.required(),
        otherwise: Joi.optional()
    }),
    category: {
        _id: Joi.string().hex().length(24),
        name: Joi.string().min(3).max(255)
    },
    numberInStock: Joi.number().required(),
    dailyRent: Joi.number().required(),
});
var validateCourse = function (object) {
    return courseSchemaValidation.validate(object);
};
exports.default = validateCourse;
