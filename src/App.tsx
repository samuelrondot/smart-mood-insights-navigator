import "./App.css";
import HomePage from "./components/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="pt-0">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
