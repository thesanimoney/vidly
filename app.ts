import express from "express";
// import {port} from "./config/config";
import connectToMongoClient from "./services/mongoConnection";
import runMiddlewares from "./middleware";

export const app = express();
connectToMongoClient()
runMiddlewares(app);

app.listen(3333, () => {
    console.log('Listening on port... ', 3333);
})


