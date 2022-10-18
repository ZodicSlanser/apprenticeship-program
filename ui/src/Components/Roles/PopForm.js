import React, { useState } from 'react'
import './PopForm.css'
import DropDownRoleMenu  from './DropDownRoleMenu'
import DropDownMenu from './DropDownMenu'
import medalIcon from '../../Assets/Roles/medal-star.png'
import clockIcon from '../../Assets/Roles/clock.png'
import closeIcon from '../../Assets/Roles/close.png'
import closeSquare from '../../Assets/Roles/close-square.png'
import starIcon from '../../Assets/Roles/star.png'

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
    const [AllSkills,setAllSkills]=useState(["Swift","ios",
    "Objective-c","ARM"
    ])
    const [reqSkills,setreqSkills]=useState([])
    function appendToRSkills(skill,index){
        setreqSkills(prevSkills=>{
        const newSkills=[]
            if(prevSkills.length<=2){
            prevSkills.map((prevSkill)=>{
                    if(prevSkill!==skill){
                        newSkills.push(prevSkill)
                    }
                })
                newSkills.push(skill)
                return newSkills
            }
            else
            {
                 return prevSkills
            }
        })
    }
    function deleteRSkill(index){
        setreqSkills(reqSkills=>[
              ...reqSkills.slice(0, index),
              ...reqSkills.slice(index + 1, reqSkills.length)
            ])
  
    }
    /**toggle The comp Menu */
    const [compSkills,setCompSkills]=useState([])
    function appendToCSkills(skill){
        setCompSkills(prevSkills=>{
        const newSkills=[]
            if(prevSkills.length<=2){
            prevSkills.map((prevSkill)=>{
                if(prevSkill!==skill){
                    newSkills.push(prevSkill)
                }
            })
            newSkills.push(skill)
            return newSkills
        }
        else
        {
            return prevSkills
        }
    })
}
    function deleteCSkill(index){
        setCompSkills(compSkills=>[
              ...compSkills.slice(0, index),
              ...compSkills.slice(index + 1, compSkills.length)
            ])
  
    }
    /*Location Menu */
    const numberOfSelectedLocation=0
    
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
            <div className='skills-component'>
                <h3>Required Skills (Select any 3)</h3>
                 <DropDownMenu 
                       Frame={medalIcon}
                       skills={AllSkills}
                       chooseSkill={appendToRSkills}
                       chosenSkills={reqSkills}
                 />
                 <div className='skills'>
                    {
                        reqSkills.map((skill,index)=>(
                            <span key={index} className='singleSkill'>
                                {skill}
                                <img src={closeSquare} alt='close Icon' className='close-skill' onClick={()=>deleteRSkill(index)}/>
                            </span>
                        ))
                    }
                 </div>
            </div>
            <div className='skills-component'>
                <h3>Complimentary Skills (Select any 3)</h3>
                 <DropDownMenu 
                       Frame={starIcon}
                       skills={AllSkills}
                       chooseSkill={appendToCSkills}
                       chosenSkills={compSkills}
                 />
                 <div className='skills'>
                    {
                        compSkills.map((skill,index)=>(
                            <span key={index} className='singleSkill'>
                                {skill}
                                <img src={closeSquare} alt='close Icon' className='close-skill' onClick={()=>deleteCSkill(index)}/>
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
            <div className='location'>
            <DropDownMenu
                       title={{numberOfSelectedLocation}+'Locations'}
                       Frame={starIcon}
                       skills={AllSkills}
                       chooseSkill={appendToCSkills}
                       chosenSkills={compSkills}
                 />
            </div>

        </div>
    )
}