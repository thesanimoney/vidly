"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAuthor = void 0;
const joi_1 = __importDefault(require("joi"));
const authorSchemaValidation = joi_1.default.object({
    _id: joi_1.default.optional(),
    name: joi_1.default.string().required().min(3).max(255),
    age: joi_1.default.number().required().min(1).max(130),
    __v: joi_1.default.optional()
});
const validateAuthor = (object) => {
    return authorSchemaValidation.validate(object);
};
exports.validateAuthor = validateAuthor;
