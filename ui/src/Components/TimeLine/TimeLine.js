import { useState, memo } from "react";
import "./TimeLine.css";
import infoCircle from "../../Assets/TimeLine/info-circle.svg";
function TimeLine(props) {
  const [active, setActive] = useState(false);
  const [typing, setTyping] = useState(false);
  function handleClick() {
    setActive(true);
  }
  function handleBlur() {
    console.log("asldfhlj");
    setActive(false);
  }
  return (
    <div
      className="companyLogoTitle"
      onClick={() => {
        handleClick();
        props.invokeActivity(null, 5);
      }}
      onMouseEnter={() => {
        handleClick();
        props.invokeActivity(null, 5);
      }}
      onMouseLeave={() => {
        if (!typing) {
          handleBlur();
          props.invokeActivity(null, 0);
        } else props.invokeActivity(null, 0, true);
      }}
      onBlur={() => {
        if (!typing) {
          handleBlur();
          props.invokeActivity(null, 0);
        }
      }}
      tabIndex="-1"
      style={
        active
          ? {
              border: "1px solid #793EF5",
              boxShadow: "0px 24px 34px rgba(0, 0, 0, 0.12)",
            }
          : null
      }
    >
      <input
        type={"text"}
        className="logoTitleText"
        placeholder="Start Date"
        onBlur={() => {
          handleBlur();
          setTyping(false);
          props.invokeActivity(null, 0, false);
        }}
        onClick={() => {
          props.invokeActivity(null, 0, true);
          setTyping(true);
        }}
      ></input>
      <div className="logoHeader">
        <p className="logoHeaderText">Timeline</p>
        <img src={infoCircle} alt=""></img>
      </div>
    </div>
  );
}
export default memo(TimeLine);
