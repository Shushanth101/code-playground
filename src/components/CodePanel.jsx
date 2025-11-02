import React, { Suspense, useState } from 'react'
import { LANGUAGES } from '../constants'
const Editor = React.lazy(()=>import("@monaco-editor/react"))
import LanguageSelector from './LanguageSelector';
import LanguageAndVersionProvider from '../context/LanguageAndVersionProvider';

function CodePanel({language,setLanguage,editorRef}) {
    const [code,setCode] = useState(LANGUAGES["javascript"].defaultCode)

    const handleEditorMount = (editor) => {
    editorRef.current = editor
    editor.focus();
  };


  const handleCodeChange = (value) => {
    setCode(value);
  };




  return (
        <div>
          <LanguageSelector language={language} setLanguage={setLanguage} setCode={setCode} />
          <Suspense fallback={<div>Loading Monaco Editor...</div>} >   
            <Editor
                height="100vh"
                width="50vw"
                theme="vs-dark"
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