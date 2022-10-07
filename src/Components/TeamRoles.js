import React, { useState } from 'react'
import addCircle from '../icons/add-circle.png'
import infoCircle from '../icons/info-circle.png'
export default function TeamRoles(props) {
    return (
        <section className="team-roles-panel">
           <div className='team-Button-a'>
            <div><p>Team Roles</p>
            <button className="team-roles-button">
                <img src={addCircle} alt='add Circle Icon' className='add-circle-icon'/>
                Add Team Member
            </button></div>
            <img src={infoCircle} alt='Info Circle Icon' className='info-circle-icon'></img>
           </div>
           <div className='available-roles'>
           </div>
        </section>

    )
}