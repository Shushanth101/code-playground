import { useRef, useState } from "react";
import { LANGUAGES } from "./constants";
import { Editor } from "@monaco-editor/react";


export default function App() {

  const [language,setLanguage] = useState("javascript")
  const [code,setCode ] = useState(LANGUAGES['javascript'].defaultCode)
  const handleEditorMount = (editor)=>{
    editor.focus()
  }

  const handleLanguageChange = (e)=>{
    const newLang = e.target.value
    setLanguage(newLang)
    setCode(LANGUAGES[newLang].defaultCode)
  }
  const handleCodeChange= (value)=>{
    setCode(value)
  }
  

  const handleRun =()=>{
    
  }

  return (
    <>
    <div>
      <select onChange={handleLanguageChange} value={language} >
        {
          Object.keys(LANGUAGES).map(key=>{
            return (<option key={LANGUAGES[key].id} value={LANGUAGES[key].value}> {LANGUAGES[key].name +"("+ LANGUAGES[key].version+")" } </option>)
          })
        }

      </select>
      <div>
          <Editor
          height="75vh"
          width="50vw"
          theme="vs-light"
          language={language}
          onMount={handleEditorMount}
          value={code}
          onChange={(value)=>handleCodeChange(value)}
          />
      </div>
    </div>
    <div>
      <button onClick={handleRun}>Run Code</button>
      <textarea disabled={true}></textarea>
    </div>


    </>
    
  );
}
