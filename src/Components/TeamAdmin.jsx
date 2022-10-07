import React,{ useState }from 'react';
import "../styles.css";
import TeamPage from "./TeamPage"
import addCircle from "./add-circle.svg"
import infoCircle from "./info-circle.svg"
function  TeamAdmin(){
    const [modalOpen, setModal] = useState(false);
    return(
        
        <div className='Team-container'>
        <div className='Title-container'>
        <div className='Title'>
            <span>Team Admin</span>
            <button className='Add-member' onClick={() => {
          setModal(true);
        }}>
                <img src={addCircle}></img>
                <span> Add Team Member</span>
            </button>
        </div>
        <img src={infoCircle} className='info-circle'></img>
        </div>
        <div className='TeamAdmin-container'>
            <div className='Admin-details'>
                
            </div>
        </div>
        {modalOpen && <TeamPage  closeModal={()=> setModal(false)}/>}
        </div>
        
    )
}
export default TeamAdmin;