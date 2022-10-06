import React, { useState } from 'react'
import '../styles/PopForm.css'
import userFrame from '../icons/frame.png'
import clockIcon from '../icons/clock.png'
import closeIcon from '../icons/close.png'
import downarrw from '../icons/arrow-down.png'
import DropMenu from './DropMenu'
export default function PopForm(){
    const [role,setRole]=useState('Select Role')
    const [dropmenu,setshow]=useState(true)
    function pickRole(rolesent){
        setRole(rolesent)
        setshow(!dropmenu)

    }
   
    function roleDrop(){
        setshow(!dropmenu)
    }

    
    return(
        <div className="popup">
            <div className="title-btn">
                <h1>Add Role</h1>
                <div className='buttons'>
                    <button className='button'>save</button>
                    <img src={closeIcon} alt='Close utton'/>
                </div>
            </div>
            <div className='dropDown-wrapper'>
                <img src={userFrame} alt='User Icon' className='user-Icon'/>
                <div className='select-btn' onClick={roleDrop} >
                        <div>{role}</div>
                        <img src={downarrw} alt='arrow down' className='down-arrow'/>
                </div>
                {dropmenu && 
                <div className='menu-content'>
                        <div className='search' >
                            <input type="text" placeholder='Search' />
                        </div>
                    <ul className="options">
                        <li onClick={()=>pickRole('ios Developer') }>ios Developer</li>
                        <li onClick={()=>pickRole('Android Developer') }>Android Developer</li>
                        <li onClick={()=>pickRole('Full Stack Developer') }>Full Stack Developer</li>
                        <li onClick={()=>pickRole('Front-end Developer') }>Front-end Developer</li>
                        <li onClick={()=>pickRole('Back-end Developer') }>Back-end Developer</li>
                    </ul>
                </div> }
    
            </div>
            <div className='role-desc'>
                <h3>Role Description</h3>
                <input type="text" className='input-desc' placeholder="Description" />
            </div>
            <div className='minimum-hours'>
                <h3>Minimum Hours</h3>
                <div className='icon-hours'>
                    <img src={clockIcon} alt='Clock Icon' className='clock-Icon'/>
                    <input type="text" className='input-hours' placeholder="No. of hours" />
                </div>
                
            </div>


        </div>
    )
}