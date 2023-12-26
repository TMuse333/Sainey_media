import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Testimonials from './components/testimonials'
import Navbar from './components/navbar'
import Layout from './components/layout'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
   
   <Route path='/' 
   element={<Layout/>}
   />

   <Route path='' element={<Process/>}>

   </Route>

   <Route path='booking' element={<Booking/>}>

   </Route>

   <Route path='about' element={<About/>}></Route>

   <Route path='portfolio' element={<Portfolio/>}></Route>


 </Routes>
     
    </>
  )
}

export default App
