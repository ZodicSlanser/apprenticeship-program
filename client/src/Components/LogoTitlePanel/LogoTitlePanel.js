import { useState, useRef } from "react";
import "./LogoTitlePanel.css";
import image from "../../Assets/LogoTitlePanel/image.svg";
import infoCircle from "../../Assets/LogoTitlePanel/info-circle.svg";
function LogoTitlePanel(props) {
  const [active, setActive] = useState(false);
  const [opacity, setOpacity] = useState(0.3);
  const [selectedImage, setSelectedImage] = useState();
  const [title, setTitle] = useState("");

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
    setSelectedImage(e.target.files[0]);
    props.setImage(e.target.files[0]);
    console.log(title);
    if (title !== "" && e.target.files[0]) {
      props.invokeLogoTitle(null, true);
    } else {
      props.invokeLogoTitle(null, false);
    }
  }
  function handleImage() {
    inputFile.current.click();
  }
  return (
    <div
      className="companyLogoTitle"
      onMouseEnter={() => {
        handleClick();
        props.invokeActivity(null, 1);
      }}
      onMouseLeave={() => {
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
            style={{
              marginLeft: selectedImage ? 0 : null,
              left: selectedImage ? "86px" : null,
            }}
          ></img>
        </div>
        <input
          type={"text"}
          className="logoTitleText"
          placeholder="Enter  Apprenticeship Title"
          onBlur={typingDone}
          onChange={handleTitleChange}
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
