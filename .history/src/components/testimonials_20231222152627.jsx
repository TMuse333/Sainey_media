import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import card from '../media/quantum-video.mp4'
import dunk from '../media/best_dunk.mp4'

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const style={
    width:'80vw'
  }

  return (
    <div style={style}
    >


    <Slider {...settings}>
      <div style={style}>
        <h3>Testimonial 1</h3>
        <video width="300px" height="auto" controls>
          <source src={card} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div>
        <h3>Testimonial 2</h3>
        <video width='300px' height="auto" controls>
          <source src={dunk} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div>
        <h3>Testimonial 3</h3>
        <video width="100%" height="auto" controls>
          <source src="your-video-url-3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* Add more testimonials as needed */}
    </Slider>
    </div>
  );
};

export default Testimonials;
