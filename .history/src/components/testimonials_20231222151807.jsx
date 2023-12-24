import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import q

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <h3>Testimonial 1</h3>
        <video width="100%" height="auto" controls>
          <source src="your-video-url-1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div>
        <h3>Testimonial 2</h3>
        <video width="100%" height="auto" controls>
          <source src="your-video-url-2.mp4" type="video/mp4" />
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
  );
};

export default Testimonials;
