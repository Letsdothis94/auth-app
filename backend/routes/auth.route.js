import express from "express";
import { checkAuth, forgotPassword, login, logout, resetPassword, signup, verifyEmail } from "../controllers/auth.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const AuthRouter = express.Router();

AuthRouter.get("/check-auth", verifyToken, checkAuth);
AuthRouter.post("/signup", signup);
AuthRouter.post("/verify-email", verifyEmail);
AuthRouter.post("/login", login);
AuthRouter.post("/logout", logout);
AuthRouter.post("/forgot-password", forgotPassword);
AuthRouter.post("/reset-password/:token", resetPassword);



export default AuthRouter;