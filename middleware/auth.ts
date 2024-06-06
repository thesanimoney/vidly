import {NextFunction, Response, Request} from "express";
import * as jwt from "jsonwebtoken";
import {jwtSecret} from "../config/config";

export default function auth(req: Request, res: Response, next: NextFunction) {
    const token = req.header('x-auth-token');
    if (!token) return res.status(401).send('Access Denied. Token not found');

    try {
        req.body.user = jwt.verify(token, jwtSecret)
        next()
    } catch (ex) {
        if (ex instanceof Error) {
            res.status(404).send("Invalid token");
        }
    }
}