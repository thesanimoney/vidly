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
const validateAuthorSchema_1 = require("../../schemas/server-validation/validateAuthorSchema");
const authorSchema_1 = __importDefault(require("../../schemas/db/authorSchema"));
function addAuthor(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { value, error } = (0, validateAuthorSchema_1.validateAuthor)(req.body);
        if (error)
            return res.status(400).send(error.message);
        try {
            const author = new authorSchema_1.default(value);
            yield author.save();
            return res.status(200).send(author);
        }
        catch (error) {
            if (error instanceof Error)
                return res.status(500).send(error.message);
        }
    });
}
exports.default = addAuthor;
