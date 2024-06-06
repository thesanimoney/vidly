"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRentalSchema = void 0;
var Joi = require("joi");
var rentalSchemaValidation = Joi.object({
    customerId: Joi.string().required(),
    courseId: Joi.string().required()
});
var validateRentalSchema = function (object) {
    return rentalSchemaValidation.validate(object);
};
exports.validateRentalSchema = validateRentalSchema;
