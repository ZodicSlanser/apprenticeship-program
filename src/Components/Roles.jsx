import React, { useState } from 'react'
import "../styles/Roles.css"
import pen_icon from "../Icons/pen-tool-2.png"
import edit_icon from "../Icons/edit.png"
import copy_icon from "../Icons/copy.png"
import trash_icon from "../Icons/trash.png"
export default function Roles(props) {
    return (
        <div className='new-role'>
            <header>
                <div className='role-head'>
                    <div className='role-name'>
                        <img src={pen_icon} alt="pen-icon" />
                        {/* add {props.name} */}
                        <h1>Front-End developer</h1>
                    </div>
                    <div className='side-icons'>
                        <img src={edit_icon} alt="edit_icon" />
                        <img src={copy_icon} alt="copy_icon" />
                        <img src={trash_icon} alt="trash_icon" />
                    </div>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magaliqua.
                </p>
            </header>
            <section className='role-skills'>
                {/* {props.required_skills.map(jsx)}
                {props.complementary_skills.map(jsx)} */}
            </section>
        </div>
    )
}