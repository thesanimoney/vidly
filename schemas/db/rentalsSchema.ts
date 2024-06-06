import mongoose from "mongoose";
import {customerSchema} from "./customerSchema";

const rentalSchema = new mongoose.Schema({
    customer: { type: customerSchema },
    course: {
        type: new mongoose.Schema({
            name: {type: String, required: true, minlength: 3, maxlength: 255, trim: true},
            dailyRentalRate: {type: Number, required: true, min: 0, max: 255},
        })},
    dateOut: {type: Date, required: true, default: Date.now},
    dateReturned: {type: Date},
    rentalFee: {type: Number, required: true, min: 0},
})

const Rental = mongoose.model("Rental", rentalSchema,)
export default Rental