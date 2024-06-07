import {Course} from "../../schemas/db/courseSchema";
import {Request, Response} from "express";

async function getCourses(req: Request, res: Response) {
        const courses = await Course.find().limit(5).select('-__v')
        return res.status(200).send(courses);
}

export default getCourses;