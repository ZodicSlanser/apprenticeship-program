import React, { useState } from 'react'
import './DropDownRoleMenu.css'
import downarrw from '../../Assets/Roles/arrow-down.png'
import activedownarrw from '../../Assets/Roles/active-arrow-down.png'
import userFrame from '../../Assets/Roles/frame.png'

export default function DropDownRoleMenu (props ){
    const title=props.title
    const AllOptions=props.options
    const [options,setOptions]= useState(props.options)
    /*Search Function triggered by any change (keystroke)in the search */
    function search(event){
        setOptions(pervOptions =>{

            const newOptions=[]
            AllOptions.map(pervOption=>{
                if(pervOption.toLowerCase().includes(event.target.value.toLowerCase())){
                    newOptions.push(pervOption)
                }
            })
            return(newOptions)
        })
    }
    
    return(
        <div className='dropDown-wrapper'>
            <img src={userFrame} alt='User Icon' className='user-Icon'/>
            <div className='select-btn' onClick={props.toggleRoleMenu} >
                    <div>{title}</div>
                    {props.showRoleMenu ?<img src={activedownarrw} alt='arrow down' className='down-arrow'/>:<img src={downarrw} alt='arrow down' className='down-arrow'/>}
            </div>
            {props.showRoleMenu && 
            <div className='menu-content'>
                    <div className='search' >
                        <input type="text" placeholder='Search' onChange={search} />
                    </div>
                <ul className="options">
                    {options.map((option,index)=>(
                        <li key={index} onClick={()=>props.handleChange(option)  }>{option}</li>
                    ))
                     }
                </ul>
            </div> }
    
         </div>
    )
}