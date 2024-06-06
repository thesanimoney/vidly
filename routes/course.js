"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.coursesRouter = void 0;
var express = require("express");
var getCourses_1 = require("../controllers/courses/getCourses");
var addCourse_1 = require("../controllers/courses/addCourse");
var deleteCourse_1 = require("../controllers/courses/deleteCourse");
var updateCourse_1 = require("../controllers/courses/updateCourse");
var auth_1 = require("../middleware/auth");
var isAdmin_1 = require("../middleware/isAdmin");
var asyncMiddleware_1 = require("../middleware/asyncMiddleware");
exports.coursesRouter = express.Router();
exports.coursesRouter.get("/api/courses", function (req, res, next) {
    return (0, asyncMiddleware_1.default)(function () { return (0, getCourses_1.default)(req, res, next); }, next);
});
exports.coursesRouter.post("/api/courses", auth_1.default, function (req, res, next) {
    return (0, asyncMiddleware_1.default)(function () { return (0, addCourse_1.default)(req, res); }, next);
});
exports.coursesRouter.delete("/api/courses/:id", [auth_1.default, isAdmin_1.default], function (req, res, next) {
    return (0, asyncMiddleware_1.default)(function () { return (0, deleteCourse_1.default)(req, res); }, next);
});
exports.coursesRouter.put("/api/courses/:id", function (req, res, next) {
    return (0, asyncMiddleware_1.default)(function () { return (0, updateCourse_1.default)(req, res); }, next);
});
