import { useEffect, useState } from "react";
import "../styles.css";

function ProgressBar(props) {
  const [activity, setActivity] = useState(0);
  const [descriptionDone, setDescriptionDone] = useState(false);
  const [typeDone, setTypeDone] = useState(false);
  const [rolesDone, setRolesDone] = useState(false);
  const [adminDone, setAdminDone] = useState(false);
  const [timelineDone, setTimelineDone] = useState(false);

  useEffect(() => {
    props.invokeActivity([activity, setActivity]);
    props.invokeDescription([descriptionDone, setDescriptionDone]);
    props.invokeType([typeDone, setTypeDone]);
    props.invokeRoles([rolesDone, setRolesDone]);
    props.invokeAdmin([adminDone, setAdminDone]);
    props.invokeTimeline([timelineDone, setTimelineDone]);
  }, [
    props,
    activity,
    descriptionDone,
    typeDone,
    rolesDone,
    adminDone,
    timelineDone,
  ]);

  return (
    <div className="progressBar">
      {/* description */}
      <div
        className="iconText"
        style={{
          opacity: descriptionDone ? null : activity === 1 ? null : 0.3,
        }}
      >
        <div className="tickCircle">
          <img
            src={descriptionDone ? "./tick-circle.svg" : "./untick-circle.svg"}
            alt=""
          ></img>
        </div>
        <p
          className="text"
          style={{ color: descriptionDone ? "#793EF5" : "#1E1E1E" }}
        >
          {"Company Title & Desc."}
        </p>
      </div>
      {/* Type */}
      <div
        className="iconText"
        style={{ opacity: typeDone ? null : activity === 2 ? null : 0.3 }}
      >
        <div className="tickCircle">
          <img
            src={typeDone ? "./tick-circle.svg" : "./untick-circle.svg"}
            alt=""
          ></img>
        </div>
        <p className="text" style={{ color: typeDone ? "#793EF5" : "#1E1E1E" }}>
          Team Type{" "}
        </p>
      </div>
      {/* Roles */}
      <div
        className="iconText"
        style={{ opacity: rolesDone ? null : activity === 3 ? null : 0.3 }}
      >
        <div className="tickCircle">
          <img
            src={rolesDone ? "./tick-circle.svg" : "./untick-circle.svg"}
            alt=""
          ></img>
        </div>
        <p
          className="text"
          style={{ color: rolesDone ? "#793EF5" : "#1E1E1E" }}
        >
          Team Roles
        </p>
      </div>
      {/* Admin */}
      <div
        className="iconText"
        style={{ opacity: adminDone ? null : activity === 4 ? null : 0.3 }}
      >
        <div className="tickCircle">
          <img
            src={adminDone ? "./tick-circle.svg" : "./untick-circle.svg"}
            alt=""
          ></img>
        </div>
        <p
          className="text"
          style={{ color: adminDone ? "#793EF5" : "#1E1E1E" }}
        >
          Team Admin
        </p>
      </div>
      {/* Timeline */}
      <div
        className="iconText"
        style={{ opacity: timelineDone ? null : activity === 5 ? null : 0.3 }}
      >
        <div className="tickCircle">
          <img
            src={timelineDone ? "./tick-circle.svg" : "./untick-circle.svg"}
            alt=""
          ></img>
        </div>
        <p
          className="text"
          style={{ color: timelineDone ? "#793EF5" : "#1E1E1E" }}
        >
          Timeline
        </p>
      </div>
    </div>
  );
}

export default ProgressBar;
