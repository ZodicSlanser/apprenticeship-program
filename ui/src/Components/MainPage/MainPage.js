import { useState, useRef, useEffect, memo } from "react";
import { useLocation } from "react-router-dom";
import ApprenticeshipDesc from "../AprenticeshipDescription/ApprenticeshipDesc";
import CompanyDesc from "../CompanyDesc/CompanyDesc";
import Header from "../Header/Header";
import LogoTitle from "../LogoTitle/LogoTitle";
import ProgressBar from "../ProgressBar/ProgressBar";
import TeamRoles from "../Roles/TeamRoles";
import Scaffolding from "../Scaffolding/Scaffolding";
import TeamAdmin from "../TeamAdmin/TeamAdmin";
import TeamTypePanel from "../TeamType/TeamTypePanel";
import TimeLine from "../TimeLine/TimeLine";
import Video from "../Video/Video";
import "./MainPage.css";
let lock = false;
let flags = [false, false, false, false];

function MainPage() {
  const location = useLocation();
  const [title, setTitle] = useState(location.state?.title || "");
  const [logo, setLogo] = useState(location.state?.logo || "");
  const [companyDesc, setCompanyDesc] = useState(
    location.state?.compDesc || ""
  );
  const [apprenticeshipDesc, setApprenticeshipDesc] = useState(
    location.state?.appDesc || ""
  );
  const [video, setVideo] = useState(location.state?.introVideo || "");
  const [type, setType] = useState(location.state?.type || "");
  const [roles, setRoles] = useState(location.state?.roles || []);
  const [admin, setAdmin] = useState(location.state?.admin || "");
  const [startDate, setStartDate] = useState(location.state?.startDate || "");
  const [endDate, setEndDate] = useState(location.state?.endDate || "");
  const [contentHover, setContentHover] = useState(false);
  const contentRef = useRef(null);
  const apprenticeship = {
    id: location.state ? location.state.id : null,
    title: title,
    logo: logo,
    teamType: type,
    introVideo: video,
    compDesc: companyDesc,
    appDesc: apprenticeshipDesc,
    roles: roles,
    members: admin,
    startDate: startDate,
    endDate: endDate,
  };
  console.log(location.state);
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
  const invokeDescription = (setStateCallback, done, componentID) => {
    if (setStateCallback) {
      invokeDescriptionSetter = setStateCallback[1];
    } else {
      if (invokeDescriptionSetter) {
        flags[componentID] = done;
        if (flags[0] && flags[1] && flags[2] && flags[3])
          invokeDescriptionSetter(true);
        else invokeDescriptionSetter(false);
      }
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
              <CompanyDesc
                invokeActivity={invokeActivity}
                invokeCompany={invokeDescription}
                setCompanyDesc={setCompanyDesc}
              ></CompanyDesc>
              <ApprenticeshipDesc
                invokeActivity={invokeActivity}
                invokeApprenticeship={invokeDescription}
                setApprenticeshipDesc={setApprenticeshipDesc}
              ></ApprenticeshipDesc>
              <Video
                invokeActivity={invokeActivity}
                invokeVideo={invokeDescription}
                setVideo={setVideo}
              ></Video>
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
            </Scaffolding>
          </div>
        </div>
      </div>
    </>
  );
}
export default memo(MainPage);
