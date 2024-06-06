"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCategory = void 0;
var Joi = require("joi");
var categorySchemaValidation = Joi.object({
    _id: Joi.optional(),
    name: Joi.string().required().min(3).max(255),
    __v: Joi.optional()
});
var validateCategory = function (object) {
    return categorySchemaValidation.validate(object);
};
exports.validateCategory = validateCategory;
