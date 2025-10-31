import React,{useState,useRef} from 'react'
import CodePanel from './CodePanel'
import OutputPanel from './OutputPanel'

export default function EditorPage() {
    const [language, setLanguage] = useState("javascript");
    const editorRef = useRef(null)

  return (
    <div style={{ display: "flex",backgroundColor:"#1c1c1cff" }}>
        <CodePanel language={language} setLanguage={setLanguage} editorRef={editorRef} />
        <OutputPanel editorRef={editorRef} language={language} />
      </div>
  )
}
