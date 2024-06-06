"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRentalSchema = void 0;
var joi_1 = require("joi");
var rentalSchemaValidation = joi_1.default.object({
    customerId: joi_1.default.string().required(),
    courseId: joi_1.default.string().required()
});
var validateRentalSchema = function (object) {
    return rentalSchemaValidation.validate(object);
};
exports.validateRentalSchema = validateRentalSchema;
