"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUserLogin = void 0;
const joi_1 = __importDefault(require("joi"));
const userLoginValidation = joi_1.default.object({
    password: joi_1.default.string().required().min(6).max(1024),
    email: joi_1.default.string().required().email()
});
const validateUserLogin = (object) => {
    return userLoginValidation.validate(object);
};
exports.validateUserLogin = validateUserLogin;
