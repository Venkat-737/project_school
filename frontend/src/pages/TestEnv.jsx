import Editor from "@monaco-editor/react";
export default function TestEnv() {
  return (
    <Editor
      height="400px"
      width="500px"
      defaultLanguage="javascript"
      defaultValue="// some comment"
      theme="vs-dark"
    />
  );
}
