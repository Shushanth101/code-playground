import React from 'react'
import { useRef } from 'react';
import { executeCode } from "../api";


function OutputPanel({editorRef,language}) {
    const outputRef = useRef(null)
    
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
  )
}

export default OutputPanel