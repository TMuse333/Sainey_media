import { useState, useEffect } from 'react'

import './App.css'

import {
  BrowserRouter as Router,

  Route, Routes

} from "react-router-dom";

import Overview from './components/overview'

import Portfolio from './components/portfolio'

import Layout2 from './components/layout2'
import Packages from './components/packages'
import Loading from './components/loading';

function App() {
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (replace with actual loading logic)
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Cleanup function
    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <>

    {loading ? (
      <Loading/>
    ) }
    <Routes>
   
   <Route path='/' 
   element={<Layout2/>}
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
