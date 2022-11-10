import { useState, useRef, memo, useEffect } from "react";
import "./LogoTitle.css";
import image from "../../Assets/LogoTitle/image.svg";
import infoCircle from "../../Assets/LogoTitle/info-circle.svg";
import { useLocation } from "react-router-dom";
function LogoTitle(props) {
  const location = useLocation();
  const [active, setActive] = useState(false);
  const [opacity, setOpacity] = useState(0.3);
  const [selectedImage, setSelectedImage] = useState(
    location.state?.logo ? location.state?.logo : null
  );
  const [title, setTitle] = useState(
    location.state ? location.state?.title : null
  );
  const [typing, setTyping] = useState(false);
  const inputFile = useRef(null);
  useEffect(() => {
    if (location.state?.title && location.state?.logo) {
      props.invokeLogoTitle(null, true, 0);
    }
  }, []);

  function createObject(img) {
    let objectURL;
    try {
      objectURL = URL.createObjectURL(img);
    } catch (e) {
      objectURL = "";
    }
    return objectURL;
  }
  function handleClick() {
    setActive(true);
  }
  function handleBlur() {
    setActive(false);
  }
  function typingDone(e) {
    if (title !== "") {
      setOpacity(1);
      if (selectedImage) props.invokeLogoTitle(null, true, 0);
      else props.invokeLogoTitle(null, false, 0);
    } else {
      setOpacity(0.3);
      props.invokeLogoTitle(null, false, 0);
    }
  }
  function handleTitleChange(e) {
    setTitle(e.target.value);
    if (location.state) location.state.title = null;
    props.setTitle(e.target.value);
  }
  function handleChange(e) {
    if (e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
      props.setLogo(e.target.files[0]);
      if (location.state) location.state.logo = null;
    }

    if (title !== "" && (e.target.files[0] || selectedImage)) {
      props.invokeLogoTitle(null, true, 0);
    } else {
      props.invokeLogoTitle(null, false, 0);
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
              src={
                location.state?.logo
                  ? location.state?.logo
                  : createObject(selectedImage)
              }
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
          defaultValue={location.state ? location.state.title : null}
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
