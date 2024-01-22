import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import logo from '../media/no-bg-sainey-logo.png';
import '../styles/hero2.css';

const Hero2 = () => {
  const [animationsPlayed, setAnimationsPlayed] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    if (!animationsPlayed) {
      // Play animations when the component mounts
      controls.start({
        opacity: 1,
        transition: {
          delay: 1,
          ease: 'easeIn',
          duration: 0.5,
        },
      });

      // Set the state to indicate that animations have played
      setAnimationsPlayed(true);
    }
  }, [animationsPlayed, controls]);

  const exitAnimations = {
    opacity: 0,
    transition: {
      ease: 'easeOut',
      duration: 0.5,
    },
  };

  return (
    <motion.div
      className="hero2-container"
      exit={exitAnimations}
      initial={{ opacity: 0 }}
      animate={controls}
    >
      <div className="text-image-box">
        <div className="logo-box">
          <img src={logo} alt="Sainey Media Logo" />
        </div>

        <div className="text-box">
          <motion.h2 className="hero-text">
            Sainey Media <br />
          </motion.h2>

          <motion.p className="hero-text one-line">
            Transforming Brands, One Post at a Time.
          </motion.p>

          <Link to='about-company'>
            <motion.button className="light-button">Learn More</motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero2;
