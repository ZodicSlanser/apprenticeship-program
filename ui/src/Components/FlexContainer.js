import React from 'react';
import arrowLeft from '../Assets/arrow-left.svg';
import add from '../Assets/add.svg';
export default function FlexContainer() {
  

  return (
    <div className="FlexContainer">
      <div className="back" onClick={()=>console.log('Back')}>
        <img src={arrowLeft} alt="arrow left" />
        Back
      </div>
      <div className="title">
        Creating Apprenticeship
      </div>
      <div className="publish">

        <button className="publish-button" onClick={() => console.log('Published!')}>
          <img src={add} alt="add" />
          Publish Apprenticeship
        </button>
      </div>
    </div>


  )
}

