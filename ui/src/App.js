import "./App.css";
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
import {viewAllApprenticeships,deleteApprenticeship} from "./API interface/API";

function App() {
    //viewAllApprenticeships();
    deleteApprenticeship("G5mAHTCaGBxO3fPNXXpC")
    return (<div>  </div>);}
>>>>>>> 510b6f57 (Beta endpoints)
=======
function App() {
    return (<div> </div>);}
>>>>>>> 266c12f9 (Returned to original state)
export default App;
