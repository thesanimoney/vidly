"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAuthor = void 0;
var Joi = require("joi");
var authorSchemaValidation = Joi.object({
    _id: Joi.optional(),
    name: Joi.string().required().min(3).max(255),
    age: Joi.number().required().min(1).max(130),
    __v: Joi.optional()
});
var validateAuthor = function (object) {
    return authorSchemaValidation.validate(object);
};
exports.validateAuthor = validateAuthor;
