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
const userSchema_1 = __importDefault(require("../../schemas/db/userSchema"));
const validateUserLogin_1 = require("../../schemas/server-validation/validateUserLogin");
const comparePasswords_1 = __importDefault(require("../../services/comparePasswords"));
function loginUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { value, error } = (0, validateUserLogin_1.validateUserLogin)(req.body);
        if (error)
            return res.status(400).send(error.message);
        try {
            const user = yield userSchema_1.default.findOne({ email: value.email });
            if (!user)
                return res.status(404).send("User does not exist");
            const isPasswordValid = yield (0, comparePasswords_1.default)(value.password, user.password);
            if (!isPasswordValid)
                return res.status(400).send("Password is incorrect");
            const token = user.generateAuthToken();
            return res.header('x-auth-token', token).send({ email: user.email, name: user.name });
        }
        catch (e) {
            if (e instanceof Error)
                return res.status(500).send(e.message);
        }
    });
}
exports.default = loginUser;
