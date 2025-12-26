import express from "express";
import morgan from "morgan";
import cors from "cors";
import authRoute from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import projectRoute from "./routes/project.route.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(morgan("dev"));
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/auth", authRoute);
app.use("/api/project", projectRoute);
export default app;
