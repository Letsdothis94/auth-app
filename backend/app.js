import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/connectDB.js";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
    res.send("Hello world!");
})

const PORT = 3000;
app.listen(PORT, () => {
    connectDB();
    console.log(`Listening on port: ${PORT}`);
})