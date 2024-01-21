import React, { useEffect } from "react";
import Typed from "typed.js";
import logo from '../media/no-bg-sainey-logo.png';
import '../styles/hero2.css';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero2 = () => {
  // useEffect(() => {
  //   const typedOptions = {
  //     strings: ["Welcome to Sainey Media"],
  //     typeSpeed: 40,
  //     backSpeed: 30,
  //     showCursor: true,
  //     cursorChar: '|',
  //     loop: false,
  //     onComplete: function (self) {
  //       // Callback when typing is complete
  //       console.log("Typing completed!");
  //     }
  //   };

  //   const typed = new Typed('.hero-text', typedOptions);

  //   // Clean up when the component is unmounted
  //   return () => {
  //     typed.destroy();
  //   };
  // }, []);

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

          <p className="scroll-down-indicator">
            scroll down &darr
          </p>
        </div>
      </div>

 
    </div>
  );
};

export default Hero2;
