import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState, memo } from "react";
import { sandBoxViewAll, viewApprenticeship } from "./API interface/API";
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

export default memo(App);
