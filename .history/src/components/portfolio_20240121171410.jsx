import React,{useState} from "react";
import '../styles/portfolio.css'
import Navbar from "./navbar";
import Footer from "./footer";
import { Carousel } from 'react-bootstrap';
import {portfolioVideos} from '../componentData/data'
import { Link } from "react-router-dom";
const Portfolio = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);

    const links = [
        {
        dest:'/',
        name :'Home'  
        },
        {
            dest:'/about-company',
            name:'About Company'
        },
        {
            dest:'/about-ceo',
            name:'About CEO'
        },
        
    ]


  const handleSlide = (index) => {
    const scrollPosition = window.scrollY +300;

    setCurrentIndex(index);
    setIsPlaying(true);
  

      // window.scrollTo(-10, scrollPosition);

    
  };

    const videos = portfolioVideos.map((src, index) => ({
        id: index + 1,
        src,
      }));

  


    return (
        <>


            <Navbar
            links={links}
            />
   
        <div className="portfolio-container">
            <h1 className="title-text">
                Showcase your work here
            </h1>
            <p className='description-text'>
            Take a look at some examples of different videos we have done for our clients in the past!
            </p>




            <Carousel 
            style={{
              height:'45rem'
            }}
 
       interval={null} activeIndex={currentIndex}
     
        onSelect={(index, e) => {
          e.preventDefault(); // Prevent the default action
          handleSlide(index);
        }}
      
      wrap={true}>
        {portfolioVideos.map((video, index) => (
          <Carousel.Item key={video.id}>
            {currentIndex === index && ( // Render the ReactPlayer only for the current index
              <video className='testimonial-video'
              id='portfolio'
             
                controls>
                <source src={video} type="video/mp4"/>
              </video>
            )}
          </Carousel.Item>
        ))}
      </Carousel>
   
    

        </div>

      
     
   

    
             <Footer 
           links={links}
           gradientBackground={true}
           />
        </>
      

        
    )
}


export default Portfolio
