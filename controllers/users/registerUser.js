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
const validateUserSchema_1 = require("../../schemas/server-validation/validateUserSchema");
const userSchema_1 = __importDefault(require("../../schemas/db/userSchema"));
const hashPassword_1 = __importDefault(require("../../services/hashPassword"));
function registerUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { value, error } = (0, validateUserSchema_1.validateUserSchema)(req.body);
        if (error)
            return res.status(400).send(error.message);
        if (yield userSchema_1.default.findOne({ email: value.email })) {
            return res.status(400).send("Email already registered");
        }
        const password = yield (0, hashPassword_1.default)(value.password);
        try {
            const user = new userSchema_1.default({
                email: value.email,
                name: value.name,
                password: password,
            });
            yield user.save();
            const token = user.generateAuthToken();
            return res.header('x-auth-token', token).send({ email: user.email, name: user.name });
        }
        catch (error) {
            if (error instanceof Error)
                return res.status(500).send(error.message);
        }
    });
}
exports.default = registerUser;
