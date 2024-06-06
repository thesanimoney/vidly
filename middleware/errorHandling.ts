import {NextFunction, Request, Response} from "express";
import {logger} from "../services/logger";

export const ErrorHandling = (err: Error, req: Request, res: Response, next: NextFunction) => {
    logger.error(err.message + ' ' + `token: ${req.header('x-auth-token')}`)
    return res.status(500).send('Internal server error');
};

export default ErrorHandling;