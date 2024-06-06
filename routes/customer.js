"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerRouter = void 0;
const express_1 = __importDefault(require("express"));
const getCustomers_1 = __importDefault(require("../controllers/customers/getCustomers"));
const addCustomers_1 = __importDefault(require("../controllers/customers/addCustomers"));
const deleteCustomer_1 = __importDefault(require("../controllers/customers/deleteCustomer"));
const updateCustomer_1 = __importDefault(require("../controllers/customers/updateCustomer"));
exports.customerRouter = express_1.default.Router();
exports.customerRouter.get("/api/customers", (req, res) => {
    return (0, getCustomers_1.default)(req, res);
});
exports.customerRouter.post("/api/customers", (req, res) => {
    return (0, addCustomers_1.default)(req, res);
});
exports.customerRouter.delete("/api/customers/:id", (req, res) => {
    return (0, deleteCustomer_1.default)(req, res);
});
exports.customerRouter.put("/api/customers/:id", (req, res) => {
    return (0, updateCustomer_1.default)(req, res);
});
