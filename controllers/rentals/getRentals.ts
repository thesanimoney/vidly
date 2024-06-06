import {Request, Response} from "express";
import Rental from "../../schemas/db/rentalsSchema";

async function getRentals(req: Request, res: Response) {
    const rentals = await Rental.find().sort("-dateOut");
    return res.status(200).send(rentals);
}

export default getRentals;