import Editor from "@monaco-editor/react";
export default function TestEnv() {
  return (
    <Editor
      height="90vh"
      defaultLanguage="javascript"
      defaultValue="// some comment"
    />
  );
}
