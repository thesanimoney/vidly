"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUserLogin = void 0;
var Joi = require("joi");
var userLoginValidation = Joi.object({
    password: Joi.string().required().min(6).max(1024),
    email: Joi.string().required().email()
});
var validateUserLogin = function (object) {
    return userLoginValidation.validate(object);
};
exports.validateUserLogin = validateUserLogin;
