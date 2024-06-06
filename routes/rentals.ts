import express from "express";
import addRental from "../controllers/rentals/addRental";
import getRentals from "../controllers/rentals/getRentals";

export const rentalsRouter = express.Router();

rentalsRouter.post("/api/rentals", (req, res) => {
   return addRental(req, res);
})

rentalsRouter.get("/api/rentals/", (req, res) => {
   return getRentals(req, res);
})