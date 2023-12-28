import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import '../styles/about.css'
import img from '../media/image-holder.jpg'
import Content from "./content";



const About = () => {

    const links = [
        {
        dest:'/',
        name :'home'  
        },
        {
            dest:'about-company',
            name:'About Company'
        },
        {
            dest:'portfolio',
            name:'Our work'
        },
        
    ]

    return (
        <div>
  <Navbar
  links={links}/>
       
        <div className="about-container">
          
           
 
        </div>
    )
}

export default About