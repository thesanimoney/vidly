import express from "express";
import registerUser from "../controllers/users/registerUser";
import loginUser from "../controllers/users/loginUser";
import auth from "../middleware/auth";
import getUserInfo from "../controllers/users/getUserInfo";

export const usersRouter = express.Router();

usersRouter.post("/register/", (req, res) => {
   return registerUser(req, res);
})

usersRouter.post("/login/", (req, res) => {
   return loginUser(req, res);
})

usersRouter.get("/api/me", auth, (req, res) => {
   return getUserInfo(req, res);
})