"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const customerSchema_1 = __importDefault(require("../../schemas/db/customerSchema"));
const validateCustomerSchema_1 = require("../../schemas/server-validation/validateCustomerSchema");
function updateCustomer(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        if (!id)
            return res.status(400).json({ error: "ID not found" });
        const customer = yield customerSchema_1.default.findById(id);
        if (!customer)
            return res.status(404).send("Not Found");
        const updatedCustomer = Object.assign(Object.assign({}, customer.toObject()), req.body);
        const { value, error } = (0, validateCustomerSchema_1.validateCustomer)(updatedCustomer);
        if (error)
            return res.status(400).send(error.message);
        try {
            const result = yield customerSchema_1.default.findByIdAndUpdate(id, Object.assign({}, value), {
                new: true,
                runValidators: true
            });
            return res.status(200).send(result);
        }
        catch (error) {
            if (error instanceof Error)
                return res.status(500).send(error.message);
        }
    });
}
exports.default = updateCustomer;
