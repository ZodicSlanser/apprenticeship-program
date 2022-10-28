import "./App.css";
import {useEffect, useState} from "react";
import {sandBoxViewAll,viewApprenticeship} from "./API interface/API";
function App() {
  const [Apprenticeships, setApprenticeships] = useState('');
  useEffect(() => {
    viewApprenticeship("okwhhEHmcisWUAuC3Aji",console.log);
  }, []);

  console.log(Apprenticeships);

  return <div> </div>;
}
export default App;
