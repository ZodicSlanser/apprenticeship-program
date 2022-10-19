import React, { useState } from 'react'
import ApprenticeshipDesc from './ApprenticeshipDesc.css'
import exclmark from '../../Assets/ApprenticeshipDescription/exclmark.svg'


export default function (){
    return(

        <div className="panel">
           <img src={exclmark} alt="exmark" className='exmark' /> 
          <div className='panel-heading'>Apprenticeship Description</div>
          <br/>
          <div contentEditable className='textarea'>Enter Description</div>
</div>

)

}