import React, { useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";

export default function CreateProblem() {
  const wrapperRef = useRef(null);
  const editorRef = useRef(null);
  const quillInstanceRef = useRef(null);

  useEffect(() => {
    if (!wrapperRef.current || editorRef.current || quillInstanceRef.current)
      return;

    editorRef.current = document.createElement("div");
    wrapperRef.current.appendChild(editorRef.current);

    quillInstanceRef.current = new Quill(editorRef.current, { theme: "snow" });

    return () => {
      if (quillInstanceRef.current) {
        quillInstanceRef.current = null; // Clear Quill instance reference
        editorRef.current.remove();
      }
    };
  }, []);

  return <div id="container" ref={wrapperRef}></div>;
}
