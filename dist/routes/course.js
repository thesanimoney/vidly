"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.coursesRouter = void 0;
const express = __importStar(require("express"));
const getCourses_1 = __importDefault(require("../controllers/courses/getCourses"));
const addCourse_1 = __importDefault(require("../controllers/courses/addCourse"));
const deleteCourse_1 = __importDefault(require("../controllers/courses/deleteCourse"));
const updateCourse_1 = __importDefault(require("../controllers/courses/updateCourse"));
const auth_1 = __importDefault(require("../middleware/auth"));
const isAdmin_1 = __importDefault(require("../middleware/isAdmin"));
const asyncMiddleware_1 = __importDefault(require("../middleware/asyncMiddleware"));
exports.coursesRouter = express.Router();
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
