import { useState, useEffect } from "react";
import arrowLeft from "../../Assets/Header/arrow-left.svg";
import add from "../../Assets/Header/add.svg";
import addDone from "../../Assets/Header/add-done.svg";
import "./Header.css";
export default function Header(props) {
  const [done, setDone] = useState();
  useEffect(() => {
    props.invokeDone([done, setDone]);
  }, []);
  function backendCall() {}
  return (
    <div className="FlexContainer">
      <div className="back" onClick={() => console.log("Back")}>
        <img src={arrowLeft} alt="arrow left" style={{ marginLeft: "24px" }} />
        <p style={{ marginLeft: "7px" }}> Back</p>
      </div>
      <div className="title">Creating Apprenticeship</div>
      <div className="publish">
        <button
          className={done ? "publish-button-ready" : "publish-button"}
          onClick={done ? backendCall : null}
        >
          <img src={done ? addDone : add} alt="add" />
          Publish Apprenticeship
        </button>
      </div>
    </div>
  );
}
