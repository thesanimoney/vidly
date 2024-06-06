import mongoose from "mongoose";
import {categorySchema} from "./categoriesSchema";

// noinspection JSUnusedGlobalSymbols
export const courseSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 3, maxlength: 255},
    description: {type: String, required: true, minLength: 10, maxlength: 255},
    tags: {
        type: [String], validate: {
            validator: function (array: string[]) {
                return array.length > 0;
            },
            message: 'Please enter a tags for this course.',
        }
    },
    isPublished: {type: Boolean, default: false},
    price: {
        type: Number, required: function (this: { isPublished: boolean }) {
            return this.isPublished
        }
    },
    category: {type: categorySchema, required: true},
    numberInStock: {type: Number, required: true},
    dailyRent: {type: Number, required: true},
})

export const Course = mongoose.model('course', courseSchema)