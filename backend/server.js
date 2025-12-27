import dotenv from "dotenv";
dotenv.config();
import http from "http";
import app from "./src/app.js";
import { connectDB } from "./src/db/mongoose.db.js";
import { Server } from "socket.io";
import jwt from "jsonwebtoken";
import Project from "./src/model/project.model.js";
import mongoose from "mongoose";

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.use(async (socket, next) => {
  try {
    const token =
      socket.handshake.auth.token ||
      socket.handshake.headers.authorization.split(" ")[1];
    const projectId = socket.handshake.query.projectId;

    if (!mongoose.Types.ObjectId.isValid(projectId)) {
      throw new Error("Invalid project ID");
    }
    socket.project = await Project.findById(projectId);
    if (!socket.project) {
      return next(new Error("Invalid project ID"));
    }
    if (!token) {
      return next(new Error("No token found"));
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return next(new Error("unauthorised"));
    }
    socket.user = decoded;
    next();
  } catch (err) {
    next(new Error("Invalid token"));
  }
});

io.on("connection", (socket) => {
  socket.roomId = socket.project._id.toString();
  socket.join(socket.roomId);

  socket.on("project-message", (data) => {
    console.log(socket.roomId, data, socket.user);
    socket.broadcast.to(socket.roomId).emit("project-message", data);
  });
  console.log("Client connected");
});
io.on("disconnect", (socket) => {
  console.log("Client disconnected");
});
io.on("error", (socket) => {
  console.log("Client error");
});
connectDB();

server.listen(process.env.PORT || 3000, () => {
  console.log("Server running on port 3000");
});
