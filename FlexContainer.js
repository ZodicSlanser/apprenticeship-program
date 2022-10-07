import React from 'react';
import arrowLeft from './assets/arrow-left.svg';
import add from './assets/add.svg';
export default function FlexContainer() {
  // there is no such thing as `class`, it's `className`

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

