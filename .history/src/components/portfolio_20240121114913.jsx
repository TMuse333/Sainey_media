import React,{useState} from "react";
import '../styles/portfolio.css'
import Navbar from "./navbar";
import Footer from "./footer";
import { Carousel } from 'react-bootstrap';
import {portfolioVideos} from '../componentData/data'
const Portfolio = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);

    const links = [
        {
        dest:'/',
        name :'home'  
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
        <div>

            <Navbar
            links={links}
            />
   
        <div className="portfolio-container">
            <h1 className="title-text">
                Showcase your work here
            </h1>
            <p className='description-text'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, nemo! Reiciendis ipsum, esse magnam, accusantium veniam totam eius vitae nostrum doloribus quisquam nulla non ipsam quo dolorem voluptas. Nostrum, quis!
            </p>

            {/* <div className="video-text-box">

 
<div className="video-box"> */}


            <Carousel 
 
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
             
                controls>
                <source src={video} type="video/mp4"/>
              </video>
            )}
          </Carousel.Item>
        ))}
      </Carousel>
      {/* </div>

      <div className="text-box">
        <p>le video</p>
      </div>

      </div> */}
   
        </div>

        <p className="description-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi iste amet vero eligendi id ipsum vitae rem dolorum dolore veritatis.
        </p>
     
   
        </div>
    
             {/* <Footer 
           links={links}
           /> */}
        </>
      

        
    )
}


export default Portfolio
