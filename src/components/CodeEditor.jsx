import Editor from '@monaco-editor/react';

function CodeEditor({ runtime, code, setCode, editorRef }) {
  return (
              <Editor
            height="100%"
            width="100%"
            language={runtime.language==="c++"?"cpp":runtime.language}
            value={code}
            theme="vs-dark"
            onChange={(value)=>setCode(value)}
            onMount={(editor)=>{
              editorRef.current = editor
              editor.focus();
            }}
          />
  )
}

export default CodeEditor