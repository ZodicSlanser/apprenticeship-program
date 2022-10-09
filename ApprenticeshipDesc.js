import React, { useState } from 'react'
import ApprenticeshipDesc from '../style/ApprenticeshipDesc.css'
import exclmark from '../style/exclmark.svg'

export default function (){
    return(
        <div className="panel">
           <img src={exclmark} alt="exmark" className='exmark' /> 
          <div className='panel-heading'>Apprenticeship Description</div>
          <br/>
          <textarea type="textarea" className='desc-txt' placeholder='EnterDescription'  textarea/>

</div>
)
} 