import {Request, Response} from "express";
import Author from "../../schemas/db/authorSchema";

async function deleteAuthor(req: Request, res: Response) {
    const id = req.params.id;
    if (!id) return res.status(404).send("Not Found");

    try {
        const result = await Author.findByIdAndDelete(id)
        return res.status(200).send(result)
    } catch (error) {
        if (error instanceof Error) return res.status(500).send(error.message);
    }
}

export default deleteAuthor;