import react, {useState} from 'react'
import logo from '../media/no-bg-sainey-logo.png'
import '../styles/navbar2.css'

const Navbar2 = () => {

    const [isListVisible, setIsListVisible] = useState(false)

    const navbarClick = () => {
        setIsListVisible(!isListVisible)
    }

    const navbarStyle = {
        overflow:'hidden',
        height: isListVisible ? '80px' : '0px',
        // padding: isListVisible ? '0.3rem 2rem 1rem 2rem' : 0,
        transition:'height 0.3s ease-in'
    }

    return (
        <div className='navbar2-container'>
           
           <div className='navbar-contents'>

          
              <p className='navbar-text'>
                Sainey &nbsp;
              </p>
           
            <img src={logo}
            className='navbar2-logo'
            onClick={()=>navbarClick()}/>

            <ul className='navbar2-list'
            style={navbarStyle}>
                <li>About</li>
                <li>Services</li>
                <li>Portfolio</li>
            </ul>
            
            <p className='navbar-text'>
            &nbsp; Media
            </p>
            </div>

            <div className='navbar-desktop'>
                <span>Services</span>
                <span>About us</span>
            </div>
           
        </div>
    )
}

export default Navbar2