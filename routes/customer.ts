import express from "express";
import getCustomers from "../controllers/customers/getCustomers";
import addCustomer from "../controllers/customers/addCustomers";
import deleteCustomer from "../controllers/customers/deleteCustomer";
import updateCustomer from "../controllers/customers/updateCustomer";

export const customerRouter = express.Router();

customerRouter.get("/api/customers", (req, res) => {
    return getCustomers(req, res);
})

customerRouter.post("/api/customers", (req, res) => {
    return addCustomer(req, res);
})

customerRouter.delete("/api/customers/:id", (req, res) => {
    return deleteCustomer(req, res);
})

customerRouter.put("/api/customers/:id", (req, res) => {
    return updateCustomer(req, res);
})