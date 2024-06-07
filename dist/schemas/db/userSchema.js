"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../../config/config");
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const userSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true, minlength: 3, maxlength: 255 },
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
    return jsonwebtoken_1.default.sign({ email: this.email, name: this.name, id: this._id, isAdmin: this.isAdmin }, config_1.jwtSecret);
};
const User = mongoose_1.default.model("User", userSchema);
exports.default = User;
