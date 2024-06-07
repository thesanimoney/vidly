"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUserSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const userSchemaValidation = joi_1.default.object({
    name: joi_1.default.string().required().min(3).max(255),
    password: joi_1.default.string().required().min(8),
    email: joi_1.default.string().required().email()
});
const validateUserSchema = (object) => {
    return userSchemaValidation.validate(object);
};
exports.validateUserSchema = validateUserSchema;
