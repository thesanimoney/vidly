import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 2, maxlength: 255},
    age: {type: Number, required: true},
})

const Author = mongoose.model("Author", authorSchema)
export default Author