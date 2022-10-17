import React from "react";
import arrowLeft from "../../Assets/Header/arrow-left.svg";
import add from "../../Assets/Header/add.svg";
import "./Header.css";
export default function Header() {
  return (
    <div className="FlexContainer">
      <div className="back" onClick={() => console.log("Back")}>
        <img src={arrowLeft} alt="arrow left" style={{ marginLeft: "24px" }} />
        <p style={{ marginLeft: "7px" }}> Back</p>
      </div>
      <div className="title">Creating Apprenticeship</div>
      <div className="publish">
        <button
          className="publish-button"
          onClick={() => console.log("Published!")}
        >
          <img src={add} alt="add" />
          Publish Apprenticeship
        </button>
      </div>
    </div>
  );
}
