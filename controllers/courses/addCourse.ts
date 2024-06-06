import {Request, Response} from "express";
import validateCourse from "../../schemas/server-validation/validateCourseSchema";
import {Course} from "../../schemas/db/courseSchema";
import Category from "../../schemas/db/categoriesSchema";

async function addCourse(req: Request, res: Response) {
    const {value, error} = validateCourse(req.body);
    if (error) return res.status(400).send(error.message);

    const category = await Category.findById(value.category._id)
    if (!category) return res.status(404).send("Category not found");

    try {
        const course = new Course(value);
        await course.save()
        return res.status(200).send(course)
    } catch (error) {
        if (error instanceof Error) return res.status(500).send(error.message);
    }
}

export default addCourse;