import express from "express";
import { signup } from "../controllers/auth.controller.js";

const AuthRouter = express.Router();

AuthRouter.get("/signup", signup);

AuthRouter.get("/login", (req, res) => {
  res.send("Login page");
});

AuthRouter.get("/logout", (req, res) => {
  res.send("logout page");
});

export default AuthRouter;