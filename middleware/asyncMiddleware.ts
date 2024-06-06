import {NextFunction} from "express";

export default async function asyncMiddleware(handler: () => any, next: NextFunction) {
    try {
         await handler()
    } catch (ex) {
        next(ex)
    }
}