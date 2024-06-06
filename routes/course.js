"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.coursesRouter = void 0;
const express_1 = __importDefault(require("express"));
const getCourses_1 = __importDefault(require("../controllers/courses/getCourses"));
const addCourse_1 = __importDefault(require("../controllers/courses/addCourse"));
const deleteCourse_1 = __importDefault(require("../controllers/courses/deleteCourse"));
const updateCourse_1 = __importDefault(require("../controllers/courses/updateCourse"));
const auth_1 = __importDefault(require("../middleware/auth"));
const isAdmin_1 = __importDefault(require("../middleware/isAdmin"));
const asyncMiddleware_1 = __importDefault(require("../middleware/asyncMiddleware"));
exports.coursesRouter = express_1.default.Router();
exports.coursesRouter.get("/api/courses", (req, res, next) => {
    return (0, asyncMiddleware_1.default)(() => (0, getCourses_1.default)(req, res, next), next);
});
exports.coursesRouter.post("/api/courses", auth_1.default, (req, res, next) => {
    return (0, asyncMiddleware_1.default)(() => (0, addCourse_1.default)(req, res), next);
});
exports.coursesRouter.delete("/api/courses/:id", [auth_1.default, isAdmin_1.default], (req, res, next) => {
    return (0, asyncMiddleware_1.default)(() => (0, deleteCourse_1.default)(req, res), next);
});
exports.coursesRouter.put("/api/courses/:id", (req, res, next) => {
    return (0, asyncMiddleware_1.default)(() => (0, updateCourse_1.default)(req, res), next);
});
