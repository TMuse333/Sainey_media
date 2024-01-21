import React, { useState } from "react";
import '../styles/portfolio.css';
import Navbar from "./navbar";
import Footer from "./footer";
import { Carousel } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import { portfolioVideos } from '../componentData/data';

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const links = [
    {
      dest: '/',
      name: 'home'
    },
    {
      dest: '/about-company',
      name: 'About Company'
    },
    {
      dest: '/about-ceo',
      name: 'About CEO'
    },
  ];

  const handleSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <div>
        <Navbar links={links} />
        <div className="portfolio-container">
          <h1 className="title-text">
            Showcase your work here
          </h1>

          <Carousel
            interval={null}
            activeIndex={currentIndex}
            onSelect={(index, e) => {
              e.preventDefault();
              handleSlide(index);
            }}
            wrap={true}
          >
            {portfolioVideos.map((video, index) => (
              <Carousel.Item key={index} active={currentIndex === index}>
                <ReactPlayer
                  url={video}
                  controls
                  width="100%"
                  height="100%"
                  playing={currentIndex === index}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
      <Footer links={links} />
    </>
  );
};

export default Portfolio;
