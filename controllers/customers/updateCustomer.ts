import {Request, Response} from "express";
import Customer from "../../schemas/db/customerSchema";
import {validateCustomer} from "../../schemas/server-validation/validateCustomerSchema";

async function updateCustomer(req: Request, res: Response) {
    const id = req.params.id;
    if (!id) return res.status(400).json({error: "ID not found"});

    const customer = await Customer.findById(id)
    if (!customer) return res.status(404).send("Not Found");

    const updatedCustomer = {...customer.toObject(), ...req.body}

    const {value, error} = validateCustomer(updatedCustomer);
    if (error) return res.status(400).send(error.message);

    try {
        const result = await Customer.findByIdAndUpdate(id, {...value}, {
            new: true,
            runValidators: true
        })
        return res.status(200).send(result);
    } catch (error) {
        if (error instanceof Error) return res.status(500).send(error.message);
    }
}

export default updateCustomer;