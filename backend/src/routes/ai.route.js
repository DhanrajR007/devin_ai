import express from "express";
import { geminiAI } from "../service/ai.service.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const prompt = req.query.prompt;
  const response = await geminiAI(prompt);
  res.send(response);
});

export default router;
