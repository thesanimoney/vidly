"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUserSchema = void 0;
var Joi = require("joi");
var userSchemaValidation = Joi.object({
    name: Joi.string().required().min(3).max(255),
    password: Joi.string().required().min(8),
    email: Joi.string().required().email()
});
var validateUserSchema = function (object) {
    return userSchemaValidation.validate(object);
};
exports.validateUserSchema = validateUserSchema;
