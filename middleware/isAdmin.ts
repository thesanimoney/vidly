import {NextFunction, Request, Response} from "express";

export default function isAdmin(req: Request, res: Response, next: NextFunction) {
    if (req.body.user.isAdmin) return res.status(403).send("Request Forbidden 403");
    next()
}