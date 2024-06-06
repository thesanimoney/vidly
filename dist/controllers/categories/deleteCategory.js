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
const categoriesSchema_1 = __importDefault(require("../../schemas/db/categoriesSchema"));
function deleteCategory(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        if (!id)
            return res.status(404).send("Not Found");
        try {
            const result = yield categoriesSchema_1.default.findByIdAndDelete(id);
            return res.status(200).send(result);
        }
        catch (error) {
            if (error instanceof Error)
                return res.status(500).send(error.message);
        }
    });
}
exports.default = deleteCategory;
