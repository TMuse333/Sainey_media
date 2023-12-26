import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import '../styles/about.css'
import img from '../media/image-holder.jpg'



const About = () => {


    return (
        <div>
  <Navbar/>
       
        <div className="about-container">
          
            <h1 className="title-text">
                About Q3 Visuals
            </h1>

            <div>

           
            <p className="description-text about-text">
            Everyone is inherently predisposed to excel in a specific form of intelligence, where their innate strengths shine, be it in the realm of words, social skills, or other distinct abilities.
            The people at Q3 Visuals not surprisingly 
            posses higher than average visual intelligence.
           
            </p>

            <p className="description-text about-text">
            Our mission is to develop our visual capabilities
            to our highest level and use this skill to help other people
            like you elevate your digital presence. We are
            committed to achieving our max potential as creatives and creating
            the best products we can.
            </p>

            </div>

            <h2 className="title-text">
                About the Creator
            </h2>

            <div className="image-text-box ">
            <img src={img}
                className='about-img'
           

/>

<p className="description-text">
                Thomas Musial is a man who believes
                in hard work and discipline everyday
                to achieve his full potential and
                to live a life worth living. He enjoys working on websites,
                drawing, getting strong in the gym,
                meditating and doing whatever else it takes to be a sovereign, free thinking and 
                healthy individual. 
            </p>
            </div>

           <div className="image-text-box collab-box">

                <div className="collab-desc">

               
         
                <p className="description-text">
                    We believe in collaborating with others and creating
                    strong connections with like minded people like yourself
                    to collaborate and create awesome products to help the world
                    be a better place to live in.
                </p>
                <button className="button">
                        Lets get it
                </button>

                </div>
           

            <img src={tom} 
            className='suit-img'
            />

</div>

            <h2 className="title-text bold-700">
                Hustlers dont stop they keep going!
            </h2>

            <Footer/>
        </div>
 
        </div>
    )
}

export default About