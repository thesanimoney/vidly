"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUserSchema = void 0;
var joi_1 = require("joi");
var userSchemaValidation = joi_1.default.object({
    name: joi_1.default.string().required().min(3).max(255),
    password: joi_1.default.string().required().min(8),
    email: joi_1.default.string().required().email()
});
var validateUserSchema = function (object) {
    return userSchemaValidation.validate(object);
};
exports.validateUserSchema = validateUserSchema;
