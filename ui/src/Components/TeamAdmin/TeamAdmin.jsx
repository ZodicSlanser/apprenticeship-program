import React, { useState } from 'react';
import "./TeamAdmin.css";
import TeamPage from "./TeamPage"
import Rectangle from "../../Assets/TeamAdmin/Rectangle.svg"
import addCircle from "../../Assets/TeamAdmin/add-circle.svg"
import infoCircle from "../../Assets/TeamAdmin/info-circle.svg"
import link from "../../Assets/TeamAdmin/LinkedIn logo.svg"
import trash from "../../Assets/TeamAdmin/trash.svg"

function TeamAdmin() {
    const [modalOpen, setModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState();
    const [list, setList] = useState([])
    const [formData, setFormData] = useState(
        { name: '', socialURL: '', photo: '' }
    )
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setList((ls) => [...ls, formData])
        setFormData('')
    }

    const handleImage = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(e.target.files[0]);
            setFormData(prevFormData => {
                return {
                    ...prevFormData,
                    [e.target.name]: URL.createObjectURL(e.target.files[0])
                }
            })

        }
    }
   const handleClose = () => {
        setModal(false);
        setSelectedImage(false);

    }
    const removeAdmin = (index) => {
        setList(list.filter((el, i) => i !== index))
    }

    const handleChange= (e) => {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [e.target.name]: e.target.value
            }
        })
    }
    return (

        <div className='Team-container'>
            <div className='Title-container'>
                <div className='Title'>
                    <span>Team Admin</span>
                    <button className='Add-member' onClick={() => {
                        setModal(true);
                    }}>
                        <img src={addCircle} alt="add-circle"></img>
                        <span> Add Team Member</span>
                    </button>
                </div>
                <img src={infoCircle} className='info-circle' alt="info-circle"></img>
            </div>
            <div className='TeamAdmin-container' >
                {list.map((a, index) => (

                    <li className='Admin-details' key={index}>

                        {a.photo ? <img className='preview' src={a.photo} alt="pic"></img> : <img className='preview' src={Rectangle} alt="pic"></img>}
                        <div className='admin-firstName'>
                            <span> {a.name}</span>

                        </div>
                        <a href={a.socialURL}><img src={link} alt="LinkedIn"></img></a>

                        <img className='delete' src={trash} onClick={() => removeAdmin(index)} alt="trash"></img>
                    </li>
                ))}
            </div>

            {modalOpen && <TeamPage closeModal={handleClose} handleform={handleChange}
                selectedImage={selectedImage} changeImage={handleImage} submit={handleSubmit} />}


        </div>

    )
}
export default TeamAdmin;