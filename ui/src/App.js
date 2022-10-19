import React, { useState } from 'react'
import Scaffolding from"./Components/CompanyDesc/Scaffolding"
import CompanyDesc from "./Components/CompanyDesc/CompanyDesc"

 
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