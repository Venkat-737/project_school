import mongoose from "mongoose";

const testCaseSchema = new mongoose.Schema({
  input: {
    type: String,
    required: true,
  },
  expected_output: {
    type: String,
    required: true,
  },
});

const problemSchema = mongoose.Schema({
  testcases: {
    type: [testCaseSchema],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Problem = mongoose.model("Problem", problemSchema);

export default Problem;
