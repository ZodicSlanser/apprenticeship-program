import { useState, memo } from "react";
import "./Roles.css";
import pen_icon from "../../Assets/Roles/pen-tool-2.svg";
import code_icon from "../../Assets/Roles/code.svg";
import mobiledev_icon from "../../Assets/Roles/category.svg";
import edit_icon from "../../Assets/Roles/edit.svg";
import copy_icon from "../../Assets/Roles/copy.svg";
import trash_icon from "../../Assets/Roles/trash.svg";
import PopFormUpdate from "./PopFormUpdate";
export default memo(function Roles(props) {
  const [showPopFormUpdate, setShowPopFormUpdate] = useState(false);

  function togglePopFormUpdate() {
    setShowPopFormUpdate(!showPopFormUpdate);
  }
  function UpdateRoleAndToggle(Role, index) {
    togglePopFormUpdate();
    props.UpdateRole(Role, index);
  }
  return (
    <>
      <div className="new-role">
        <header>
          <div className="role-head">
            <div className="role-name">
              <img
                src={
                  props.type === "Full Stack Developer"
                    ? pen_icon
                    : props.type === "ios Developer" ||
                      props.type === "Mobile Developer"
                    ? mobiledev_icon
                    : code_icon
                }
                alt="pen-icon"
                className="tagIcon"
              />
              <div
                style={{
                  marginTop: "2px",
                  marginLeft: "10px",
                }}
              >
                {props.type}
              </div>
            </div>
            <div className="side-icons">
              <img
                src={edit_icon}
                alt="edit_icon"
                onClick={togglePopFormUpdate}
              />
              <img
                src={copy_icon}
                alt="copy_icon"
                onClick={() => props.duplicateRole(props.index)}
              />
              <img
                src={trash_icon}
                alt="trash_icon"
                onClick={() => props.handleDelete(props.index)}
              />
            </div>
          </div>
          <div className="DescritionSpace">
            <p>{props.desc}</p>
          </div>
        </header>
        <section className="role-skills">
          {props.reqSkills.map((skill, index) => (
            <div key={index} className="skill-req">
              {skill}
            </div>
          ))}
          {props.compSkills.map((skill, index) => (
            <div key={index} className="skill-comp">
              {skill}
            </div>
          ))}
        </section>
      </div>
      {showPopFormUpdate && (
        <PopFormUpdate
          index={props.index}
          type={props.type}
          reqSkills={props.reqSkills}
          compSkills={props.compSkills}
          location={props.location}
          hours={props.hours}
          desc={props.desc}
          togglePopForm={togglePopFormUpdate}
          handleClick={UpdateRoleAndToggle}
        />
      )}
    </>
  );
});
