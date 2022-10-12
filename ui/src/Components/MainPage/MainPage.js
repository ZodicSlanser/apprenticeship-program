import { useState } from "react";
import Header from "../Header/Header";
import LogoTitlePanel from "../LogoTitlePanel/LogoTitlePanel";
import ProgressBar from "../ProgressBar/ProgressBar";
import Scaffolding from "../Scaffolding/Scaffolding";
import TeamTypePanel from "../TeamType/TeamTypePanel";
import "./MainPage.css";
function MainPage() {
  const [title, setTitle] = useState();
  const [logo, setLogo] = useState();

  const apprenticeship = { title: title, logo: logo };
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
  return (
    <div className="main-page">
      <div className="header-container">
        <Header></Header>
      </div>
      <div className="progressbar-container">
        <ProgressBar
          invokeActivity={invokeActivity}
          invokeDescription={invokeDescription}
          invokeType={invokeType}
          invokeRoles={invokeRoles}
          invokeAdmin={invokeAdmin}
          invokeTimeline={invokeTimeline}
        ></ProgressBar>
      </div>
      <div className="scaffolding-container">
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
          ></TeamTypePanel>
          <div>Rest of page</div>
        </Scaffolding>
      </div>
    </div>
  );
}
export default MainPage;