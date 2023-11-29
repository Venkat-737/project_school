import Code from "../models/codeModel.js";
import asyncHandler from "express-async-handler";
import axios from "axios";

const postCodes = asyncHandler(async (req, res) => {
  const code = req.body.code;

  const testCases = [
    {
      language_id: 63,
      source_code: code,
      stdin: "", // Input for the first test case
      expected_output: "15\n", // Expected output for the first test case
    },
    {
      language_id: 63,
      source_code: code,
      stdin: "5\n10\n", // Input for the second test case
      expected_output: "15\n", // Expected output for the second test case
    },
    // Add more test cases as needed
  ];

  try {
    const results = [];

    for (const testCase of testCases) {
      const judgeToken = await axios.post(
        "http://localhost:6000/submissions",
        testCase
      );

      const token = judgeToken.data.token;

      const judgeResponse = await axios.get(
        `http://localhost:6000/submissions/${token}`
      );

      results.push(judgeResponse.data);
    }

    res.status(200).json({ results });
  } catch (error) {
    console.error("Error submitting code:", error);
    res.status(500).json({ error: "Failed to run test cases" });
  }
});

export { postCodes };
