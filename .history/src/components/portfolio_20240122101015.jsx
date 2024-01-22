import React,{useState,useEffect} from "react";
import '../styles/portfolio.css'
import Navbar from "./navbar";
import Footer from "./footer";
import ReactPlayer from 'react-player';
import { Carousel } from 'react-bootstrap';
import {portfolioVideos} from '../componentData/data'
import vid from '../media/cheat-curls.mp4'
import big from '../media/testimonial2-big.mp4'
 import video1 from '../media/cheat-curls.mp4'
 import video2 from   '../media/sabotage.mp4'
 import video3 from  '../media/muscles.mp4'
 import video4 from  '../media/ice-cream.mp4'
 import video5 from  '../media/felecia-catcrow.mp4'
 import video6 from  '../media/eat-healthy.mp4'
 import video7 from  '../media/busy-guy.mp4'
 import video8 from  '../media/4plates.mp4'

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


    const videos = [
      {
        id:0,
        src:video1
      },
      {
        id:1,
        src:video2
      },
      {
        id:2,
        src:video3
      },
      {
        id:0,
        src:video4
      },
      {
        id:0,
        src:video5
      },
      {
        id:,
        src:video6
      },
      {
        id:6,
        src:video7
      },
      {
        id:7,
        src:video8
      },
    ]

    const [isMobile, setIsMobile] = useState(true);

    // useEffect to update the state based on screen width
    useEffect(() => {
      const handleResize = () => {
        // Check the screen width and update the state
        setIsMobile(window.innerWidth < 600);
      };
  
      // Initial check on component mount
      handleResize();
  
      // Attach the event listener for window resize
      window.addEventListener('resize', handleResize);
  
      // Cleanup function to remove the event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []); 


  const handleSlide = (index) => {
    const scrollPosition = window.scrollY +300;

    setCurrentIndex(index);
    setIsPlaying(true);
  

      // window.scrollTo(-10, scrollPosition);

    
  };



  


    return (
        <>


            <Navbar
            links={links}
            />
   
        <div className="portfolio-container">
            <h1 className="title-text">
               Our work
            </h1>
            <p className='description-text'>
            Take a look at some examples of different videos we have done for our clients in the past!
            </p>





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
        <Carousel.Item key={video.id}>
          {currentIndex === index && (
            <ReactPlayer
              url={video}
              playing={true}  // You can use state to control playback if needed
              controls={true}
              width="100%"     // Adjust the width as needed
              height={isMobile ? '25rem' : '30rem'}    // Adjust the height as needed
            />
          )}
        </Carousel.Item>
      ))}
    </Carousel>
   
    

        </div>

      
     
   

    
             <Footer 
           links={links}
           gradientBackground={true}
           style={{
            marginTop:'5rem'
           }}
           />
        </>
      

        
    )
}


export default Portfolio