import React, { useState,useRef,useEffect } from 'react';
import { Carousel } from 'react-bootstrap';

import dunk from '../media/best_dunk.mp4';

import oneLeg from '../media/one-leg-dunk.mp4'
import vert from '../media/standing-2-hander.mp4'
import '../styles/testimonials.css';
import 'bootstrap/dist/css/bootstrap.css';


import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Testimonials = () => {
  const videos = [
    {
      id: 1,
      title: 'The Quantum Card Game',
      src: oneLeg,
      credit: 'TMuse',
    },
    {
      id: 2,
      title: 'Dunking',
      src: dunk,
      credit: 'TMuse',
    },
    {
      id:3,
      title:'offvert',
      src:vert,
      credit: 'TMuse',
    }
  ];

  const descriptions = [
  
  
    {
      name:'Escalade',
      description:`"He is pure, give him your money"`
    },
    {
      name:'Lujain James',
      description:`"I make more back than i spend"`
    },
    {
      name:'Aboubacar',
      description:`"Wow he is such a real one"`

    },

   
    
  ]

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const handleSlide = (index) => {
    const scrollPosition = window.scrollY +300;

    setCurrentIndex(index);
    setIsPlaying(true);
  
   
    const style = {
      width:'20vw'
    }

      // window.scrollTo(-10, scrollPosition);

    
  };

  const [isAnimated, setIsAnimated] = useState(false)

  const contentRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const contentElement = contentRef.current;

      // Check if the element is in the viewport
      const elementTop = contentElement.getBoundingClientRect().top;
      const elementBottom = contentElement.getBoundingClientRect().bottom;

      // You can adjust the offset based on your specific needs
      const offset = 350;

      if (elementTop < window.innerHeight - offset && elementBottom > offset) {
        // console.log(`Element with ID ${} is in the viewport!`);
        setIsAnimated(true)
        console.log('in range!!')
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, ['testimonial']);


  const animations = {
    hidden:{
      width:'0%',
      opacity:0

    },
    visible:{
      width:'100%',
      x:0,
      opacity:1
    }
  }



  return (
    <div className='testimonial-container'
    id='testimonial'
    ref={contentRef}>

      <div className='testimonial-text-box'>

  <div className='image-box'>

  <motion.div className='testimonial-intro'>
    <motion.h1
     className='testimonial-name'
     initial={animations.hidden}
     animate={isAnimated ? animations.visible : animations.hidden}
     >
      Testimonials
    </motion.h1>
    <p className='description-text'>
    Don't just take our word for it. Listen to what our valued clients have to say about their experience with Sainey Media. Their stories are a testament to the impact we've made in helping businesses thrive in the digital world.

    </p>
    <Link to='portfolio'>

    
    <button className='light-button '>
      view whole portfolio
    </button> 
    </Link>
  
  </motion.div>






      <Carousel interval={null} activeIndex={currentIndex}
     
        onSelect={(index, e) => {
          e.preventDefault(); // Prevent the default action
          handleSlide(index);
        }}
      
      wrap={true}>
        {videos.map((video, index) => (
          <Carousel.Item key={video.id}>
            {currentIndex === index && ( // Render the ReactPlayer only for the current index
              <video className='testimonial-video'
              //  width='300px' 
              //  height='500px'
                controls>
                <source src={video.src} type="video/mp4"/>
              </video>
            )}
          </Carousel.Item>
        ))}
      </Carousel>
      </div>

  

    

      {/* <div className='testimonial-box'>
        <AnimatePresence>
          <motion.h2 className='testimonial-name'
          key={currentIndex}
          initial={{opacity:0}}
          animate={{ opacity: 1, 
            transition: { delay: 0.7 } 
          }}
          exit={{transition:'all 0.3s ease-in',
        opacity:0}}
          >
            {descriptions[currentIndex].name}
          </motion.h2>

        </AnimatePresence>
        <AnimatePresence>
          <motion.p className='description-text'
          key={currentIndex}
          initial={{opacity:0}}
          animate={{ opacity: 1, 
            transition: { delay: 1 } 
          }}
          exit={{transition:'all 0.3s ease-in',
        opacity:0}}
          >
          {descriptions[currentIndex].description}
          </motion.p>

        </AnimatePresence>
      </div> */}

      </div>
      
    </div>
  );
};

export default Testimonials;
