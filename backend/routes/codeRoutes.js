import express from "express";
import { postCodes } from "../controllers/codeController.js";

const router = express.Router();

router.post("/", postCodes);

export default router;
