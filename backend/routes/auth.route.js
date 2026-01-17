import express from "express";
import { logout, signup, verifyEmail } from "../controllers/auth.controller.js";

const AuthRouter = express.Router();

AuthRouter.post("/signup", signup);
AuthRouter.post("/verify-email", verifyEmail);
AuthRouter.post("/logout", logout);

AuthRouter.get("/login", (req, res) => {
  res.send("Login page");
});


export default AuthRouter;