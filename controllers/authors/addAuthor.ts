import {Request, Response} from "express";
import {validateAuthor} from "../../schemas/server-validation/validateAuthorSchema";
import Author from "../../schemas/db/authorSchema";

async function addAuthor(req: Request, res: Response) {
    const {value, error} = validateAuthor(req.body);
    if (error) return res.status(400).send(error.message);

    try {
        const author = new Author(value);
        await author.save()
        return res.status(200).send(author);
    } catch (error) {
        if (error instanceof Error) return res.status(500).send(error.message);
    }
}

export default addAuthor;