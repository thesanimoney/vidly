import {Request, Response} from "express";
import User from "../../schemas/db/userSchema";
import {validateUserLogin} from "../../schemas/server-validation/validateUserLogin";
import comparePasswords from "../../services/comparePasswords";

export default async function loginUser(req: Request, res: Response) {
    const {value, error} = validateUserLogin(req.body);
    if (error) return res.status(400).send(error.message);

    try {
        const user = await User.findOne({email: value.email});
        if (!user) return res.status(404).send("User does not exist");

        const isPasswordValid = await comparePasswords(value.password, user.password);
        if (!isPasswordValid) return res.status(400).send("Password is incorrect");

        const token = user.generateAuthToken()
        return res.header('x-auth-token', token).send({email: user.email, name: user.name})

    } catch (e) {
        if (e instanceof Error) return res.status(500).send(e.message);
    }
}
