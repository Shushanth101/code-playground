function RightPanel({ output, loading, setStdin, stdin ,activeTab,setActiveTab}) {
  return (
    <div className="stack" style={{ width: "50%" }}>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button className={`nav-link ${activeTab === 'input' ? "active" : ""}`} onClick={() => setActiveTab("input")} >Input</button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${activeTab === 'output' ? "active" : ""}`} onClick={() => setActiveTab("output")} >Output</button>
        </li>
      </ul>

      <hr />

      {activeTab === "input" ? (<div className="form-floating">
        <textarea className="form-control" placeholder="Enter Input for your program..." id="floatingTextarea2" style={{ height: "100px" }} onChange={(e)=>setStdin(e.target.value)}>{stdin}</textarea>
      </div>) : loading ? (<div className="d-flex justify-content-center align-items-center h-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>) : output?.stderr ? (<div className="alert alert-danger">
        <pre className="mb-0">{output.stderr}</pre>
      </div>)
        : output?.stdout ? (
          <div className="alert alert-success">
            <pre className="mb-0">{output.stdout}</pre>
          </div>
        ) : (<div className="text-muted fst-italic">
          No output yet. Run some code.
        </div>)}
    </div>
  );
}

export default RightPanel;
