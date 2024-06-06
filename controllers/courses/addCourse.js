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
const validateCourseSchema_1 = __importDefault(require("../../schemas/server-validation/validateCourseSchema"));
const courseSchema_1 = require("../../schemas/db/courseSchema");
const categoriesSchema_1 = __importDefault(require("../../schemas/db/categoriesSchema"));
function addCourse(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { value, error } = (0, validateCourseSchema_1.default)(req.body);
        if (error)
            return res.status(400).send(error.message);
        const category = yield categoriesSchema_1.default.findById(value.category._id);
        if (!category)
            return res.status(404).send("Category not found");
        try {
            const course = new courseSchema_1.Course(value);
            yield course.save();
            return res.status(200).send(course);
        }
        catch (error) {
            if (error instanceof Error)
                return res.status(500).send(error.message);
        }
    });
}
exports.default = addCourse;
