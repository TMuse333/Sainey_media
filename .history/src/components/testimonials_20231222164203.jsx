import React from 'react';
import { Carousel } from 'react-bootstrap';
import card from '../media/quantum-video.mp4'
import dunk from '../media/best_dunk.mp4'
import '../styles/testimonials.css'
import "bootstrap/dist/css/bootstrap.css"

const Testimonials = () => {

  const videos = [
    {
      id:1,
      title:'video 1',
      src: card,
      credit
    }
  ]
  
  return (
    <div className='testimonial-container'>


   <h1>
    Hustlers dont stop they keep going
   </h1>
   </div>
  );
};

export default Testimonials;
