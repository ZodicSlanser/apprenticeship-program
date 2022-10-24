import { useState, memo, useEffect } from "react";
import "./TimeLine.css";
import infoCircle from "../../Assets/TimeLine/info-circle.svg";
function TimeLine(props) {
  const [active, setActive] = useState(false);
  const [typing, setTyping] = useState(false);
  const [startDateFormatted, setStartDateFormatted] = useState("");
  const [endDateFormatted, setEndDateFormatted] = useState("");
  const [showStart, setShowStart] = useState();
  const [showEnd, setShowEnd] = useState();

  useEffect(() => {
    if (endDateFormatted && startDateFormatted)
      props.invokeTimeline(null, true);
    else props.invokeTimeline(null, false);
  }, [endDateFormatted, startDateFormatted, props]);

  function handleClick() {
    setActive(true);
  }

  function handleBlur() {
    setActive(false);
  }

  function handleDateChangeStart(e) {
    props.setStartDate(e.target.value);
    if (e.target.value === "") {
      setShowStart(false);
      setStartDateFormatted("");
      return;
    }
    let date = new Date(e.target.value);
    const day = date.getDate();
    const year = date.getFullYear();
    const month = date.toLocaleString("default", { month: "long" });
    setStartDateFormatted(day + " " + month + " " + year);
  }
  function handleDateChangeEnd(e) {
    props.setEndDate(e.target.value);
    if (e.target.value === "") {
      setShowEnd(false);
      setEndDateFormatted("");
      return;
    }

    let date = new Date(e.target.value);
    const day = date.getDate();
    const year = date.getFullYear();
    const month = date.toLocaleString("default", { month: "long" });
    setEndDateFormatted(day + " " + month + " " + year);
  }

  return (
    <div
      className="timeline"
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
      <div className="timelineHeader">
        <p className="timelineText">Timeline</p>
        <img src={infoCircle} alt=""></img>
      </div>
      <div className="dates">
        <input
          type={"text"}
          className="date"
          placeholder="Start Date"
          onBlur={(e) => {
            handleBlur();
            props.invokeActivity(null, 0, false);
            setTyping(false);
            setShowStart(true);
            handleDateChangeStart(e);
            e.target.type = "text";
          }}
          onFocus={(e) => {
            e.target.type = "date";
            props.invokeActivity(null, 5, true);
            setTyping(true);
            setShowStart(false);
          }}
        ></input>
        {showStart && (
          <div
            className="startDate-overwrite"
            onMouseEnter={(e) => {
              e.preventDefault();
            }}
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            {startDateFormatted}
          </div>
        )}
        <input
          type={"text"}
          className="date"
          placeholder="Estimated End Date"
          onBlur={(e) => {
            handleBlur();
            props.invokeActivity(null, 0, false);
            setTyping(false);
            setShowEnd(true);
            handleDateChangeEnd(e);
            e.target.type = "text";
          }}
          onFocus={(e) => {
            e.target.type = "date";
            props.invokeActivity(null, 5, true);
            setTyping(true);
            setShowEnd(false);
          }}
          style={{ marginLeft: "16px" }}
        ></input>
        {showEnd && <div className="endDate-overwrite">{endDateFormatted}</div>}
      </div>
    </div>
  );
}
export default memo(TimeLine);