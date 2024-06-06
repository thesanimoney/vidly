"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerRouter = void 0;
var express = require("express");
var getCustomers_1 = require("../controllers/customers/getCustomers");
var addCustomers_1 = require("../controllers/customers/addCustomers");
var deleteCustomer_1 = require("../controllers/customers/deleteCustomer");
var updateCustomer_1 = require("../controllers/customers/updateCustomer");
exports.customerRouter = express.Router();
exports.customerRouter.get("/api/customers", function (req, res) {
    return (0, getCustomers_1.default)(req, res);
});
exports.customerRouter.post("/api/customers", function (req, res) {
    return (0, addCustomers_1.default)(req, res);
});
exports.customerRouter.delete("/api/customers/:id", function (req, res) {
    return (0, deleteCustomer_1.default)(req, res);
});
exports.customerRouter.put("/api/customers/:id", function (req, res) {
    return (0, updateCustomer_1.default)(req, res);
});
