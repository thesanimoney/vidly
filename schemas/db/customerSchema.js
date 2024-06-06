"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerSchema = void 0;
var mongoose_1 = require("mongoose");
exports.customerSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    isGold: { type: Boolean, required: true },
});
var Customer = mongoose_1.default.model("customer", exports.customerSchema);
exports.default = Customer;
