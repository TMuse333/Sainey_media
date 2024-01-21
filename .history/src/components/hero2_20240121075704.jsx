import React, { useEffect } from "react";
import Typed from "typed.js";
import logo from '../media/no-bg-sainey-logo.png';
import '../styles/hero2.css';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero2 = () => {
 
  const animationStyles = {
    animation: 'translateUpDown 1s infinite',
    '@keyframes translateUpDown': {
      '0%, 100%': {
        transform: 'translateY(0)',
      },
      '50%': {
        transform: 'translateY(5px)',
      },
    },
  };

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

  return (
    <div className="hero2-container">
      <div className="text-image-box">
        <div className="image-box">
          <img src={logo} alt="Sainey Media Logo" />
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

          
          <button className="light-button">Learn more</button>
          </Link>

          <p style={animationStyles}
          className="scroll-down-indicator">
          &darr;  scroll down &darr;
          </p>
        </div>
      </div>

 
    </div>
  );
};

export default Hero2;