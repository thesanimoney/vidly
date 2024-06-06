import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import {jwtSecret} from "../../config/config";

interface IUser {
    name: string
    email: string;
    password: string;
    generateAuthToken: () => string,
    isAdmin: boolean
}

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const userSchema = new mongoose.Schema<IUser>({
    name: {type: String, required: true, minlength: 3, maxlength: 255},
    email: {
        type: String,
        required: true,
        unique: true,
        match: [emailRegex, 'Please fill a valid email address'],
    },
    password: {
        type: String,
        minlength: 8,
        maxlength: 1024,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }
});

userSchema.methods.generateAuthToken = function () {
    return jwt.sign({email: this.email, name: this.name, id: this._id, isAdmin: this.isAdmin}, jwtSecret)
}

const User = mongoose.model("User", userSchema);

export default User;
