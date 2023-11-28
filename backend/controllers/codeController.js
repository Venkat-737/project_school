import Code from "../models/codeModel.js";
import asyncHandler from "express-async-handler";

const postCodes = asyncHandler(async (req, res) => {
  if (!req.body.code) {
    res.status(400);
    throw new Error("Please add something");
  }

  const code = await Code.create({
    code: req.body.code,
  });

  res.status(200).json(code);
});

export { postCodes };
