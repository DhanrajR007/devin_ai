import express from "express";
import {
  addUserToProjectController,
  createProjectController,
  getProjectByIdController,
  getProjectsController,
} from "../controllers/project.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { body } from "express-validator";
const router = express.Router();

router.post(
  "/create",
  body("name").isString().withMessage("Name is required"),
  authMiddleware,
  createProjectController
);

router.get("/all", authMiddleware, getProjectsController);
router.put("/add-user", authMiddleware, addUserToProjectController);
router.get("/:id", authMiddleware, getProjectByIdController);
export default router;
