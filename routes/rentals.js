"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rentalsRouter = void 0;
const express_1 = __importDefault(require("express"));
const addRental_1 = __importDefault(require("../controllers/rentals/addRental"));
const getRentals_1 = __importDefault(require("../controllers/rentals/getRentals"));
exports.rentalsRouter = express_1.default.Router();
exports.rentalsRouter.post("/api/rentals", (req, res) => {
    return (0, addRental_1.default)(req, res);
});
exports.rentalsRouter.get("/api/rentals/", (req, res) => {
    return (0, getRentals_1.default)(req, res);
});
