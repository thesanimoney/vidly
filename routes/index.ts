import express from "express";
import { customerRouter } from "./customer";
import { coursesRouter } from "./course";
import { authorsRouter } from "./author";
import {categoryRouter} from "./category";
import {rentalsRouter} from "./rentals";
import {usersRouter} from "./user";

const router = express.Router();

router.use(customerRouter);
router.use(coursesRouter);
router.use(authorsRouter);
router.use(categoryRouter);
router.use(rentalsRouter);
router.use(usersRouter);

export default router;