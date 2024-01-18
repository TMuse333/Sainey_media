import react from 'react'
import logo from '../media/no-bg-sainey-logo.png'
import '../styles/navbar2.css'

const Navbar2 = () => {

    return (
        <div className='navbar2-container'>
           
              <p className='navbar-text'>
                Sainey 
              </p>
           
            <img src={logo}/>
            
            <p className='navbar-text'>
                Media
            </p>
           
        </div>
    )
}

export default Navbar2