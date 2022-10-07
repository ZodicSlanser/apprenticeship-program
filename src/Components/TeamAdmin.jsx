import React, { useState } from 'react';
import "../styles.css";
import TeamPage from "./TeamPage"
import Rectangle from "./Rectangle.svg";
import addCircle from "./add-circle.svg"
import infoCircle from "./info-circle.svg"
import link from "./LinkedIn logo.svg"

function TeamAdmin() {
    const [modalOpen, setModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState();
    const [formData, setFormData] = useState(
        { firstName: '', url: '', photo: '' }
    )
    const [list, setList] = useState([])


    console.log(formData)
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

    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
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
                        <img src={addCircle}></img>
                        <span> Add Team Member</span>
                    </button>
                </div>
                <img src={infoCircle} className='info-circle'></img>
            </div>
            <div className='TeamAdmin-container' >
                {list.map((a, index) => (

                    <div className='Admin-details' key={index}>
                        {selectedImage ? <img src={a.photo}></img> : null}
                        <div className='admin-firstName'>
                            <span> {a.firstName}</span>

                        </div>
                        <a href={a.url}><img src={link}></img></a>


                    </div>




                ))}
            </div>

            {modalOpen && <TeamPage closeModal={() => setModal(false)} handleform={handleChange}
                selectedImage={selectedImage} changeImage={handleImage} submit={handleSubmit} />}
        </div>

    )
}
export default TeamAdmin;