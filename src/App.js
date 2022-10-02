import ProgressBar from "./Components/ProgressBar";
function App() {
  let invokeActivitySetter;
  const invokeActivity = (setStateCallback, active) => {
    if (setStateCallback) {
      invokeActivitySetter = setStateCallback[1];
    } else {
      invokeActivitySetter(active);
    }
  };
  let invokeDescriptionSetter;
  const invokeDescription = (setStateCallback, done) => {
    if (setStateCallback) {
      invokeDescriptionSetter = setStateCallback[1];
    } else {
      invokeDescriptionSetter(done);
    }
  };
  let invokeTypeSetter;
  const invokeType = (setStateCallback, done) => {
    if (setStateCallback) {
      invokeTypeSetter = setStateCallback[1];
    } else {
      invokeTypeSetter(done);
    }
  };
  let invokeRolesSetter;
  const invokeRoles = (setStateCallback, done) => {
    if (setStateCallback) {
      invokeRolesSetter = setStateCallback[1];
    } else {
      invokeRolesSetter(done);
    }
  };
  let invokeAdminSetter;
  const invokeAdmin = (setStateCallback, done) => {
    if (setStateCallback) {
      invokeAdminSetter = setStateCallback[1];
    } else {
      invokeAdminSetter(done);
    }
  };
  let invokeTimelineSetter;
  const invokeTimeline = (setStateCallback, done) => {
    if (setStateCallback) {
      invokeTimelineSetter = setStateCallback[1];
    } else {
      invokeTimelineSetter(done);
    }
  };
  return (
    <>
      <ProgressBar
        invokeActivity={invokeActivity}
        invokeDescription={invokeDescription}
        invokeType={invokeType}
        invokeRoles={invokeRoles}
        invokeAdmin={invokeAdmin}
        invokeTimeline={invokeTimeline}
      ></ProgressBar>
      <div
        style={{ width: "600px", height: "100px", backgroundColor: "red" }}
        onClick={() => invokeActivity(null, 1)}
        onBlur={() => invokeActivity(null, 0)}
        tabindex="-1"
      >
        Description
        <button onClick={() => invokeDescription(null, true)}>done</button>
        <button onClick={() => invokeDescription(null, false)}>not done</button>
      </div>
      <div
        style={{ width: "600px", height: "100px", backgroundColor: "blue" }}
        onClick={() => invokeActivity(null, 2)}
        onBlur={() => invokeActivity(null, 0)}
        tabindex="-1"
      >
        Type
        <button onClick={() => invokeType(null, true)}>done</button>
        <button onClick={() => invokeType(null, false)}>not done</button>
      </div>
      <div
        style={{ width: "600px", height: "100px", backgroundColor: "green" }}
        onClick={() => invokeActivity(null, 3)}
        onBlur={() => invokeActivity(null, 0)}
        tabindex="-1"
      >
        Roles
        <button onClick={() => invokeRoles(null, true)}>done</button>
        <button onClick={() => invokeRoles(null, false)}>not done</button>
      </div>
      <div
        style={{ width: "600px", height: "100px", backgroundColor: "yellow" }}
        onClick={() => invokeActivity(null, 4)}
        onBlur={() => invokeActivity(null, 0)}
        tabindex="-1"
      >
        Admin
        <button onClick={() => invokeAdmin(null, true)}>done</button>
        <button onClick={() => invokeAdmin(null, false)}>not done</button>
      </div>
      <div
        style={{ width: "600px", height: "100px", backgroundColor: "grey" }}
        onClick={() => invokeActivity(null, 5)}
        onBlur={() => invokeActivity(null, 0)}
        tabindex="-1"
      >
        Timeline
        <button onClick={() => invokeTimeline(null, true)}>done</button>
        <button onClick={() => invokeTimeline(null, false)}>not done</button>
      </div>
    </>
  );
}
export default App;
