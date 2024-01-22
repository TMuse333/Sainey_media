import React, { useState, useRef, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import ReactPlayer from 'react-player';

import '../styles/testimonials.css';
import 'bootstrap/dist/css/bootstrap.css';

import video1 from  '../media/Sainey-Media-1.mp4';
import video2 from '../media/testimonial2.mp4';
import video3 from '../media/hoop-testimonial.mp4',
import video4 from 'src/media/patty-testimonial.mp4'

const Testimonials = () => {
  const videos = [
    {
      id: 0,
      src: video1
    },
    {
      id: 1,
      src: video2
    }
  ];

  const [isMobile, setIsMobile] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  const contentRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const contentElement = contentRef.current;
      const elementTop = contentElement.getBoundingClientRect().top;
      const elementBottom = contentElement.getBoundingClientRect().bottom;
      const offset = 300;

      if (elementTop < window.innerHeight - offset && elementBottom > offset && !isAnimated) {
        setIsAnimated(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isAnimated]);

  useEffect(() => {
    // Check if animations have already played
    const animationsPlayed = localStorage.getItem('animationsPlayed');

    if (!animationsPlayed) {
      setIsAnimated(true);
      // Mark animations as played in local storage
      localStorage.setItem('animationsPlayed', 'true');
    }
  }, []);

  const handleSlide = (index) => {
    setCurrentIndex(index);
    setIsPlaying(true);
  };

  const style = {
    width: '80vw',
    backgroundColor: '#100000',
    height: isMobile ? '45%' : '17%',
    position: 'absolute',
    left: isAnimated ? '100%' : '10%',
    transition: 'width 1.7s ease-in, left 2s ease-in'
  };

  const carouselStyle = {
    opacity: isAnimated ? 1 : 0,
    transition: 'opacity 0.3s ease-in',
    transitionDelay: isAnimated ? '2.5s' : '0s',
  };

  return (
    <div className='testimonial-container' id='testimonial' ref={contentRef}>
      <div className='testimonial-intro'>
        <h1 className='testimonial-name'>
          Testimonials
        </h1>
        <div className='blocker' style={style}></div>
        <p className='description-text'>
          Don't just take our word for it. Listen to what our valued clients have to say about their experience with Sainey Media. Their stories are a testament to the impact we've made in helping businesses thrive in the digital world.
        </p>
      </div>

      <Carousel
        style={carouselStyle}
        interval={null}
        activeIndex={currentIndex}
        onSelect={(index, e) => {
          e.preventDefault();
          handleSlide(index);
        }}
        wrap={true}
      >
        {videos.map((video, index) => (
          <Carousel.Item key={video.id}>
            {currentIndex === index && (
              <video loading='lazy' controls className='testimonial-video'>
                <source src={video.src} />
              </video>
            )}
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonials;
