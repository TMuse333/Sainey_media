import react, {useState} from 'react'
import logo from '../media/no-bg-sainey-logo.png'
import '../styles/navbar2.css'

const Navbar2 = () => {

    const [isListVisible, setIsListVisible] = useState(false)

    const navbarClick = () => {
        setIsListVisible(!is)
    }

    return (
        <div className='navbar2-container'>
           
           <div className='navbar-contents'>

          
              <p className='navbar-text'>
                Sainey &nbsp;
              </p>
           
            <img src={logo}
            className='navbar2-logo'/>
            
            <p className='navbar-text'>
            &nbsp; Media
            </p>
            </div>
           
        </div>
    )
}

export default Navbar2