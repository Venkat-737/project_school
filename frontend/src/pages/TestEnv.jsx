import Editor from "@monaco-editor/react";
import { useEffect, useState } from "react";
import Split from "split.js";
import axios from "axios";

export default function TestEnv() {
  const [code, setCode] = useState("// Some comment");

  useEffect(() => {
    Split(["#activity", "#description"], {
      sizes: [50, 50],
      direction: "horizontal",
      gutterSize: 5,
    });
  }, []);

  function handleEditorCode(value, event) {
    console.log(value);
    setCode(value);
  }

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:6000/submissions", {
        source_code: "a = 5\nb = 10\nprint(a + b)",
        language_id: 26,
        stdin: "",
        expected_output: "15\n",
      });

      // Handle successful response
      console.log("Response Data:", response.data);
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log("Response Data:", error.response.data);
        console.log("Response Status:", error.response.status);
      } else if (error.request) {
        // The request was made but no response was received
        console.log("No response received. Request details:", error.request);
      } else {
        // Something happened in setting up the request that triggered an error
        console.log("Error:", error.message);
      }
    }
  };

  return (
    <div className="flex">
      <div className="flex flex-col" id="activity">
        <div className="toolbar w-full h-[50px] bg-gray-400">
          <button className="submitbtn" onClick={handleSubmit}>
            Submit
          </button>
        </div>
        <Editor
          height="400px"
          width="100%"
          defaultLanguage="javascript"
          defaultValue={code}
          theme="vs-dark"
          onChange={handleEditorCode}
        />
        <div className="test-area w-full h-32 bg-blue-300"></div>
      </div>
      <div className="bg-blue-500" id="description">
        Test
      </div>
    </div>
  );
}
