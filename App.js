import React, { useState } from 'react'
import Scaffolding from"./components/Scaffolding"
import ApprenticeshipDesc from "./components/ApprenticeshipDesc"

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