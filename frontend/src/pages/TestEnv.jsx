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
    console.log("here is the current model value:", value);
  }

  return (
    <div className="flex">
      <div className="flex flex-col" id="activity">
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
