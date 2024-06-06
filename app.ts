import express from "express";
import {port} from "./config/config";
import connectToMongoClient from "./services/mongoConnection";
import runMiddlewares from "./middleware";

export const app = express();
const connection = connectToMongoClient()
runMiddlewares(app);

app.listen(3000, () => {
    console.log('Listening on port... ', port);
})


