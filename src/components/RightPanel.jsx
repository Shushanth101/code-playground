function RightPanel({
  output,
  loading,
  setStdin,
  stdin,
  activeTab,
  setActiveTab
}) {
  return (
    <div
      className="d-flex flex-column border-start bg-white"
      style={{ width: "50%" }}
    >
      {/* Tabs */}
      <ul className="nav nav-tabs px-3 pt-2">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "input" ? "active" : ""}`}
            onClick={() => setActiveTab("input")}
          >
            Input
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "output" ? "active" : ""}`}
            onClick={() => setActiveTab("output")}
          >
            Output
          </button>
        </li>
      </ul>

      {/* Content */}
      <div
        className="p-3 flex-grow-1"
        style={{ overflowY: "auto" }}
      >
        {/* INPUT */}
        {activeTab === "input" && (
          <textarea
            className="form-control"
            placeholder="Enter stdin for your program..."
            style={{
              height: "100%",
              resize: "none",
              fontFamily: "monospace",
              fontSize: "14px"
            }}
            value={stdin}
            onChange={(e) => setStdin(e.target.value)}
          />
        )}

        {/* OUTPUT */}
        {activeTab === "output" && (
          <>
            {loading ? (
              <div className="d-flex justify-content-center align-items-center h-100">
                <div className="spinner-border text-secondary" />
              </div>
            ) : output?.stderr ? (
              <div className="alert alert-danger">
                <pre className="mb-0">{output.stderr}</pre>
              </div>
            ) : output?.stdout ? (
              <div className="alert alert-success border">
                <pre className="mb-0">{output.stdout}</pre>
              </div>
            ) : (
              <div className="text-muted fst-italic">
                No output yet. Run some code.
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}



export default RightPanel;
