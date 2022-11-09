import { useState, useEffect, memo } from "react";
import arrowLeft from "../../Assets/Header/arrow-left.svg";
import add from "../../Assets/Header/add.svg";
import addDone from "../../Assets/Header/add-done.svg";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import { addApprenticeship } from "../../API interface/API";

async function decodeFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      resolve(reader.result);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export default memo(function Header(props) {
  const navigate = useNavigate();
  const [done, setDone] = useState();
  const [apprenticeships, setApprenticeships] = useState([]);


  const navigateToHome = () => {
    navigate("/");
  };

  useEffect(() => {
    props.invokeDone([done, setDone]);
  }, [done, props]);


  async function backendCall() {
    let apprenticeship = Object.assign({}, props.apprenticeship);
    apprenticeship.logo = await decodeFile(apprenticeship.logo);
    console.log(apprenticeship.logo);
    addApprenticeship(apprenticeship, setApprenticeships);
  }
  return (
    <div className="FlexContainer">
      <div className="back" onClick={navigateToHome}>
        <img src={arrowLeft} alt="arrow left" style={{ marginLeft: "24px" }} />{" "}
        <p style={{ marginLeft: "7px" }}> Back </p>{" "}
      </div>{" "}
      <div className="title"> Creating Apprenticeship </div>{" "}
      <div className="publish">
        <button
          className={done ? "publish-button-ready" : "publish-button"}
          onClick={done ? backendCall : null}
        >
          <img src={done ? addDone : add} alt="add" />
          Publish Apprenticeship{" "}
        </button>{" "}
      </div>{" "}
    </div>
  );
});
