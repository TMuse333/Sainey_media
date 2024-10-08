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

    export const portfolioVideos = [
 
      'src/media/cheat-curls.mp4',
      'src/media/sabotage.mp4',
      'src/media/muscles.mp4',
      'src/media/ice-cream.mp4',
      'src/media/felecia-catcrow.mp4',
      'src/media/eat-healthy.mp4',
      'src/media/busy-guy.mp4',
      'src/media/4plates.mp4',
  
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




            <Carousel 
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