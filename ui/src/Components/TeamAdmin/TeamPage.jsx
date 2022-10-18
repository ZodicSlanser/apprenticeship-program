import React, { useRef } from "react";
import "./TeamAdmin.css";
import close from "../../Assets/TeamAdmin/close.svg";
import profile from "../../Assets/TeamAdmin/profile.svg";
import sms from "../../Assets/TeamAdmin/sms.svg";
import link from "../../Assets/TeamAdmin/link.svg";
import Rectangle from "../../Assets/TeamAdmin/Rectangle.svg";
import upload from "../../Assets/TeamAdmin/upload.svg";

function TeamPage(props) {
  const fileInputRef = useRef();

  return (
    <div className="popup-container">
      <input
        className="hide"
        accept="image/*"
        type="file"
        name="photo"
        onChange={props.changeImage}
        ref={fileInputRef}
      />
      <div className="popup2" style={{ filter: "0px", WebkitFilter: "0px" }}>
        <div className="popup-header">
          <span>Add Team Admin</span>
          <div className="popup-btns">
            <button className="save-btn" onClick={props.submit}>
              <span> Save</span>
            </button>

            <img src={close} onClick={props.closeModal}></img>
          </div>
        </div>
        <div
          className="image-upload"
          onClick={(event) => {
            event.preventDefault();
            fileInputRef.current.click();
          }}
        >
          {props.selectedImage ? (
            <img
              className="selected-img"
              alt=""
              src={URL.createObjectURL(props.selectedImage)}
            />
          ) : (
            <></>
          )}

          <img
            className="uploadImage"
            src={upload}
            alt=""
            style={
              props.selectedImage
                ? {
                    marginTop: "0px",
                    bottom: "23.5px",
                  }
                : null
            }
          ></img>
        </div>
        <form onSubmit={props.submit}>
          <div className="admin-name">
            <img src={profile}></img>
            <input
              type="text"
              placeholder="Name"
              name="firstName"
              onChange={props.handleform}
            ></input>
          </div>
          <div className="admin-email">
            <img src={sms}></img>
            <input type="email" placeholder="Email address "></input>
          </div>
          <div className="admin-linkedin">
            <img src={link}></img>
            <input
              type="url"
              placeholder="LinkedIn URL (optional)"
              name="url"
              onChange={props.handleform}
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
}
export default TeamPage;
