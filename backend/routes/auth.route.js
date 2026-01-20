import express from "express";
import { forgotPassword, login, logout, signup, verifyEmail } from "../controllers/auth.controller.js";

const AuthRouter = express.Router();

AuthRouter.post("/signup", signup);
AuthRouter.post("/verify-email", verifyEmail);
AuthRouter.post("/login", login);
AuthRouter.post("/logout", logout);
AuthRouter.post("/forgot-password", forgotPassword);



export default AuthRouter;