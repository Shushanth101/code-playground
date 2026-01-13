import { useEffect, useRef, useState } from 'react';
import { defaultCodeSnippets } from './constants';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';

function App() {
  const [runtimes, setRuntimes] = useState([]);
  const [runtime, setRuntime] = useState({
    "language": "nls",
    "version": "null",
    "aliases": [],
    "runtime": "null"
  })
  const [code, setCode] = useState(
    defaultCodeSnippets["javascript"].code
  );
  const [output, setOutput] = useState([]);
  const [stdin, setStdin] = useState("")
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('output');
  const editorRef = useRef(null);


  const getRunTimes = async () => {
    const res = await fetch("https://emkc.org/api/v2/piston/runtimes");
    const data = await res.json()
    const allowedLanguages = ["javascript", "python", "c++", "c", "java"];
    const filtered = data.filter((rt) => allowedLanguages.includes(rt.language));
    setRuntimes(filtered);
  }


  useEffect(() => {
    setCode(defaultCodeSnippets[runtime.language].code);
  }, [runtime]);


  useEffect(() => {
    getRunTimes()

  }, [])

  const executeCode = async () => {
    const currentCode = editorRef.current.getValue();
    setLoading(true);
    try {
      const res = await fetch("https://emkc.org/api/v2/piston/execute", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "language": runtime.language,
          "version": runtime.version,
          "files": [
            {
              "name": defaultCodeSnippets[runtime.language].filename,
              "content": currentCode
            }
          ],
          "stdin": stdin,
          "args": ["1", "2", "3"],
          "compile_timeout": 10000,
          "run_timeout": 5000,
          "compile_memory_limit": -1,
          "run_memory_limit": -1
        })
      })

      const data = await res.json();
      setOutput(data.run);
      setActiveTab("output")
    } catch (error) {
      console.error(error);
      setOutput({ stderr: "Failed to execute code. Please try again." });
    } finally {
      setLoading(false);
    }
  }



  return (
    <>
      <div className="d-flex" style={{ height: "100vh" }}>

        <LeftPanel runtimes={runtimes} runtime={runtime} setRuntime={setRuntime} code={code} setCode={setCode} editorRef={editorRef} executeCode={executeCode} loading={loading} />
        <RightPanel output={output} loading={loading} stdin={stdin} setStdin={setStdin} activeTab={activeTab} setActiveTab={setActiveTab} />

      </div>
    </>
  );

}

export default App
