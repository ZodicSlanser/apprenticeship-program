import { useState, useRef, memo } from "react";
import "./Video.css";
import uploadVideo from "../../Assets/Video/upload-video.svg";
import infoCircle from "../../Assets/Video/info-circle.svg";
import closeSquare from "../../Assets/Video/close-square.svg";
function Video(props) {
  const [active, setActive] = useState(false);
  const [video, setVideo] = useState();
  const inputFile = useRef(null);
  function handleClick() {
    setActive(true);
  }
  function handleBlur() {
    setActive(false);
  }

  function handleChange(e) {
    console.log(e.target.files);
    if (e.target.files[0]) {
      setVideo(e.target.files[0]);
      props.setVideo(e.target.files[0]);
      props.invokeVideo(null, true, 3);
    } else {
      props.invokeVideo(null, false, 0);
    }
  }
  function handleVideo(e) {
    e.preventDefault();
    inputFile.current.click();
  }
  return (
    <div>
      <div
        className="video"
        onClick={() => {
          handleClick();
          props.invokeActivity(null, 1);
        }}
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
          accept="video/*"
          onChange={handleChange}
        />

        <div className="logoHeader">
          <p className="logoHeaderText">
            Introduce yourself, your company, and what you're building.
          </p>
          <img src={infoCircle} alt=""></img>
        </div>
        <img
          src={uploadVideo}
          alt=""
          onClick={handleVideo}
          style={{ cursor: "pointer" }}
        ></img>
        {video && (
          <div className="video-tile">
            <p className="video-tile-text">{video.name}</p>
            <img
              src={closeSquare}
              alt="closeSquare"
              onClick={() => {
                setVideo(null);
                inputFile.current.value = null;
              }}
              style={{ cursor: "pointer", marginRight: "10px" }}
            ></img>
          </div>
        )}
      </div>
    </div>
  );
}
export default memo(Video);
