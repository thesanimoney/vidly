import {Request, Response} from "express";
import Category from "../../schemas/db/categoriesSchema";

async function deleteCategory(req: Request, res: Response) {
    const id = req.params.id;
    if (!id) return res.status(404).send("Not Found");

    try {
        const result = await Category.findByIdAndDelete(id)
        return res.status(200).send(result)
    } catch (error) {
        if (error instanceof Error) return res.status(500).send(error.message);
    }
}

export default deleteCategory;