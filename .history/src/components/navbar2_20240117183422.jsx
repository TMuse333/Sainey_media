import react, {useState} from 'react'
import logo from '../media/no-bg-sainey-logo.png'
import '../styles/navbar2.css'
import { Link } from 'react-router-dom'

const Navbar2 = () => {

    const [isListVisible, setIsListVisible] = useState(false)

    const navbarClick = () => {
        setIsListVisible(!isListVisible)
    }

    const navbarStyle = {
        overflow:'hidden',
        height: isListVisible ? '130px' : '0px',
        // padding: isListVisible ? '0.3rem 2rem 1rem 2rem' : 0,
        transition:'height 0.3s ease-in'
    }

    return (
        <div className='navbar2-container'>

            <div className='desktop left'>
                <span>Services</span>
                <span>Portfolio</span>
            </div>
           
           <div className='navbar-contents'>

        {/* <div className='big'>
        <p >about us</p>
            <p> services</p>
        </div> */}
          
          
              <p className='navbar-text'>
                Sainey &nbsp;
              </p>
           
            <img src={logo}
            className='navbar2-logo'
            onClick={()=>navbarClick()}/>

            <ul className='navbar2-list'
            style={navbarStyle}>
                <li>About</li>
                <Link to='about-company'
                <li>Services</li>
                <li>Portfolio</li>
            </ul>
            
            <p className='navbar-text'>
            &nbsp; Media
            </p>
            </div>

            <div className='desktop right'>
                <span>About us</span>
                <span>Contact</span>
            </div>

            {/* <div className='navbar-desktop'>
                <span>Services</span>
                <span>About us</span>
                <span>Contact</span>
            </div> */}
           
        </div>
    )
}

export default Navbar2