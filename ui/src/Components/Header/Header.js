import { useState, useEffect, memo } from "react";
import { useLocation } from "react-router-dom";
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
  const location = useLocation();

  const navigateToHome = () => {
    navigate("/");
  };

  useEffect(() => {
    props.invokeDone([done, setDone]);
  }, [done, props]);

  async function backendCall() {
    let apprenticeship = Object.assign({}, props.apprenticeship);
    apprenticeship.members = structuredClone(apprenticeship.members);
    const videoName = apprenticeship.introVideo.name;
    apprenticeship.logo = await decodeFile(apprenticeship.logo);
    apprenticeship.introVideo = await decodeFile(apprenticeship.introVideo);
    for (let i = 0; i < apprenticeship.members.length; i++) {
      apprenticeship.members[i].photo = await decodeFile(
        apprenticeship.members[i].photo
      );
      if (i === apprenticeship.members.length - 1) {
        console.log(apprenticeship);
        apprenticeship.introVideo = [apprenticeship.introVideo, videoName];
        addApprenticeship(apprenticeship, () => {});
      }
    }
  }
  return (
    <div className="FlexContainer">
      <div className="back" onClick={navigateToHome}>
        <img src={arrowLeft} alt="arrow left" style={{ marginLeft: "24px" }} />{" "}
        <p style={{ marginLeft: "7px" }}> Back </p>{" "}
      </div>{" "}
      <div className="title">
        {location.state ? "Editing Apprenticeship" : "Creating Apprenticeship"}{" "}
      </div>{" "}
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
