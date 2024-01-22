import React,{useState} from "react";
import '../styles/portfolio.css'
import Navbar from "./navbar";
import Footer from "./footer";
import ReactPlayer from 'react-player';
import { Carousel } from 'react-bootstrap';
import {portfolioVideos} from '../componentData/data'
import vid from '../media/cheat-curls.mp4'
import big from '../media/testimonial2-big.mp4'
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

            <ReactPlayer
          url={big}
          playing={isPlaying}
          controls={true}
          height="300px"
          onPause={() => setIsPlaying(false)}
        />




            {/* <Carousel 
            style={{
              height:'45rem',
              marginBottom:'6rem'
            }}
 
       interval={null} activeIndex={currentIndex}
     
        onSelect={(index, e) => {
          e.preventDefault(); // Prevent the default action
          handleSlide(index);
        }}
      
      wrap={true}>
        {portfolioVideos.map((video, index) => (
          <Carousel.Item key={index}>
            {currentIndex === index && ( // Render the ReactPlayer only for the current index
              <video className='testimonial-video'
              loading='lazy'
             
                controls>
                <source src={video} type="video/mp4"/>
              </video>
            )}
          </Carousel.Item>
        ))}
      </Carousel> */}
   
    

        </div>

      
     
   

    
             <Footer 
           links={links}
           gradientBackground={true}
           />
        </>
      

        
    )
}


export default Portfolio
