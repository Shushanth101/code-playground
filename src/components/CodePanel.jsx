import React, { Suspense, useState } from 'react'
import { LANGUAGES } from '../constants'
// import { Editor } from '@monaco-editor/react';
const Editor = React.lazy(()=>import("@monaco-editor/react"))

function CodePanel({language,setLanguage,editorRef}) {
    const [code,setCode] = useState(LANGUAGES["javascript"].defaultCode)

    const handleEditorMount = (editor) => {
    editorRef.current = editor
    editor.focus();
  };


  const handleCodeChange = (value) => {
    setCode(value);
  };

    const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    setLanguage(newLang);
    setCode(LANGUAGES[newLang].defaultCode);
  };



  return (
        <div>
          <select onChange={handleLanguageChange} value={language}>
            {Object.keys(LANGUAGES).map((key) => (
              <option key={LANGUAGES[key].id} value={LANGUAGES[key].value}>
                {LANGUAGES[key].name + " (" + LANGUAGES[key].version + ")"}
              </option>
            ))}
          </select>
          <Suspense fallback={<div>Loading Monaco Editor...</div>} >   
            <Editor
                height="75vh"
                width="50vw"
                theme="vs-light"
                language={language}
                onMount={handleEditorMount}
                value={code}
                onChange={(value) => handleCodeChange(value)}
            />
          </Suspense>
        </div>
    
  )
}

export default CodePanel