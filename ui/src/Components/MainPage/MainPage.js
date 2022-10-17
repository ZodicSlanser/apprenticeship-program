import { useState, useRef, useEffect } from "react";
import Header from "../Header/Header";
import LogoTitlePanel from "../LogoTitlePanel/LogoTitlePanel";
import ProgressBar from "../ProgressBar/ProgressBar";
import Scaffolding from "../Scaffolding/Scaffolding";
import TeamAdmin from "../TeamAdmin/TeamAdmin";
import TeamTypePanel from "../TeamType/TeamTypePanel";
import "./MainPage.css";

function MainPage() {
  const [title, setTitle] = useState();
  const [logo, setLogo] = useState();
  const [type, setType] = useState();
  const [roles, setRoles] = useState();
  const [admin, setAdmin] = useState();
  const [contentHover, setContentHover] = useState(false);
  const contentRef = useRef(null);
  const apprenticeship = {
    title: title,
    logo: logo,
    type: type,
    roles: roles,
    admin: admin,
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
  let invokeActivitySetter;
  const invokeActivity = (setStateCallback, active) => {
    if (setStateCallback) {
      invokeActivitySetter = setStateCallback[1];
    } else {
      if (invokeActivitySetter) invokeActivitySetter(active);
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
              <LogoTitlePanel
                invokeActivity={invokeActivity}
                invokeLogoTitle={invokeDescription}
                setTitle={setTitle}
                setLogo={setLogo}
              ></LogoTitlePanel>
              <TeamTypePanel
                invokeActivity={invokeActivity}
                invokeType={invokeType}
                setType={setType}
              ></TeamTypePanel>
              <TeamAdmin
                invokeActivity={invokeActivity}
                invokeAdmin={invokeAdmin}
                setAdmin={setAdmin}
              ></TeamAdmin>
              <div>Rest of page</div>
              <TeamTypePanel
                invokeActivity={invokeActivity}
                invokeType={invokeType}
                setType={setType}
              ></TeamTypePanel>
              <TeamTypePanel
                invokeActivity={invokeActivity}
                invokeType={invokeType}
                setType={setType}
              ></TeamTypePanel>
            </Scaffolding>
          </div>
        </div>
      </div>
    </>
  );
}
export default MainPage;
