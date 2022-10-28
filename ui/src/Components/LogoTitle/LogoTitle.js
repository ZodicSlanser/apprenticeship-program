import { useState, useRef, memo } from "react";
import "./LogoTitle.css";
import image from "../../Assets/LogoTitle/image.svg";
import infoCircle from "../../Assets/LogoTitle/info-circle.svg";
function LogoTitle(props) {
  const [active, setActive] = useState(false);
  const [opacity, setOpacity] = useState(0.3);
  const [selectedImage, setSelectedImage] = useState();
  const [title, setTitle] = useState("");
  const [typing, setTyping] = useState(false);
  const inputFile = useRef(null);
  function handleClick() {
    setActive(true);
  }
  function handleBlur() {
    setActive(false);
  }
  function typingDone(e) {
    if (title !== "") {
      setOpacity(1);
      if (selectedImage) props.invokeLogoTitle(null, true);
      else props.invokeLogoTitle(null, false);
    } else {
      setOpacity(0.3);
      props.invokeLogoTitle(null, false);
    }
  }
  function handleTitleChange(e) {
    setTitle(e.target.value);
    props.setTitle(e.target.value);
  }
  function handleChange(e) {
    if (e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
      props.setLogo(e.target.files[0]);
    }

    if (title !== "" && (e.target.files[0] || selectedImage)) {
      props.invokeLogoTitle(null, true);
    } else {
      props.invokeLogoTitle(null, false);
    }
  }
  function handleImage(e) {
    e.preventDefault();
    inputFile.current.click();
  }
  return (
    <div
      className="companyLogoTitle"
      onClick={() => {
        handleClick();
        props.invokeActivity(null, 1);
      }}
      onMouseEnter={() => {
        handleClick();
        props.invokeActivity(null, 1);
      }}
      onMouseLeave={() => {
        if (!typing) {
          handleBlur();
          props.invokeActivity(null, 0);
        } else props.invokeActivity(null, 0, true);
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
        type="file"
        id="file"
        ref={inputFile}
        style={{ display: "none" }}
        accept="image/*"
        onChange={handleChange}
      />

      <div className="logoHeader">
        <p className="logoHeaderText">Company Logo & Apprenticeship Title</p>
        <img src={infoCircle} alt=""></img>
      </div>
      <div className="logoTitle">
        <div className="logoRectangle" onClick={handleImage}>
          {selectedImage ? (
            <img
              className="logoRectangle"
              alt=""
              src={URL.createObjectURL(selectedImage)}
            ></img>
          ) : (
            <></>
          )}

          <img
            className="uploadImage"
            src={image}
            alt=""
            style={
              selectedImage
                ? {
                    marginTop: "0px",
                    bottom: "23.5px",
                  }
                : null
            }
          ></img>
        </div>
        <input
          type={"text"}
          className="logoTitleText"
          placeholder="Enter Apprenticeship Title"
          onBlur={() => {
            handleBlur();
            props.invokeActivity(null, 0, false);
            typingDone();
            setTyping(false);
          }}
          onChange={handleTitleChange}
          onClick={() => {
            setOpacity(1);
            props.invokeActivity(null, 1, true);
            setTyping(true);
          }}
          style={{ opacity: opacity }}
        ></input>
      </div>
    </div>
  );
}
export default memo(LogoTitle);
