import mongoose from "mongoose";

export const categorySchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 2, maxlength: 50},
})

const Category = mongoose.model("Category", categorySchema)
export default Category