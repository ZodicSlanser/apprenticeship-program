import React, { useState, useRef } from 'react';
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
    <div className='popup-container' >
      <div className='popup'>
        <div className='popup-header'>
          <span>
            Add Team Admin
          </span>
          <div className='popup-btns'>
            <button className='save-btn' onClick={props.submit}>
              <span> Save</span>
            </button>

            <img src={close} onClick={props.closeModal}></img>

          </div>
        </div>
        <div className='image-upload'>

          {props.selectedImage ?
            <img
              className='selected-img'
              src={URL.createObjectURL(props.selectedImage)}

            /> : <img src={Rectangle}></img>
          }
          <input className='hide' accept="image/*" type="file" name="photo" onChange={props.changeImage} ref={fileInputRef} />
          <div className='upload' onClick={(event) => {
            event.preventDefault();
            fileInputRef.current.click();
          }}>
            <img src={upload}></img>


          </div>

        </div>
        <form onSubmit={props.submit}>
          <div className='admin-name'>
            <img src={profile}></img>
            <input type="text" placeholder="Name" name='firstName' onChange={props.handleform} ></input>
          </div>
          <div className='admin-email' >
            <img src={sms}></img>
            <input type="email" placeholder="Email address " ></input>
          </div>
          <div className='admin-linkedin'>
            <img src={link}></img>
            <input type="url" placeholder="LinkedIn URL (optional)" name='url' onChange={props.handleform} ></input>
          </div>
        </form>

      </div>
    </div>

  )
}
export default TeamPage;