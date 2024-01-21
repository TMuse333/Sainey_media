import React, { useState,useEffect } from 'react';

import { Link } from 'react-router-dom';
import '../styles/navbar.css'
import logo from '../media/gold-sainey-logo.png'
import nobg from '../media/no-bg-sainey-logo.png'
import whiteLogo from '../media/White_logo_-_no_background.png'



const Navbar = ({links}) => {
  const [subMenuVisible, setSubMenuVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true)
  const [hovered, setHovered] = useState(false)
  const [navHovered, setNavHovered] = useState(null)

  const handleMouseEnter = () => {
    setHovered(true)
  }

  const handleMouseLeave = () => {
    setHovered(false)
  }

  const handleNavEnter = (index) => {
    setNavHovered(index);
  };

  const handleNavLeave = () => {
    setNavHovered(null);
  };

  const toggleSubMenu = () => {
    console.log("clicked")
    setSubMenuVisible(!subMenuVisible);
  };

  const scrollToSection = (sectionId) => {

    const element = document.getElementById(sectionId);
    if (element) {
    
      element.scrollIntoView({
        behavior: 'smooth', // Smooth scrolling
        block: 'start',    // Scroll to the top of the element
      });
    }
  }

  useEffect(() => {
    // Function to update sub-menu visibility when the screen width changes
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsMobile(!(screenWidth >= 865)); // Set subMenuVisible to true if screen width is at least 415 pixels
    };

    // Add a resize event listener to update the sub-menu visibility
    window.addEventListener('resize', handleResize);

    // Initial call to set sub-menu visibility based on current screen width
    handleResize();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const style = {
height: isMobile && !subMenuVisible ? '0px' :  isMobile ? '200px' : 'auto',
overflowY:'hidden',
width: isMobile ?'80px':'auto',
backgroundImage: isMobile ? 'linear-gradient(to right, #6c5933, #be9f5b, #6c5933)' : null,
transition: isMobile? 'height 0.3s ease-in' : null
  
 
  };

  const navStyle = (index) => {

    return{
      backgroundColor: navHovered === index? '#6c5933' : null,
      // padding:'0.5rem',
      borderRadius:'7px',
      color:navHovered === index? '#6c5933' : null,
    }
  }

  const logoStyle = {
    transform: hovered || subMenuVisible? 'scale(1.3)' : 'scale(1)',
    width:'50px',
    transition:'all ease-in 0.3s',
    backgroundColor:'transparent',
    marginTop:'-0.25rem'
  }

  return (

    <div className='navbar-container'>
    <img src={whiteLogo}
          className='big-logo'
          style={logoStyle}
          />
    <div className='navbar-logo'>
   
        <p className='navbar-logo'
      >Sainey Media</p>

      </div>

     
      
    
      <div className='list-container'>
        <button onClick={toggleSubMenu} 
        
        className='mini-logo'
        
        >

         
          
       <img src={whiteLogo} style={logoStyle}
       onMouseEnter={handleMouseEnter}
       onMouseLeave={handleMouseLeave}
      
       />
        </button>
        <ul 
        className='nav-list'
        style={style}
         
         >

          {links.map((link,index) => (
            <Link to={link.dest}
            key={index}
            className='nav-link'>
                <li
                onMouseEnter={()=>handleNavEnter(index)}
                onMouseLeave={()=>handleNavLeave()}
                style={navStyle(index)}>
                  {link.name}
                </li>
            </Link>
          ))}
       
        </ul>
      </div>

      


       </div>
  
  );
};

export default Navbar;