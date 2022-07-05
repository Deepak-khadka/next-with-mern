import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();

app.use(express.json());

try {
    mongoose.connect("mongodb://localhost:/kathford", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

} catch (err) {
    console.log(err);
}

console.log("Server is running")