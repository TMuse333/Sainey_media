import React,{useState} from "react";
import '../styles/portfolio.css'
import Navbar from "./navbar";
import Footer from "./footer";
import { Carousel } from 'react-bootstrap';

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

            <Carousel 
    
       interval={null} activeIndex={currentIndex}
     
        onSelect={(index, e) => {
          e.preventDefault(); // Prevent the default action
          handleSlide(index);
        }}
      
      wrap={true}>
        {videos.map((video, index) => (
          <Carousel.Item key={video.id}>
            {currentIndex === index && ( // Render the ReactPlayer only for the current index
              <video className='testimonial-video'
              //  width='300px' 
              //  height='500px'
                controls>
                <source src={video.src} type="video/mp4"/>
              </video>
            )}
          </Carousel.Item>
        ))}
      </Carousel>
   
        </div>
     
   
        </div>
    
             <Footer 
           links={links}
           />
        </>
      

        
    )
}


export default Portfolio
