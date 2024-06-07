import cors from "cors";
import compression from "compression";
import express, {Express} from "express";
import router from "../routes";
import errorHandling from "./errorHandling";
import helmet from "helmet";

const corsOptions = {
    exposedHeaders: ['x-auth-token'],
};

export default function runMiddlewares(app: Express) {
    app.use(helmet())
    app.use(cors(corsOptions))
    app.use(compression())
    app.use(express.json());
    app.use(router)
    app.use(errorHandling)
}