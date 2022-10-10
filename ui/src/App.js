
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import MainPage from "./Components/MainPage/MainPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/CreateApprenticeship" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


