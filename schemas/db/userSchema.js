"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var jsonwebtoken_1 = require("jsonwebtoken");
var config_1 = require("../../config/config");
var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var userSchema = new mongoose_1.default.Schema({
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
var User = mongoose_1.default.model("User", userSchema);
exports.default = User;
