"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCategory = void 0;
const joi_1 = __importDefault(require("joi"));
const categorySchemaValidation = joi_1.default.object({
    _id: joi_1.default.optional(),
    name: joi_1.default.string().required().min(3).max(255),
    __v: joi_1.default.optional()
});
const validateCategory = (object) => {
    return categorySchemaValidation.validate(object);
};
exports.validateCategory = validateCategory;
