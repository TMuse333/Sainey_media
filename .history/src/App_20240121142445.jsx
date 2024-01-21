import { useState } from 'react'

import './App.css'

import {
  BrowserRouter as Router,

  Route, Routes

} from "react-router-dom";

import Overview from './components/overview'

import Portfolio from './components/portfolio'

import Layout2 from './components/layout2'
import Packages from './components/packages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
   
   <Route path='/' 
   element={<Layout2/>}
  //  element={<Layout/>}
   />

   <Route path='about-ceo' element={<Overview/>}>

   </Route>

   <Route path='about-company' element={<Packages/>}>

   </Route>

   <Route path='portfolio' element={<Portfolio/>}>
    
   </Route>



 </Routes>
     
    </>
  )
}

export default App
