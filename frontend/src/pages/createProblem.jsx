import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Problem() {
  const [value, setValue] = useState("");

  return (
    <>
      <div className="px-6 py-4">
        <h1>Hello</h1>
        <ReactQuill theme="snow" value={value} onChange={setValue} />
      </div>
    </>
  );
}

export default Problem;
