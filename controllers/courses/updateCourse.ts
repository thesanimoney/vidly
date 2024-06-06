import {Request, Response} from "express";
import validateCourse from "../../schemas/server-validation/validateCourseSchema";
import {Course} from "../../schemas/db/courseSchema";

async function updateCourse(req: Request, res: Response) {
    const id = req.params.id;
    if (!id) return res.status(400).json({error: "ID not found"});

    const course = await Course.findById(id)
    if (!course) return res.status(404).send("Not Found");

    const updatedCourse = {...course.toObject(), ...req.body}

    const {value, error} = validateCourse(updatedCourse);
    if (error) return res.status(400).send(error.message);

    try {
        const result = await Course.findByIdAndUpdate(id, {...value}, {
            new: true,
            runValidators: true
        })
        return res.status(200).send(result);
    } catch (error) {
        if (error instanceof Error) return res.status(500).send(error.message);
    }
}

export default updateCourse;