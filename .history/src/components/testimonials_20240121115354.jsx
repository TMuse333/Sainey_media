import React, { useState,useRef,useEffect } from 'react';
import { Carousel } from 'react-bootstrap';

// import dunk from '../media/best_dunk.mp4';

// import oneLeg from '../media/one-leg-dunk.mp4'
// import vert from '../media/standing-2-hander.mp4'
import '../styles/testimonials.css';
import 'bootstrap/dist/css/bootstrap.css';


import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Testimonials = () => {
  const videos = [
    {
      id: 1,
      title: 'The Quantum Card Game',
      // src: oneLeg,
      credit: 'TMuse',
    },
    {
      id: 2,
      title: 'Dunking',
      // src: dunk,
      credit: 'TMuse',
    },
    {
      id:3,
      title:'offvert',
      // src:vert,
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

  const [isMobile, setIsMobile] = useState(true);

  // useEffect to update the state based on screen width
  useEffect(() => {
    const handleResize = () => {
      // Check the screen width and update the state
      setIsMobile(window.innerWidth < 600);
    };

    // Initial check on component mount
    handleResize();

    // Attach the event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const handleSlide = (index) => {
    const scrollPosition = window.scrollY +300;

    setCurrentIndex(index);
    setIsPlaying(true);
  

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
      const offset = 300;

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
      opacity:0,
      transition:
      {duration:3}

    },
    visible:{
      width:'100%',
      x:0,
      opacity:1,
      transition:
      {duration:3}
    }
  }

const buttonAnimation = {
  initial:{
    opacity:0
  },
  visible:{
    opacity:1,
    transition:{
      delay:2,
      duration:0.6
    }
  }
}
  
const style = {
  width:'80vw',
  backgroundColor:
  '#100000',
  height: isMobile ?'45%' : '17%',

  position:'absolute',
  left: isAnimated ? '100%': '10%',
  transition:'width 1.7s ease-in, left 2s ease-in',

  
  
}


const carouselStyle = {
  opacity: isAnimated ? 1 : 0,
  transition: 'opacity 0.3s ease-in',
  transitionDelay: isAnimated ? '2.5s' : '0s', // Add a 2.5s delay when isAnimated is true
};



  return (
    <div className='testimonial-container'
    id='testimonial'
    ref={contentRef}>

     

  <motion.div
  // initial={animations.hidden}
  // animate={isAnimated ? animations.visible : animations.hidden}
   className='testimonial-intro'>
    <motion.h1
     className='testimonial-name'
     
     >
      Testimonials
    </motion.h1>
    <div className='blocker'
    style={style}>

    </div>
    <p className='description-text'>
    Don't just take our word for it. Listen to what our valued clients have to say about their experience with Sainey Media. Their stories are a testament to the impact we've made in helping businesses thrive in the digital world.

    </p>
    <Link to='portfolio'>

    
    <motion.button
    initial={buttonAnimation.initial}
    animate={isAnimated ? buttonAnimation.visible : buttonAnimation.initial}
     className='light-button '
    style={{
      marginTop:'1rem'
    }}>
      view whole portfolio
    </motion.button> 
    </Link>
  
  </motion.div>







      <Carousel 
      style={carouselStyle}
       interval={null} activeIndex={currentIndex}
     
        onSelect={(index, e) => {
          e.preventDefault(); // Prevent the default action
          handleSlide(index);
        }}
      
      wrap={true}>
        {videos.map((video, index) => (
          <Carousel.Item key={video.id}>
            {currentIndex === index && ( // Render the ReactPlayer only for the current index
              <video className='testimonial-video '
              //  width='300px' 
              //  height='500px'
                controls>
                <source src={video.src} type="video/mp4"/>
              </video>
            )}
          </Carousel.Item>
        ))}
      </Carousel>


  

    

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
      

  );
};

export default Testimonials;
