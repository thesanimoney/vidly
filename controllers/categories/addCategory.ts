import {Request, Response} from "express";
import {validateCategory} from "../../schemas/server-validation/validateCategorySchema";
import Category from "../../schemas/db/categoriesSchema";

async function addCategory(req: Request, res: Response) {
    const {value, error} = validateCategory(req.body);
    if (error) return res.status(400).send(error.message);

    try {
        const category = new Category(value);
        await category.save()
        return res.status(200).send(category);
    } catch (error) {
        if (error instanceof Error) return res.status(500).send(error.message);
    }
}

export default addCategory;