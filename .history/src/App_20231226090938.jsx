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
import About from './components/ceo'
import 


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
   
   <Route path='/' 
   element={<Layout/>}
   />

   <Route path='/ceo' element={<About/>}>

   </Route>



 </Routes>
     
    </>
  )
}

export default App
