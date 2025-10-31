import { Routes,Route } from "react-router-dom";
import EditorPage from "./components/EditorPage";
import HomePage from "./components/HomePage";

export default function App() {


  return (
    <>
    <Routes>
      <Route path = "/playground" element={<EditorPage/>}/>
      <Route path="/" element={<HomePage/>}/>
    </Routes>
    </>
  );
}

