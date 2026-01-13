import Editor from '@monaco-editor/react';
import { useRef, useEffect } from 'react';

function CodeEditor({ runtime, code, setCode, editorRef, executeCode, handleDownload }) {
  const executeCodeRef = useRef(executeCode);
  const handleDownloadRef = useRef(handleDownload);

  useEffect(() => {
    executeCodeRef.current = executeCode;
    handleDownloadRef.current = handleDownload;
  }, [executeCode, handleDownload]);

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor
    editor.focus();

    editor.addAction({
      id: 'run-code',
      label: 'Run Code',
      keybindings: [
        monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter,
      ],
      precondition: null,
      contextMenuGroupId: 'file',
      contextMenuOrder: 1.5,
      run: () => executeCodeRef.current()
    })

    editor.addAction({
      id: 'save-file',
      label: 'Save File',
      keybindings: [
        monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS,
      ],
      precondition: null,
      contextMenuGroupId: 'file',
      contextMenuOrder: 1.5,
      run: () => handleDownloadRef.current()
    })


  }
  return (
    <Editor
      height="100%"
      width="100%"
      language={runtime.language === "c++" ? "cpp" : runtime.language}
      value={code}
      theme="vs-dark"
      onChange={(value) => setCode(value)}
      onMount={handleEditorDidMount}
      options={{
        minimap: { enabled: false },
      }}
    />
  )
}


export default CodeEditor