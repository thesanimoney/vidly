"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCustomer = void 0;
var joi_1 = require("joi");
var phoneRegex = /^\+?[1-9]\d{6,14}$/;
var customerSchemaValidation = joi_1.default.object({
    _id: joi_1.default.optional(),
    name: joi_1.default.string().required().min(3).max(255),
    phone: joi_1.default.string().required().pattern(phoneRegex).message('Please enter a valid phone number'),
    isGold: joi_1.default.boolean().required(),
    __v: joi_1.default.optional()
});
var validateCustomer = function (object) {
    return customerSchemaValidation.validate(object);
};
exports.validateCustomer = validateCustomer;
