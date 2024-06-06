import * as express from "express";
import addAuthor from "../controllers/authors/addAuthor";
import deleteAuthor from "../controllers/authors/deleteAuthor";

export const authorsRouter = express.Router();

authorsRouter.post("/api/authors", (req, res) => {
    return addAuthor(req, res);
})

authorsRouter.delete("/api/authors/:id", (req, res) => {
    return deleteAuthor(req, res);
})