import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles.css";
function ProgressBar(props) {
  // props: descriptionDone, guideDone, surveyDone, settingsDone; All Boolean
  const location = useLocation();
  const [activity, setActivity] = useState(1);

  useEffect(() => {
    const path = location.pathname;
    //Pathnames subject to change
    switch (path) {
      case "/addinternship/description":
        setActivity(1);
        break;
      case "/addinternship/guide":
        setActivity(2);
        break;
      case "/addinternship/survey":
        setActivity(3);
        break;
      case "/addinternship/settings":
        setActivity(4);
        break;
      default:
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="progressBar">
      {/* description */}
      <div className="iconText">
        <div className="tickCircle">
          <img
            src={
              props.descriptionDone
                ? "./tick-circle.png"
                : "./untick-circle.png"
            }
            alt=""
          ></img>
        </div>
        <p
          className="text"
          style={{ color: props.descriptionDone ? "#793EF5" : "#1E1E1E" }}
        >
          Internship Description
        </p>
      </div>
      {/* guide */}
      <div
        className="iconText"
        style={{ opacity: activity === 2 ? null : 0.3 }}
      >
        <div className="tickCircle">
          <img
            src={props.guideDone ? "./tick-circle.png" : "./untick-circle.png"}
            alt=""
          ></img>
        </div>
        <p
          className="text"
          style={{ color: props.guideDone ? "#793EF5" : "#1E1E1E" }}
        >
          Internship Guide
        </p>
      </div>
      {/* survey */}
      <div
        className="iconText"
        style={{ opacity: activity === 3 ? null : 0.3 }}
      >
        <div className="tickCircle">
          <img
            src={props.surveyDone ? "./tick-circle.png" : "./untick-circle.png"}
            alt=""
          ></img>
        </div>
        <p
          className="text"
          style={{ color: props.surveyDone ? "#793EF5" : "#1E1E1E" }}
        >
          Surveys
        </p>
      </div>
      {/* settings */}
      <div
        className="iconText"
        style={{ opacity: activity === 4 ? null : 0.3 }}
      >
        <div className="tickCircle">
          <img
            src={props.done ? "./tick-circle.png" : "./untick-circle.png"}
            alt=""
          ></img>
        </div>
        <p
          className="text"
          style={{ color: props.done ? "#793EF5" : "#1E1E1E" }}
        >
          Settings
        </p>
      </div>
    </div>
  );
}

export default ProgressBar;
