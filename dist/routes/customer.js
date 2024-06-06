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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerRouter = void 0;
const express = __importStar(require("express"));
const getCustomers_1 = __importDefault(require("../controllers/customers/getCustomers"));
const addCustomers_1 = __importDefault(require("../controllers/customers/addCustomers"));
const deleteCustomer_1 = __importDefault(require("../controllers/customers/deleteCustomer"));
const updateCustomer_1 = __importDefault(require("../controllers/customers/updateCustomer"));
exports.customerRouter = express.Router();
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
