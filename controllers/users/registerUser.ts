import {Request, Response} from "express";
import {validateUserSchema} from "../../schemas/server-validation/validateUserSchema";
import User from "../../schemas/db/userSchema";
import hashPassword from "../../services/hashPassword";

async function registerUser(req: Request, res: Response) {
    const {value, error} = validateUserSchema(req.body);
    if (error) return res.status(400).send(error.message);

    if (await User.findOne({email: value.email})) {
        return res.status(400).send("Email already registered");
    }

    const password = await hashPassword(value.password)

    try {
        const user = new User({
            email: value.email,
            name: value.name,
            password: password,
        });
        await user.save();
        const token = user.generateAuthToken()
        return res.header('x-auth-token', token).send({email: user.email, name: user.name})
    } catch (error) {
        if (error instanceof Error) return res.status(500).send(error.message);
    }
}

export default registerUser;
