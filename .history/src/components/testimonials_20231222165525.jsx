import React from 'react';
import { Carousel } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import card from '../media/quantum-video.mp4';
import dunk from '../media/best_dunk.mp4';
import '../styles/testimonials.css';
import 'bootstrap/dist/css/bootstrap.css';

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

  return (
    <div className='testimonial-container'>
      <Carousel>
        {videos.map((video) => (
          <Carousel.Item key={video.id}>
            <div className='player-wrapper'>
              <ReactPlayer
                url={video.src}
                width='100%'
                height='100%'
                pip={true}
                controls={true}
                playing={true}
                className='react-player'
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonials;
