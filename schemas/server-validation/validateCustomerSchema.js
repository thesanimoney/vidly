"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCustomer = void 0;
var Joi = require("joi");
var phoneRegex = /^\+?[1-9]\d{6,14}$/;
var customerSchemaValidation = Joi.object({
    _id: Joi.optional(),
    name: Joi.string().required().min(3).max(255),
    phone: Joi.string().required().pattern(phoneRegex).message('Please enter a valid phone number'),
    isGold: Joi.boolean().required(),
    __v: Joi.optional()
});
var validateCustomer = function (object) {
    return customerSchemaValidation.validate(object);
};
exports.validateCustomer = validateCustomer;
