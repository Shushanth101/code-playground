import { Routes,Route } from "react-router-dom";
import EditorPage from "./components/EditorPage";

export default function App() {


  return (
    <>
    <Routes>
      <Route path = "/playground" element={<EditorPage/>}/>
    </Routes>
    </>
  );
}

