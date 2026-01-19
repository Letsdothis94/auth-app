import express from "express";
import { login, logout, signup, verifyEmail } from "../controllers/auth.controller.js";

const AuthRouter = express.Router();

AuthRouter.post("/signup", signup);
AuthRouter.post("/verify-email", verifyEmail);
AuthRouter.post("/logout", logout);

AuthRouter.post("/login", login);


export default AuthRouter;