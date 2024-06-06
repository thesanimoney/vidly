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
const validateRentalSchema_1 = require("../../schemas/server-validation/validateRentalSchema");
const rentalsSchema_1 = __importDefault(require("../../schemas/db/rentalsSchema"));
const courseSchema_1 = require("../../schemas/db/courseSchema");
function addRental(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { value, error } = (0, validateRentalSchema_1.validateRentalSchema)(req.body);
        if (error)
            return res.status(400).send(error.message);
        try {
            const course = yield courseSchema_1.Course.findById(value.courseId);
            const customer = yield customerSchema_1.default.findById(value.customerId);
            const rentalFee = course.dailyRent * 3;
            const rental = new rentalsSchema_1.default({
                course: {
                    name: course.name,
                    dailyRentalRate: course.dailyRent
                },
                rentalFee: rentalFee,
                customer: customer
            });
            course.numberInStock--;
            const result = yield rental.save();
            return res.status(200).send(result);
        }
        catch (e) {
            if (e instanceof Error)
                return res.status(500).send(e.message);
        }
    });
}
exports.default = addRental;
