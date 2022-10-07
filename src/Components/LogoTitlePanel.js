import { useState } from "react";
import "../styles.css";
function LogoTitlePanel(props) {
  const [active, setActive] = useState(false);
  const [opacity, setOpacity] = useState(0.3);
  function handleClick() {
    setActive(true);
  }
  function handleBlur() {
    setActive(false);
  }
  function typingDone(e) {
    if (e.target.value === "") {
      props.invokeDescription(null, false);
      setOpacity(0.3);
    } else {
      setOpacity(1);
      props.invokeDescription(null, true);
    }
  }
  return (
    <div
      className="companyLogoTitle"
      onClick={() => {
        handleClick();
        props.invokeActivity(null, 1);
      }}
      onBlur={() => {
        handleBlur();
        props.invokeActivity(null, 0);
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
      <div className="logoHeader">
        <p className="logoHeaderText">Company Logo & Apprenticeship Title</p>
        <img src={"./info-circle.svg"} alt=""></img>
      </div>
      <div className="logoTitle">
        <div className="logoRectangle">
          <img className="uploadImage" src="./image.svg" alt=""></img>
        </div>
        <input
          type={"text"}
          className="logoTitleText"
          placeholder="Enter  Apprenticeship Title"
          onBlur={typingDone}
          onClick={() => {
            setOpacity(1);
          }}
          style={{ opacity: opacity }}
        ></input>
      </div>
    </div>
  );
}
export default LogoTitlePanel;
