import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { errorHandler } from "./middlewares/errorMiddleware.js";
dotenv.config();
connectDB();
const app = express();

app.get("/", (req, res) => res.send("App is running"));
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
