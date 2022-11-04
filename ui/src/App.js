import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { sandBoxViewAll, viewApprenticeship } from "./API interface/API";
import HomePage from "./Components/HomePage/HomePage";
import MainPage from "./Components/MainPage/MainPage";

function App() {
  const [Apprenticeships, setApprenticeships] = useState("");

  useEffect(() => {
    viewApprenticeship("TTUYLsRgNMaTjSKG5Znm", setApprenticeships);
  }, []);

  console.log(Apprenticeships);

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
