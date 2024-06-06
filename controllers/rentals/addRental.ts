import {Request, Response} from "express";
import Customer from "../../schemas/db/customerSchema";
import {validateRentalSchema} from "../../schemas/server-validation/validateRentalSchema";
import Rental from "../../schemas/db/rentalsSchema";
import {Course} from "../../schemas/db/courseSchema";

async function addRental(req: Request, res: Response) {
    const {value, error} = validateRentalSchema(req.body);
    if (error) return res.status(400).send(error.message);

    try {
        const course = await Course.findById(value.courseId);
        const customer = await Customer.findById(value.customerId);
        const rentalFee = course!.dailyRent * 3

        const rental = new Rental({
            course: {
                name: course!.name,
                dailyRentalRate: course!.dailyRent
            },
            rentalFee: rentalFee,
            customer: customer
        })

        course!.numberInStock--
        const result = await rental.save()
        return res.status(200).send(result)

    } catch (e) {
        if (e instanceof Error) return res.status(500).send(e.message);
    }
}

export default addRental;