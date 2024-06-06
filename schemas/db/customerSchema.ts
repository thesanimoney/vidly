import mongoose from "mongoose";

export const customerSchema = new mongoose.Schema({
    name: {type: String, required: true},
    phone: {type: String, required: true},
    isGold: {type: Boolean, required: true},
})

const Customer = mongoose.model("customer", customerSchema)
export default Customer