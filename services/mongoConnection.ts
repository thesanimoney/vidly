import mongoose from "mongoose";
import {logger} from "./logger";
import {dbProd} from "../config/config";

export default async function connectToMongoClient() {
    try {
        await mongoose.connect(dbProd);
        return logger.info('MongoDB is connected...');
    } catch (err) {
        return logger.error(err);
    }
}