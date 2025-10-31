import { useRef, useState } from "react";
import CodePanel from "./components/CodePanel";
import OutputPanel from "./components/OutputPanel";

export default function App() {
  const [language, setLanguage] = useState("javascript");
  const editorRef = useRef(null)

  return (
    <>
      <div style={{ display: "flex" }}>
        <CodePanel language={language} setLanguage={setLanguage} editorRef={editorRef} />
        <OutputPanel editorRef={editorRef} language={language} />
      </div>
    </>
  );
}

