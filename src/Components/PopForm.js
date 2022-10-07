import React, { useState } from 'react'
import '../styles/PopForm.css'
import medalIcon from '../icons/medal-star.png'
import clockIcon from '../icons/clock.png'
import closeIcon from '../icons/close.png'
import DropDownRoleMenu  from './DropDownRoleMenu'
import DropDownSkillsMenu from './DropDownSkillsMenu'
import closeSquare from '../icons/close-square.png'

export default function PopForm(){
    /* Role*/
    const [role,setRole]=useState('Select Role')
    function pickRole(selectedRole){
        setRole(selectedRole)
        setshowRoleMenu(!showRoleMenu)

    }
    /*To Toggle Role DropDown Menu */
    const [showRoleMenu,setshowRoleMenu]=useState(false)
    function toggleRoleMenu(){
        setshowRoleMenu(!showRoleMenu)
    }
    /******************************************************************* */
    /*Role Description triggered by onChange*/
    const [desc,setDesc]=useState('')
    function saveDesc(event){
        setDesc(event.target.value)
    }
    //**************************************************************** */
    /*toggle the menu */
    const [showRSkillsMenu,setshowRSkillsMenu]=useState(false)
    function toggleSkillsMenu(){
        setshowRSkillsMenu(!showRSkillsMenu)
    }
    const [reqSkills,setreqSkills]=useState([])
    function appendToSkills(skill){
        setreqSkills(prevSkills=>{
            if(prevSkills.length<=2){
            return[
                ...prevSkills,
                skill
            ]
        }
        else
        {
            return prevSkills
        }
    })
    }
    function deleteSkill(index){
        setreqSkills(reqSkills=>[
              ...reqSkills.slice(0, index),
              ...reqSkills.slice(index + 1, reqSkills.length)
            ])
  
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
            <DropDownRoleMenu 
                title={role}
                showRoleMenu={showRoleMenu}
                toggleRoleMenu={toggleRoleMenu}
                handleChange={pickRole}
                options={["ios Developer","Mobile Developer",
                "Full Stack Developer","Front-end Developer","Back-end Developer"
                ]}
             />
            <div className='role-desc'>
                <h3>Role Description</h3>
                <textarea type="text" className='input-desc' placeholder="Description" onChange={saveDesc}/>
            </div>
            <div className='req-skills-component'>
                <h3>Required Skills (Select any 3)</h3>
                 <DropDownSkillsMenu 
                       Frame={medalIcon}
                       showMenu={showRSkillsMenu}
                       toggleMenu={toggleSkillsMenu}
                       skills={["Swift","ios",
                       "Objective-c","ARM"
                       ]}
                       chooseSkill={appendToSkills}
                       chosenSkills={reqSkills}
                 />
                 <div className='reqSkills'>
                    {
                        reqSkills.map((skill,index)=>(
                            <span key={index} className='singleSkill'>
                                {skill}
                                <img src={closeSquare} alt='close Icon' className='close-skill' onClick={()=>deleteSkill(index)}/>
                            </span>
                        ))
                    }
                 </div>

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