import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Testimonials from './components/testimonials'
import { Navbar } from 'react-bootstrap'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar
      <Testimonials/>
     
    </>
  )
}

export default App
