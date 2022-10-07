import React, { useState } from 'react'
import '../styles/DropSkillMenu.css'
import tickCircle from '../icons/Vector.svg'
import downarrw from '../icons/arrow-down.png'

export default function DropDownSkillsMenu (props ){
    /*containing all options */
    const AllOptions=props.skills
    /*it will hold the searched for options */
    const [options,setOptions]= useState(props.skills)
    /*Search Function triggered by any change (keystroke)in the search */
    function search(event){
        setOptions(pervOptions =>{
            const newOptions=[]
            AllOptions.map(pervOption=>{
                /*to check if the entered letters in search bar are included in any option ignoring the case */
                if(pervOption.toLowerCase().includes(event.target.value.toLowerCase())){
                    newOptions.push(pervOption)
                }
            })
            return(newOptions)
        })
    }
    
    return(
        <div className='skillwrapper'>
            <img src={props.Frame} alt='Icon' className='skillIcon'/>
            <div className='skillselect-btn' onClick={props.toggleMenu} >
                    <div >Select skills</div>
                    <img src={downarrw} alt='arrow down' className='skilldown-arrow'/>
            </div>
            {props.showMenu && 
            <div className='skillMenuContent'>
                    <div className='skillsearch' >
                        <input type="text" placeholder='Search' onChange={search}  />
                    </div>
                <ul className="skilloptions">
                    {options.map((option,index)=>(
                         <li key={index} onClick={()=>props.chooseSkill(option)  }>
                            <img src={tickCircle} alt='tick' className='tick-icon'/>
                            {option}</li>
                        ))
                    }
                </ul>
            </div> }
    
        </div>
    )
}