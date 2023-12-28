import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Testimonials from './components/testimonials'
import Navbar from './components/navbar'
import Layout from './components/layout'
import {
  BrowserRouter as Router,

  Route, Routes

} from "react-router-dom";

import Overview from './components/overview'
import Services from './components/services'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
   
   <Route path='/' 
   element={<Layout/>}
   />

   <Route path='about-ceo' element={<Overview/>}>

   </Route>

   {/* <Route path='about-company' element={''}>

   </Route> */}



 </Routes>
     
    </>
  )
}

export default App
