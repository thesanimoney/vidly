"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRentalSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const rentalSchemaValidation = joi_1.default.object({
    customerId: joi_1.default.string().required(),
    courseId: joi_1.default.string().required()
});
const validateRentalSchema = (object) => {
    return rentalSchemaValidation.validate(object);
};
exports.validateRentalSchema = validateRentalSchema;
