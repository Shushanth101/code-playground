import { useRef, useState } from "react";
import { LANGUAGES } from "./constants";
import { Editor } from "@monaco-editor/react";
import { executeCode } from "./api";

export default function App() {
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState(LANGUAGES["javascript"].defaultCode);
  const outputRef = useRef(null)
  const editorRef = useRef(null)
  const handleEditorMount = (editor) => {
    editorRef.current = editor
    editor.focus();
  };

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    setLanguage(newLang);
    setCode(LANGUAGES[newLang].defaultCode);
  };

  const handleCodeChange = (value) => {
    setCode(value);
  };

  const handleRun = async () => {
    outputRef.current.innerText = "Running Code please wait!..."
    const sourceCode = editorRef.current.getValue()
    if(!sourceCode) return
    try{
      const {run:result} = await executeCode(language,sourceCode)
      const outputs = result.output.split("\n")
      outputRef.current.innerText = result.output
    }
    catch(error){

    }
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        
        <div>
          <select onChange={handleLanguageChange} value={language}>
            {Object.keys(LANGUAGES).map((key) => (
              <option key={LANGUAGES[key].id} value={LANGUAGES[key].value}>
                {LANGUAGES[key].name + " (" + LANGUAGES[key].version + ")"}
              </option>
            ))}
          </select>

          <Editor
            height="75vh"
            width="50vw"
            theme="vs-light"
            language={language}
            onMount={handleEditorMount}
            value={code}
            onChange={(value) => handleCodeChange(value)}
          />
        </div>

        {/* Right side - output */}
        <div style={{ display: "flex", flexDirection: "column", width: "50vw" }}>
          <div>
            <button onClick={handleRun}>Run Code</button>
          </div>
          <div
          ref={outputRef}
            style={{
              flex: 1,
              border: "1px solid #ccc",
              padding: "10px",
              overflowY: "auto",
              minHeight: "75vh",
              backgroundColor: "#f9f9f9",
              whiteSpace: "pre-wrap",
            }}
          >
          </div>
        </div>
      </div>
    </>
  );
}

