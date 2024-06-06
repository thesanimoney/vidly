import {Request, Response} from "express";
import Customer from "../../schemas/db/customerSchema";

async function getCustomer(req: Request, res: Response) {
    const customers = await Customer.find();
    return res.status(200).send(customers);
}

export default getCustomer;