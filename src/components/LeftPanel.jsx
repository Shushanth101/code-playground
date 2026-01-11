import CodeEditor from './CodeEditor';
import { fileNames, languageIcons } from '../constants';

function LeftPanel({ runtimes, runtime, setRuntime, code, setCode, editorRef,executeCode,loading }) {
  const handleDownload = ()=>{
    const blob = new Blob([code],{ type: 'text/plain' });
    const url = URL.createObjectURL(blob)

    const link = document.createElement("a")
    link.href = url;
    link.download = fileNames[runtime.language];
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
                      {rt.version ? ` - ${rt.version}`:""}
                    </button>
                  </li>
                ))}
              </ul>

            </div>

            <button className={`btn btn-outline-secondary ${runtime.language==="nls"?"disabled":""}`} onClick={handleDownload}>download current file.</button>
            <button className={ `btn btn-primary ${loading || runtime.language==="nls" ? "disabled" : ""}`}onClick={()=>executeCode()} data-bs-toggle="tooltip" data-bs-placement="left" 
            title="Run Code(ctrl+enter)">
              {loading?(<div>
                <div class="spinner-border spinner-border-sm" role="status">
  <span class="sr-only">compiling...</span>
</div>
  compiling...
              </div>)
:"Run Code"}</button>
          </div>

          {/* Editor */}
          <CodeEditor runtime={runtime} code={code} setCode={setCode} editorRef={editorRef} />

        </div>
        
  )
}

export default LeftPanel