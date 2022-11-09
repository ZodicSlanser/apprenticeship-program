import { useState, useEffect, memo } from "react";
import arrowLeft from "../../Assets/Header/arrow-left.svg";
import add from "../../Assets/Header/add.svg";
import addDone from "../../Assets/Header/add-done.svg";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import { addApprenticeship } from "../../API interface/API";
export default memo(function Header(props) {
  const navigate = useNavigate();
  const [done, setDone] = useState();
  const [apprenticeships, setApprenticeships] = useState([]);
  const roles = [
    {
      type: 2,
      desc: "des",
      compSkills: ["C#"],
      reqSkills: ["java"],
      hours: 8,
      location: "Test",
    },
    {
      type: 2,
      desc: "des",
      compSkills: ["C#"],
      reqSkills: ["java"],
      hours: 8,
      location: "cairo",
    },
    {
      type: 2,
      desc: "des",
      compSkills: ["C#"],
      reqSkills: ["java"],
      hours: 8,
      location: "cairo",
    },
  ];

  const members = [
    { name: "ali", photo: "photo-link", socialURL: "www.github.com" },
    { name: "ahmed", photo: "photo-link", socialURL: "www.twitter.com" },
    { name: "saif", photo: "photo-link", socialURL: "www.facebook.com" },
  ];
  const navigateToHome = () => {
    navigate("/");
  };

  const apprenticeship = {
    logo: "./frame.png",
    title: "title",
    compDesc: "company des",
    appDesc: "app desc",
    introVideo: "video-link",
    teamType: 1,
    roles: roles.map((role) => {
      return { ...props.apprenticeship.role };
    }),
    members: members.map((member) => {
      return { ...props.apprenticeship.member };
    }),
    startDate: new Date(),
    endDate: new Date(),
  };
  useEffect(() => {
    props.invokeDone([done, setDone]);
  }, [done, props]);

  function backendCall() {
    console.log(props.apprenticeship);
    addApprenticeship(props.apprenticeship, setApprenticeships);
    navigateToHome();
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
