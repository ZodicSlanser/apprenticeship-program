import React, {  useRef } from 'react';
import "../styles.css";
import close from "./close.svg";
import profile from "./profile.svg";
import sms from "./sms.svg";
import link from "./link.svg";
import Rectangle from "./Rectangle.svg";
import upload from "./upload.svg";

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

            <img src={close} onClick={props.closeModal} alt="close-icon"></img>

          </div>
        </div>
        <div className='image-upload'>

          {props.selectedImage ?
            <img
              className='selected-img'
              alt="pic"
              src={URL.createObjectURL(props.selectedImage)}

            /> : <img src={Rectangle} alt="pic"></img>
          }
          <input className='hide' accept="image/*" type="file" name="photo" onChange={props.changeImage} ref={fileInputRef} />
          <div className='upload' onClick={(event) => {
            event.preventDefault();
            fileInputRef.current.click();
          }}>
            <img src={upload} alt="upload-pic"></img>


          </div>

        </div>
        <form onSubmit={props.submit}>
          <div className='admin-name'>
            <img src={profile} alt="profile-icon"></img>
            <input type="text" placeholder="Name" name='name' onChange={props.handleform} ></input>
          </div>
          <div className='admin-email' >
            <img src={sms} alt="sms-icon"></img>
            <input type="email" placeholder="Email address " ></input>
          </div>
          <div className='admin-linkedin'>
            <img src={link} alt="link-icon"></img>
            <input type="url" placeholder="LinkedIn URL (optional)" name='socialURL' onChange={props.handleform} ></input>
          </div>
        </form>

      </div>
    </div>

  )
}
export default TeamPage;