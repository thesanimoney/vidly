"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCustomer = void 0;
const Joi = __importStar(require("joi"));
const phoneRegex = /^\+?[1-9]\d{6,14}$/;
const customerSchemaValidation = Joi.object({
    _id: Joi.optional(),
    name: Joi.string().required().min(3).max(255),
    phone: Joi.string().required().pattern(phoneRegex).message('Please enter a valid phone number'),
    isGold: Joi.boolean().required(),
    __v: Joi.optional()
});
const validateCustomer = (object) => {
    return customerSchemaValidation.validate(object);
};
exports.validateCustomer = validateCustomer;
