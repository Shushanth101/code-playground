import CodeEditor from './CodeEditor';
import { fileNames, languageIcons } from '../constants';

import { FaTerminal, FaPlay } from "react-icons/fa";

function LeftPanel({ runtimes, runtime, setRuntime, code, setCode, editorRef, executeCode, loading, args, setArgs }) {
  const handleDownload = () => {
    const currentCode = editorRef.current.getValue();
    const blob = new Blob([currentCode], { type: 'text/plain' });
    const url = URL.createObjectURL(blob)
    const currentRuntime = runtime

    const link = document.createElement("a")
    link.href = url;
    link.download = fileNames[currentRuntime.language];
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }
  return (

    <div className="d-flex flex-column p-3" style={{ width: "50%" }}>

      {/* Top Controls */}
      <div className="d-flex justify-content-between align-items-center mb-3 w-100">
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle "
            type="button"
            data-bs-toggle="dropdown"
          >
            {runtime.language === "nls" ? "Select Language" : (
              <>
                {runtime.language.toUpperCase()}
              </>
            )}

          </button>

          <ul className="dropdown-menu">
            {runtimes.map((rt, index) => (
              <li key={index}>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => setRuntime(rt)}
                >
                  <i className={languageIcons[rt.language] + " me-2"}></i>
                  {rt.language.toUpperCase()}
                  {rt.version ? ` - ${rt.version}` : ""}
                </button>
              </li>
            ))}
          </ul>

        </div>

        <div className="d-flex gap-2">
          <button className={`btn btn-outline-secondary ${runtime.language === "nls" ? "disabled" : ""}`} onClick={handleDownload} data-bs-toggle="tooltip" data-bs-placement="left"
            title="Save File(Ctrl/Cmd+s)">Save File</button>
          <button className={`btn btn-primary ${loading || runtime.language === "nls" ? "disabled" : ""}`} onClick={() => executeCode()} data-bs-toggle="tooltip" data-bs-placement="left"
            title="Run Code(ctrl/cmd+enter)">
            {loading ? (<div>
              <div className="spinner-border spinner-border-sm" role="status">
                <span class="sr-only">compiling...</span>
              </div>
              compiling...
            </div>)
              : <span> <FaPlay className="me-2" />Run Code</span>}
          </button>
        </div>
      </div>

      <div className="input-group input-group-sm mb-3">
        <span className="input-group-text" id="inputGroup-sizing-sm"><FaTerminal /></span>
        <input type="text" className="form-control" placeholder='Enter command Line arguments for your program.' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
          value={args}
          onChange={(e) => setArgs(e.target.value)}
        />
      </div>

      {/* Editor */}
      <CodeEditor runtime={runtime} code={code} setCode={setCode} editorRef={editorRef} executeCode={executeCode} handleDownload={handleDownload} />

    </div>

  )
}

export default LeftPanel