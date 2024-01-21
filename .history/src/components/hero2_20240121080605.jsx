import React, { useEffect,useState } from "react";
import Typed from "typed.js";
import logo from '../media/no-bg-sainey-logo.png';
import '../styles/hero2.css';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero2 = () => {
 
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
  
    if(scrollPosition > 10){
      setIsScrolled(true)
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

          <motion.p 
            initial={animations2.initial}
            animate={animations2.visible}
         className={`scroll-down-indicator ${isScrolled ? 'opacity-0' : 'scroll'}`}>
          &darr;  scroll down &darr;
          </motion.p>
        </div>
      </div>

 
    </div>
  );
};

export default Hero2;
