import React, { useState } from "react";
import addCircle from "../../Assets/Roles/add-circle.png";
import infoCircle from "../../Assets/Roles/info-circle.png";
import "./TeamRoles.css";
import Roles from "./Roles.jsx";
import PopForm from "./PopForm";
export default function TeamRoles(props) {
  const [ListOfRoles, setRoles] = useState([]);

  const [showPopForm, setShowPopForm] = useState(false);

  function togglePopForm() {
    setShowPopForm(!showPopForm);
  }

  function appendToListOfRoles(role) {
    setRoles((prevRoles) => {
      const newRoles = prevRoles;
      newRoles.push(role);
      return newRoles;
    });
    togglePopForm();
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

  const [showPopFormUpdate, setShowPopFormUpdate] = useState(false);

  function togglePopFormUpdate() {
    setShowPopFormUpdate(!showPopFormUpdate);
  }

  function UpdateRole(Role, index1) {
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
    togglePopFormUpdate();
    console.log(ListOfRoles);
  }

  return (
    <>
      <section className="team-roles-panel">
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
        <div className="available-roles">
          {" "}
          {ListOfRoles.map((singleRole, index) => (
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
            />
          ))}{" "}
        </div>{" "}
      </section>{" "}
      {showPopForm && (
        <PopForm
          togglePopForm={togglePopForm}
          handleClick={appendToListOfRoles}
        />
      )}{" "}
    </>
  );
}
