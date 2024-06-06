import express from "express";
import addCategory from "../controllers/categories/addCategory";
import deleteCategory from "../controllers/categories/deleteCategory";

export const categoryRouter = express.Router();

categoryRouter.post("/api/category", (req, res, next) => {
    return addCategory(req, res);
})

categoryRouter.delete("/api/category/:id", (req, res) => {
    return deleteCategory(req, res);
})