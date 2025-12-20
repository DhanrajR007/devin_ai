import express from "express";
import morgan from "morgan";
import cors from "cors";
import authRoute from "./routes/auth.route.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(cors());

app.use("/api/auth", authRoute);
export default app;
