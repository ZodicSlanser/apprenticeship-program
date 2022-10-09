import React, { useState } from 'react'
import CompanyDesc from '../style/CompanyDesc.css'
import exclmark from '../style/exclmark.svg'

export default function (){
    return(
        <div className="panel">
           <img src={exclmark} alt="exmark" className='exmark' /> 
          <div className='panel-heading'>Company Description</div>
          <br/>
          <textarea type="textarea" className='desc-txt' placeholder='EnterDescription'  textarea/>

</div>
)
} 