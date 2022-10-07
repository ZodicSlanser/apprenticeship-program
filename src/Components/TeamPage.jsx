import React,{useState,useRef}from 'react';
import "../styles.css";
import close from "./close.svg";
import profile from "./profile.svg";
import sms from "./sms.svg";
import link from "./link.svg";
import Rectangle from "./Rectangle.svg";
import upload from "./upload.svg";

function TeamPage( { closeModal }){
    const [selectedImage, setSelectedImage] = useState();
    const fileInputRef = useRef();
    const inputName = useRef(null);
    const inputUrl = useRef(null);
 

      const handleImage = (e) =>{
    if (e.target.files && e.target.files.length > 0) {
        setSelectedImage(e.target.files[0]);
      }
  }
  function handleClick() {
    console.log(inputName.current.value);
    console.log(inputUrl.current.value);
    console.log(URL.createObjectURL(selectedImage));

  }
    return(
        <div className='popup-container' >
        <div className='popup'>
            <div className='popup-header'>
                <span>
                    Add Team Admin
                </span>
                <div className='popup-btns'>
                    <button className='save-btn' onClick={handleClick}>
                        <span> Save</span>
                    </button>
                   
                    <img src={close} onClick={closeModal}></img>
                    
                </div>
            </div>
            <div className='image-upload'>
           
            {selectedImage ?
            <img 
            className='selected-img'
              src={URL.createObjectURL(selectedImage)}

            />:<img src={Rectangle}></img>
          }
          <input className='hide' accept="image/*" type="file" onChange={handleImage} ref={fileInputRef}/>
            <div className='upload' onClick={(event)=>{
                event.preventDefault();
                fileInputRef.current.click();
            }}>
            <img src={upload}></img>
          

            </div>

            </div>
            <form>
            <div className='admin-name'>
            <img src={profile}></img>
                <input type="text" placeholder="Name"  ref={inputName} ></input>
            </div>
            <div className='admin-email' >
            <img src={sms}></img>
            <input type="email" placeholder="Email address " ></input>
            </div>
            <div className='admin-linkedin'>
            <img src={link}></img>
            <input type="url" placeholder="LinkedIn URL (optional)" ref={inputUrl}  ></input>
            </div>
            </form>

        </div>
        </div>
       
    )
}
export default TeamPage;