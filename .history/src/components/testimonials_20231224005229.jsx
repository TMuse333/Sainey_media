import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
// import card from '../media/quantum-video.mp4';
// import dunk from '../media/best_dunk.mp4';
import card from '/media/short-quantum.mp4'
import '../styles/testimonials.css';
import 'bootstrap/dist/css/bootstrap.css';
import ReactPlayer from 'react-player';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const videos = [
    {
      id: 1,
      title: 'The Quantum Card Game',
      src: card,
      credit: 'TMuse',
    },
    {
      id: 2,
      title: 'Dunking',
      src: dunk,
      credit: 'TMuse',
    },
  ];

  const descriptions = [
    {
      name:'Aboubacar',
      description:'wow he is such a real one'

    },
    {
      name:'Lujain',
      description:'i make more back than i spend'
    },
    {
      name:'quantum realm explorer',
      description:'he uses the power of the quantum realm for pure purposes'
    }
   
    
  ]

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const handleSlide = (index) => {
    const scrollPosition = window.scrollY +300;

    setCurrentIndex(index);
    setIsPlaying(true);
  
   

      // window.scrollTo(-10, scrollPosition);

    
  };

  return (
    <div className='testimonial-container'>

  {/* <div className='testimonial-intro'>
    <h1 className='title-text'>
      Testimonials
    </h1>
    <p className='description-text'>
      Everyone loves working with me because I am so great and you should too
    </p>
  </div> */}


      <Carousel interval={null} activeIndex={currentIndex}
        onSelect={(index, e) => {
          e.preventDefault(); // Prevent the default action
          handleSlide(index);
        }}
      
      wrap={true}>
        {videos.map((video, index) => (
          <Carousel.Item key={video.id}>
            {currentIndex === index && ( // Render the ReactPlayer only for the current index
              <ReactPlayer
                url={video.src}
                width='100%'
                pip={false}
                controls={true}
                playing={isPlaying}
                onEnded={() => setIsPlaying(false)} // Pause when the video ends
              />
            )}
          </Carousel.Item>
        ))}
      </Carousel>

      {/* <div className='testimonial-box'>
        <AnimatePresence>
          <motion.h2 className='title-text'
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