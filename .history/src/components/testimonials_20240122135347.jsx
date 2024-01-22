import React, { useState, useRef, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import ReactPlayer from 'react-player';

import '../styles/testimonials.css';
import 'bootstrap/dist/css/bootstrap.css';

import video1 from  '../media/Sainey-Media-1.mp4';
import video2 from '../media/testimonial2.mp4';
import video3 from '../media/hoop-testimonial.mp4'
import video4 from '../media/patty-testimonial.mp4'

const Testimonials = () => {
  const videos = [
    {
      id: 0,
      src: video3
    },
    {
      id: 1,
      src: video4
    },
    {
      id: 2,
      src: video2
    },
    {
      id: 3,
      src: video1
    }
  ];

  const [isMobile, setIsMobile] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  const [isMuted, setIsMuted] = useState(true)

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
        setTimeout(() => {
          setIsMuted(false);
        }, 200);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isAnimated]);

  useEffect(() => {
    if (isAnimated) {
      // Delay the video play by 2000 milliseconds (2 seconds)
      const delay = 5000;
      const video = document.getElementById(`video-${currentIndex}`);
  
      if (video) {
        const playVideo = () => video.play();
        const timeoutId = setTimeout(playVideo, delay);
  
        // Cleanup function to clear the timeout if the component unmounts
        return () => clearTimeout(timeoutId);
      }
    }
  }, [isAnimated, currentIndex]);

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




  useEffect(() => {
    if (isAnimated) {
      // Trigger video play when isAnimated is true
      const video = document.getElementById(`video-${currentIndex}`);
      if (video) {
        video.play();
      }
    }
  }, [isAnimated, currentIndex]);

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
        // style={carouselStyle}
        interval={null}
        pause={false}
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
              <video   id={`video-${currentIndex}`}
               loading='lazy' controls 
               autoplay={isAnimated} muted={isMuted} 
               
               className='testimonial-video'>
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