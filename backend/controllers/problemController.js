import asyncHandler from "express-async-handler";
import Problem from "../models/problemModel.js";

const createProblem = asyncHandler(async (req, res) => {
  const { testcases, description } = req.body;
  try {
    const problem = await Problem.create({
      testcases: testcases,
      description: description,
    });
    res.status(200).json(problem);
  } catch (error) {
    res.json(error.message);
  }
});

const showProblem = asyncHandler(async (req, res) => {});

const updateProblem = asyncHandler(async (req, res) => {});

const destroyProblem = asyncHandler(async (req, res) => {});

const executeProblem = asyncHandler(async (req, res) => {});

export {
  createProblem,
  updateProblem,
  destroyProblem,
  showProblem,
  executeProblem,
};
