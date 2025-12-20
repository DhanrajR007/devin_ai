import dotenv from "dotenv";
dotenv.config();
import http from "http";
import app from "./src/app.js";

const server = http.createServer(app);

server.listen(process.env.PORT || 3000, () => {
  console.log("Server running on port 3000");
});
