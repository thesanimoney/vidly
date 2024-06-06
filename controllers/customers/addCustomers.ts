import { Request, Response } from "express";
import Customer from "../../schemas/db/customerSchema";
import {validateCustomer} from "../../schemas/server-validation/validateCustomerSchema";

async function addCustomer(req: Request, res: Response) {
    const {value, error} = validateCustomer(req.body);
    if (error) return res.status(400).send(error.message);

    const customer = new Customer(value)
    const result = await customer.save()

    return res.status(200).send(result)
}

export default addCustomer;