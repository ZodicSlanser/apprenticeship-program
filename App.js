import React, { useState } from 'react'
import Scaffolding from"./components/Scaffolding"
import CompanyDesc from "./components/CompanyDesc"

 
function App() {
  
  const components=[      
   <CompanyDesc
     panel= {<CompanyDesc />}
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