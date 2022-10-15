import { useState } from "react";
import LogoTitlePanel from "../LogoTitlePanel/LogoTitlePanel";
import ProgressBar from "../ProgressBar/ProgressBar";
import Scaffolding from "../Scaffolding/Scaffolding";
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
      <div>Header goes here</div>
      <div>
        <ProgressBar
          invokeActivity={invokeActivity}
          invokeDescription={invokeDescription}
          invokeType={invokeType}
          invokeRoles={invokeRoles}
          invokeAdmin={invokeAdmin}
          invokeTimeline={invokeTimeline}
        ></ProgressBar>
      </div>
      <Scaffolding>
        <LogoTitlePanel
          invokeActivity={invokeActivity}
          invokeLogoTitle={invokeDescription}
          setTitle={setTitle}
          setLogo={setLogo}
        ></LogoTitlePanel>
        <div>rest of page</div>
      </Scaffolding>
    </div>
  );
}
export default MainPage;
