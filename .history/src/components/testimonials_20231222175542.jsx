import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import card from '../media/quantum-video.mp4';
import dunk from '../media/best_dunk.mp4';
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
    setCurrentIndex(index);
    setIsPlaying(true); // Start playing when sliding to a new item
  };

  return (
    <div className='testimonial-container'>

    <div classname='testimonial-intro'></div>
    

      <Carousel interval={null} activeIndex={currentIndex} onSelect={handleSlide}>
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

      <div className='testimonial-box'>
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
      </div>
      
    </div>
  );
};

export default Testimonials;
