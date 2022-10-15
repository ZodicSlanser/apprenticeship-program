<<<<<<< HEAD
import { useState, useRef, useEffect, memo } from "react";
import Header from "../Header/Header";
import LogoTitle from "../LogoTitle/LogoTitle";
=======
import { useState } from "react";
import LogoTitlePanel from "../LogoTitlePanel/LogoTitlePanel";
>>>>>>> e5eb39a4 (Centered everything on main page)
import ProgressBar from "../ProgressBar/ProgressBar";
import TeamRoles from "../Roles/TeamRoles";
import Scaffolding from "../Scaffolding/Scaffolding";
<<<<<<< HEAD
import TeamAdmin from "../TeamAdmin/TeamAdmin";
import TeamTypePanel from "../TeamType/TeamTypePanel";
import TimeLine from "../TimeLine/TimeLine";
import "./MainPage.css";
let lock = false;

=======
import "./MainPage.css";
>>>>>>> e5eb39a4 (Centered everything on main page)
function MainPage() {
  const [title, setTitle] = useState("");
  const [logo, setLogo] = useState("");
  const [type, setType] = useState("");
  const [roles, setRoles] = useState([]);
  const [admin, setAdmin] = useState([]);
  const [contentHover, setContentHover] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const contentRef = useRef(null);
  const apprenticeship = {
    title: title,
    logo: logo,
    type: type,
    roles: roles,
    admin: admin,
    startDate: startDate,
    endDate: endDate,
  };

  useEffect(() => {
    const handleScrolling = (event) => {
      if (contentRef !== null) {
        if (contentHover === false) {
          contentRef.current.scrollTop += event.deltaY;
        }
      }
    };

    window.addEventListener("wheel", handleScrolling);

    return () => {
      window.removeEventListener("wheel", handleScrolling);
    };
  });

  const apprenticeship = { title: title, logo: logo };
  let invokeActivitySetter;
  const invokeActivity = (setStateCallback, active, lockValue) => {
    if (lockValue && active !== 0) invokeActivitySetter(active);
    lock = lockValue === undefined ? lock : lockValue;
    if (setStateCallback) {
      invokeActivitySetter = setStateCallback[1];
    } else {
      if (invokeActivitySetter && !lock) invokeActivitySetter(active);
    }
  };
  let invokeDescriptionSetter;
  const invokeDescription = (setStateCallback, done) => {
    if (setStateCallback) {
      invokeDescriptionSetter = setStateCallback[1];
    } else {
      if (invokeDescriptionSetter) invokeDescriptionSetter(done);
    }
  };
  let invokeTypeSetter;
  const invokeType = (setStateCallback, done) => {
    if (setStateCallback) {
      invokeTypeSetter = setStateCallback[1];
    } else {
      if (invokeTypeSetter) invokeTypeSetter(done);
    }
  };
  let invokeRolesSetter;
  const invokeRoles = (setStateCallback, done) => {
    if (setStateCallback) {
      invokeRolesSetter = setStateCallback[1];
    } else {
      if (invokeRolesSetter) invokeRolesSetter(done);
    }
  };
  let invokeAdminSetter;
  const invokeAdmin = (setStateCallback, done) => {
    if (setStateCallback) {
      invokeAdminSetter = setStateCallback[1];
    } else {
      if (invokeAdminSetter) invokeAdminSetter(done);
    }
  };
  let invokeTimelineSetter;
  const invokeTimeline = (setStateCallback, done) => {
    if (setStateCallback) {
      invokeTimelineSetter = setStateCallback[1];
    } else {
      if (invokeTimelineSetter) invokeTimelineSetter(done);
    }
  };
  let invokeDoneSetter;
  const invokeDone = (setStateCallback, done) => {
    if (setStateCallback) {
      invokeDoneSetter = setStateCallback[1];
    } else {
      if (invokeDoneSetter) invokeDoneSetter(done);
    }
  };
  return (
    <>
      <div style={{ overflow: "auto" }}>
        <div className="main-page">
          <div className="header-container">
            <Header
              invokeDone={invokeDone}
              apprenticeship={apprenticeship}
            ></Header>
          </div>
          <div className="progressbar-container">
            <ProgressBar
              invokeActivity={invokeActivity}
              invokeDescription={invokeDescription}
              invokeType={invokeType}
              invokeRoles={invokeRoles}
              invokeAdmin={invokeAdmin}
              invokeTimeline={invokeTimeline}
              invokeDone={invokeDone}
            ></ProgressBar>
          </div>
          <div
            className="scaffolding-container"
            ref={contentRef}
            onMouseEnter={() => {
              setContentHover(true);
            }}
            onMouseLeave={() => {
              setContentHover(false);
            }}
          >
            <Scaffolding>
              <LogoTitle
                invokeActivity={invokeActivity}
                invokeLogoTitle={invokeDescription}
                setTitle={setTitle}
                setLogo={setLogo}
              ></LogoTitle>
              <TeamTypePanel
                invokeActivity={invokeActivity}
                invokeType={invokeType}
                setType={setType}
              ></TeamTypePanel>
              <TeamRoles
                invokeActivity={invokeActivity}
                invokeRoles={invokeRoles}
                setRoles={setRoles}
              ></TeamRoles>
              <TeamAdmin
                invokeActivity={invokeActivity}
                invokeAdmin={invokeAdmin}
                setAdmin={setAdmin}
              ></TeamAdmin>
              <TimeLine
                invokeActivity={invokeActivity}
                invokeTimeline={invokeTimeline}
                setStartDate={setStartDate}
                setEndDate={setEndDate}
              ></TimeLine>
              <div>Rest of page</div>
            </Scaffolding>
          </div>
        </div>
      </div>
    </>
  );
}
export default memo(MainPage);
