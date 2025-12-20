import dotenv from "dotenv";
dotenv.config();
import http from "http";
import app from "./src/app.js";
import { connectDB } from "./src/db/mongoose.db.js";

const server = http.createServer(app);

connectDB();

server.listen(process.env.PORT || 3000, () => {
  console.log("Server running on port 3000");
});
