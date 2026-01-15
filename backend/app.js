import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/connectDB.js";
import AuthRouter from "./routes/auth.route.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use("/api/auth", AuthRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    connectDB();
    console.log(`Listening on port: ${PORT}`);
})