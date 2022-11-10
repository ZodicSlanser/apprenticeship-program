import React, { useState, useEffect, memo } from "react";
import addCircle from "../../Assets/Roles/add-circle.svg";
import infoCircle from "../../Assets/Roles/info-circle.svg";
import "./TeamRoles.css";
import Roles from "./Roles.jsx";
import PopForm from "./PopForm";
import { useLocation } from "react-router-dom";
export default memo(function TeamRoles(props) {
  const location = useLocation();
  const [listOfRoles, setRoles] = useState(
    location.state ? location.state.roles : []
  );
  const [showPopForm, setShowPopForm] = useState(false);
  useEffect(() => {
    props.invokeRoles(null, listOfRoles.length > 0 ? true : false);
    props.setRoles(listOfRoles);
  }, [listOfRoles.length, props]);
  function togglePopForm() {
    setShowPopForm(!showPopForm);
  }

  function appendToListOfRoles(role) {
    if (
      role.type !== "Select Role" &&
      role.compSkills.length > 0 &&
      role.reqSkills.length > 0 &&
      role.hours !== null &&
      role.desc &&
      role.location.length > 0
    ) {
      setRoles((prevRoles) => {
        const newRoles = prevRoles;
        newRoles.push(role);
        return newRoles;
      });
      togglePopForm();
    }
  }

  function deleteRole(index1) {
    setRoles((prevRoles) => {
      const newRoles = [];
      prevRoles.map((role, index) => {
        if (index1 === index) {
        } else {
          newRoles.push(role);
        }
      });
      return newRoles;
    });
  }

  function UpdateRole(Role, index1) {
    if (!(Role.type === "Select Role")) {
      setRoles((prevRoles) => {
        const newRoles = [];
        prevRoles.map((role, index) => {
          if (index1 === index) {
            newRoles.push(Role);
          } else {
            newRoles.push(role);
          }
        });
        return newRoles;
      });
    }
  }
  function duplicateRole(index1) {
    setRoles((prevRoles) => {
      const newRoles = [];
      prevRoles.map((role, index) => {
        if (index1 === index) {
          newRoles.push(role);
          newRoles.push(role);
        } else {
          newRoles.push(role);
        }
      });
      return newRoles;
    });
  }

  return (
    <>
      <section
        className="team-roles-panel"
        onMouseEnter={(e) => {
          props.invokeActivity(null, 3);
        }}
        onClick={(e) => {
          props.invokeActivity(null, 3);
        }}
        onMouseLeave={(e) => {
          props.invokeActivity(null, 0);
        }}
      >
        <div className="team-Button-a">
          <div>
            <p> Team Roles </p>{" "}
            <button className="team-roles-button" onClick={togglePopForm}>
              <img
                src={addCircle}
                alt="add Circle Icon"
                className="add-circle-icon"
              />
              Add Team Member{" "}
            </button>{" "}
          </div>{" "}
          <img
            src={infoCircle}
            alt="Info Circle Icon"
            className="info-circle-icon"
          ></img>{" "}
        </div>{" "}
        {listOfRoles.length > 0 ? (
          <div className="available-roles">
            {" "}
            {listOfRoles.map((singleRole, index) => (
              <Roles
                key={index}
                index={index}
                handleDelete={deleteRole}
                type={singleRole.type}
                desc={singleRole.desc}
                compSkills={singleRole.compSkills}
                reqSkills={singleRole.reqSkills}
                hours={singleRole.hours}
                location={singleRole.location}
                UpdateRole={UpdateRole}
                duplicateRole={duplicateRole}
              />
            ))}
          </div>
        ) : (
          <></>
        )}
      </section>
      {showPopForm && (
        <PopForm
          togglePopForm={togglePopForm}
          handleClick={appendToListOfRoles}
        />
      )}{" "}
    </>
  );
});
