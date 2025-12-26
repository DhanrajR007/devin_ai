import dotenv from "dotenv";
dotenv.config();
import http from "http";
import app from "./src/app.js";
import { connectDB } from "./src/db/mongoose.db.js";
import { Server } from "socket.io";
import jwt from "jsonwebtoken";

const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (client) => {
  console.log("Client connected");
  // client.on("event", (data) => {
  //   console.log(data);
  // });

  // client.on("disconnect", () => {
  //   console.log("Client disconnected");
  // });
});
io.use((socket, next) => {
  try {
    const token =
      socket.handshake.headers.token ||
      socket.handshake.headers.authorization?.split(" ")[1];

    if (!token) {
      return next(new Error("No token found"));
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    socket.user = decoded;
    next();
  } catch (err) {
    next(new Error("Invalid token"));
  }
});

io.on("error", (error) => {
  console.error("Socket error:", error);
});

connectDB();

server.listen(process.env.PORT || 3000, () => {
  console.log("Server running on port 3000");
});
