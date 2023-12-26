import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import '../styles/about.css'
import img from '../media/image-holder.jpg'
import content



const About = () => {


    return (
        <div>
  <Navbar/>
       
        <div className="about-container">
          
            <h1 className="title-text">
                About CEO
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

           

            <h2 className="title-text bold-700">
                Hustlers dont stop they keep going!
            </h2>

            <Footer/>
        </div>
 
        </div>
    )
}

export default About