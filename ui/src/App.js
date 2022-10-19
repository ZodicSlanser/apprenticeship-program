import React, { useState } from 'react'
import Scaffolding from"./Components/AprenticeshipDescription/Scaffolding.js"
import ApprenticeshipDesc from "./Components/AprenticeshipDescription/ApprenticeshipDesc"

function App() {
  
  const components=[      
   <ApprenticeshipDesc
     panel= {<ApprenticeshipDesc />}
   />

  ]
   return ( 
     <>
     <Scaffolding
     children={components}
     />
   </>
   )
   
}
export default App