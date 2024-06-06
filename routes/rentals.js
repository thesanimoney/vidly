"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rentalsRouter = void 0;
var express = require("express");
var addRental_1 = require("../controllers/rentals/addRental");
var getRentals_1 = require("../controllers/rentals/getRentals");
exports.rentalsRouter = express.Router();
exports.rentalsRouter.post("/api/rentals", function (req, res) {
    return (0, addRental_1.default)(req, res);
});
exports.rentalsRouter.get("/api/rentals/", function (req, res) {
    return (0, getRentals_1.default)(req, res);
});
