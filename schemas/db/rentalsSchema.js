"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var customerSchema_1 = require("./customerSchema");
var rentalSchema = new mongoose_1.default.Schema({
    customer: { type: customerSchema_1.customerSchema },
    course: {
        type: new mongoose_1.default.Schema({
            name: { type: String, required: true, minlength: 3, maxlength: 255, trim: true },
            dailyRentalRate: { type: Number, required: true, min: 0, max: 255 },
        })
    },
    dateOut: { type: Date, required: true, default: Date.now },
    dateReturned: { type: Date },
    rentalFee: { type: Number, required: true, min: 0 },
});
var Rental = mongoose_1.default.model("Rental", rentalSchema);
exports.default = Rental;
