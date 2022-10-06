import React, { useState } from 'react'
import '../styles/PopForm.css'
import userFrame from '../icons/frame.png'
import downarrw from '../icons/arrow-down.png'

export default function DropMenu(props ){
    const title=props.

    
    return(
        <div className='dropDown-wrapper'>
        <img src={userFrame} alt='User Icon' className='user-Icon'/>
        <div className='select-btn' onClick={props.roleDrop} >
                <div>{title}</div>
                <img src={downarrw} alt='arrow down' className='down-arrow'/>
        </div>
        {props.dropmenu && 
        <div className='menu-content'>
                <div className='search' >
                    <input type="text" placeholder='Search' />
                </div>
            <ul className="options">
                <li onClick={()=>props.pickRole('ios Developer') }>ios Developer</li>
                <li onClick={()=>props.pickRole('Android Developer') }>Android Developer</li>
                <li onClick={()=>props.pickRole('Full Stack Developer') }>Full Stack Developer</li>
                <li onClick={()=>props.pickRole('Front-end Developer') }>Front-end Developer</li>
                <li onClick={()=>props.pickRole('Back-end Developer') }>Back-end Developer</li>
            </ul>
        </div> }
    
    </div>
    )
}