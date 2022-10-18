import React, { useState } from "react";
import "./Roles.css";
import pen_icon from "../../Assets/Roles/pen-tool-2.png";
import edit_icon from "../../Assets/Roles/edit.png";
import copy_icon from "../../Assets/Roles/copy.png";
import trash_icon from "../../Assets/Roles/trash.png";
export default function Roles(props) {
  return (
    <div className="new-role">
      <header>
        <div className="role-head">
          <div className="role-name">
            <img src={pen_icon} alt="pen-icon" />
            {/* add {props.name} */}
            <h1>{props.type}</h1>
          </div>
          <div className="side-icons">
            <img src={edit_icon} alt="edit_icon" />
            <img src={copy_icon} alt="copy_icon" />
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
  );
}
