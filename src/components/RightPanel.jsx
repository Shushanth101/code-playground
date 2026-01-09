function RightPanel({ output, loading }) {
  return (
    <div
      className="border-start bg-light p-3 d-flex flex-column"
      style={{ width: "50%" }}
    >
      <h5 className="mb-3 fw-bold">Output</h5>

      <div className="flex-grow-1 overflow-auto">
        {loading ? (
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : output?.stderr ? (
          <div className="alert alert-danger">
            <pre className="mb-0">{output.stderr}</pre>
          </div>
        ) : output?.stdout ? (
          <div className="alert alert-success">
            <pre className="mb-0">{output.stdout}</pre>
          </div>
        ) : (
          <div className="text-muted fst-italic">
            No output yet. Run some code.
          </div>
        )}
      </div>
    </div>
  );
}

export default RightPanel;
