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
const Joi = __importStar(require("joi"));
const courseSchemaValidation = Joi.object({
    _id: Joi.optional(),
    __v: Joi.optional(),
    name: Joi.string().min(3).max(255).required(),
    tags: Joi.array().min(1).max(255).required(),
    description: Joi.string().min(3).max(255).required(),
    isPublished: Joi.boolean().required(),
    price: Joi.number().when('isPublished', {
        is: true,
        then: Joi.required(),
        otherwise: Joi.optional()
    }),
    category: {
        _id: Joi.string().hex().length(24),
        name: Joi.string().min(3).max(255)
    },
    numberInStock: Joi.number().required(),
    dailyRent: Joi.number().required(),
});
const validateCourse = (object) => {
    return courseSchemaValidation.validate(object);
};
exports.default = validateCourse;
