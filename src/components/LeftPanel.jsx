import CodeEditor from './CodeEditor';
import { languageIcons } from '../constants';

function LeftPanel({ runtimes, runtime, setRuntime, code, setCode, editorRef,executeCode,loading }) {
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
                      {rt.version ? ` - ${rt.version}`:""}
                    </button>
                  </li>
                ))}
              </ul>

            </div>

            <button className="btn btn-primary" disabled={loading} onClick={()=>executeCode()}>Run Code</button>
          </div>

          {/* Editor */}
          <CodeEditor runtime={runtime} code={code} setCode={setCode} editorRef={editorRef} />

        </div>
        
  )
}

export default LeftPanel