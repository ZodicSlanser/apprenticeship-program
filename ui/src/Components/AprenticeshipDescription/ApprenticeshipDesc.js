import { useState, memo } from "react";
import "./ApprenticeshipDesc.css";
import exclmark from "../../Assets/ApprenticeshipDescription/exclmark.svg";
import TextareaAutosize from "react-textarea-autosize";

export default memo(function ApprenticeshipDesc(props) {
  const [opacity, setOpacity] = useState(0.3);
  const [typing, setTyping] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <div>
      <div
        className="panel"
        onClick={() => {
          setActive(true);
          props.invokeActivity(null, 1);
        }}
        onMouseEnter={() => {
          props.invokeActivity(null, 1);
          setActive(true);
        }}
        onMouseLeave={() => {
          if (!typing) {
            setActive(false);
            props.invokeActivity(null, 0);
          } else props.invokeActivity(null, 0, true);
        }}
        style={
          active
            ? {
                border: "1px solid #793EF5",
                boxShadow: "0px 24px 34px rgba(0, 0, 0, 0.12)",
              }
            : null
        }
      >
        <img src={exclmark} alt="exmark" className="exmark" />
        <div className="panel-heading">ApprenticeshipDescription</div>
        <br />
        <div>
          <TextareaAutosize
            className="textarea"
            placeholder={"Enter Description"}
            onBlur={(e) => {
              setActive(false);
              props.setApprenticeshipDesc(e.target.value);
              if (e.target.value !== "") {
                setOpacity(1);
                props.invokeApprenticeship(null, true, 2);
              } else {
                setOpacity(0.3);
                props.invokeApprenticeship(null, false, 2);
              }
              props.invokeActivity(null, 0, false);
              setTyping(false);
            }}
            onClick={() => {
              setOpacity(1);
              props.invokeActivity(null, 1, true);
              setTyping(true);
            }}
            style={{ opacity: opacity }}
          ></TextareaAutosize>
        </div>
      </div>
    </div>
  );
});
