import React, { useEffect,useState } from "react";

import logo from '../media/no-bg-sainey-logo.png';
import '../styles/hero2.css';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero2 = () => {






  const animations = {
    initial:{
      opacity:0
    },
    visible:{
      opacity:1,
      transition:
      {
        delay:1,
        ease:'easeIn',
        duration:0.5

      }
    }
  }

  const animations2 = {
    initial:{
      opacity:0
    },
    visible:{
      opacity:1,
      transition:
      {
        delay:1.2,
        ease:'easeIn',
        duration:0.8
      }
    }
  }



  return (
    <div className="hero2-container">
      <div className="text-image-box">
        <div className="logo-box">
          <img src={logo} 
    
          alt="Sainey Media Logo" />
        </div>

        <div className="text-box">
         
          <motion.h2 
          initial={animations.initial}
          animate={animations.visible}
          className="hero-text">
            Sainey Media 
            <br/>
           
          </motion.h2>

          <motion.p
          initial={animations.initial}
          animate={animations.visible}
           className="hero-text one-line">
           Transforming Brands, One Post at a Time.
          </motion.p>
          <Link to='about-ceo'>

          
          <motion.button
           initial={animations2.initial}
           animate={animations2.visible}
           className="light-button">Learn More</motion.button>
          </Link>
        </div>
      </div>

 
    </div>
  );
};

export default Hero2;
