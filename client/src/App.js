import "./App.css";
import PsetsTableApi from "./components/PsetsTableApi";
import PsetsTableDb from "./components/PsetsTableDb";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<PsetsTableDb />} />
        <Route path="/api-psets" element={<PsetsTableApi />} />
      </Routes>
    </div>
  );
}

export default App;
