"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUserLogin = void 0;
var joi_1 = require("joi");
var userLoginValidation = joi_1.default.object({
    password: joi_1.default.string().required().min(6).max(1024),
    email: joi_1.default.string().required().email()
});
var validateUserLogin = function (object) {
    return userLoginValidation.validate(object);
};
exports.validateUserLogin = validateUserLogin;
