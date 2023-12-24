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
      title:'The Quantum Card Game',
      src: card,
      credit:'TMuse'
    },
    {
      id:2,
      title:'Dunking',
      src: dunk,
      credit:'TMuse'
    },
  ]
  
  return (
    <div className='testimonial-container'>


   <h1>
    Hustlers dont stop they keep going
   </h1>

   <Carousel>
    {videos.map((video))}
   </Carousel>
   </div>
  );
};

export default Testimonials;
