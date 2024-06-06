import {Request, Response} from "express";
import User from "../../schemas/db/userSchema";

async function getUserInfo(req: Request, res: Response) {
    const {id} = req.body.user
    const user = await User.find({_id: id}).select('-password');
    return res.status(200).send(user);
}

export default getUserInfo;