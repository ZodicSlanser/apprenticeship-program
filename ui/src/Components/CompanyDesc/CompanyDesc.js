import React, { useState } from 'react'
import CompanyDesc from './CompanyDesc.css'
import exclmark from '../../Assets/CompanyDesc/exclmark.svg'

export default function (){
    return(
        <div className="panel">
           <img src={exclmark} alt="exmark" className='exmark' /> 
          <div className='panel-heading'>Company Description</div>
          <br/>
          <div contentEditable className='textarea' > Enter Description </div>

</div>
)
} 