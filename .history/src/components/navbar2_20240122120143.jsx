import react, {useState} from 'react'
import logo from '../media/no-bg-sainey-logo.png'
import '../styles/navbar2.css'
import { Link } from 'react-router-dom'

const Navbar2 = () => {

    const [isListVisible, setIsListVisible] = useState(false)
    const [isHovered, setIsHovered] = useState(false)
    const navbarClick = () => {
        setIsListVisible(!isListVisible)
    }

    const navbarStyle = {
        overflow:'hidden',
        height: isListVisible ? '130px' : '0px',
        // padding: isListVisible ? '0.3rem 2rem 1rem 2rem' : 0,
        transition:'height 0.3s ease-in',
        textDecoration:'none'
    }

    const logoStyle = {
        transform: isHovered ? 'scale(1.33)' : 'scale(1)',
        transition:'all 0.3s ease-in'
    }

    const handleMouseEnter = () => {
        setIsHovered(true)
    }


    const handleMouseLeave = () => {
        setIsHovered(false)
    }


    return (
        <nav className='navbar2-container'>

            <div className='desktop left'>
                <Link to='about-company'
                className='nav-link'>
                <span>Services</span>
                </Link>
               <Link to='portfolio'
               className='nav-link'>
              
                <span>Portfolio</span>
                </Link>
            </div>
           
           <div className='navbar-contents'>

   
          
          
              <p className='navbar-text'>
                Sainey &nbsp;
              </p>
           
            <img src={logo}
            className='navbar2-logo'
            onClick={()=>navbarClick()}
            style={logoStyle}
            onMouseEnter={()=>handleMouseEnter()}
            onMouseLeave={()=>handleMouseLeave()}/>

            <ul className='navbar2-list'
            style={navbarStyle}>
                <Link to='about-ceo'
                id="no-underline">
                <li className='nav-link'
                >About CEO</li>
                </Link>
               
                <Link id="no-underline"
                 to='about-company'>

                
                <li className='nav-link'>Services</li>
                </Link>
                <Link id="no-underline"
                to='portfolio'>

               
                <li className='nav-link'>Portfolio</li>
                </Link>
            </ul>
            
            <p className='navbar-text'
            id='media'>
            &nbsp; Media
            </p>
            </div>

            <div className='desktop right'>
                <Link to='about-ceo'
                className='nav-link'>

   
                <span>Services</span>
                </Link>
                
              
            </div>
           
        </nav>
    )
}

export default Navbar2