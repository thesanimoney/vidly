import express from "express";
import getCourses from "../controllers/courses/getCourses";
import addCourse from "../controllers/courses/addCourse";
import deleteCourse from "../controllers/courses/deleteCourse";
import updateCourse from "../controllers/courses/updateCourse";
import auth from "../middleware/auth";
import isAdmin from "../middleware/isAdmin";
import {Request, Response, NextFunction} from "express";
import asyncMiddleware from "../middleware/asyncMiddleware";

export const coursesRouter = express.Router();

coursesRouter.get("/api/courses", (req, res, next: NextFunction) => {
    return asyncMiddleware(() => getCourses(req, res, next), next)
})

coursesRouter.post("/api/courses", auth, (req, res, next) => {
    return asyncMiddleware(() => addCourse(req, res), next);
})

coursesRouter.delete("/api/courses/:id",[auth, isAdmin], (req: Request, res: Response, next: NextFunction) => {
    return asyncMiddleware(() => deleteCourse(req, res), next)
})

coursesRouter.put("/api/courses/:id", (req, res, next) => {
    return asyncMiddleware(() => updateCourse(req, res), next);
})