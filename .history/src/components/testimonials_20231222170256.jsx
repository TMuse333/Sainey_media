import React from 'react';
import { Carousel } from 'react-bootstrap';
import card from '../media/quantum-video.mp4'
import dunk from '../media/best_dunk.mp4'
import '../styles/testimonials.css'
import "bootstrap/dist/css/bootstrap.css"
import ReactPlayer from 'react-player';

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




   <Carousel interval={null}>
    {videos.map((video)=>{
      return(
        <Carousel.Item key={video.id}>
          <ReactPlayer
          url={video.src}
          width='100%'
          pip={false}
          controls={true}
          playing={true}
          />
       
        </Carousel.Item>
      )
    })}
   </Carousel>
   </div>
  );
};

export default Testimonials;
