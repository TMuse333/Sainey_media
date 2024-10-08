import React from "react";
import Navbar from "./navbar";
import img from '../media/image-holder.jpg'
import Content from './content'
import '../styles/overview.css'
import Outro from "./outro";
import { overViewText } from "../componentData/data";
import Footer from "./footer";
import { about1,about2 } from "../componentData/data";


const Overview = () => {

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
            dest:'/portfolio',
            name:'Our work'
        },
        
    ]

    return (
        <div className="overview-container">
            <Navbar
            links={links}/>
        <div className="overview-header">
         <h1 className="title-text">
         Empowering Businesses Through Media Expertise
         </h1>
         <p className="description-text">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
         </p>
         
        </div>
        <Content title='about'
        image={img}
        description={about1}
        />
          <Content title='about again'
        image={img}
        description={oveabout2rViewText}
        rev={false}
        />


        <div className="overview-section-3">


        <h1 className="title-text">About 3</h1>
        <img src={img} className='overview-image'/>


        <p className="description-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
        </p>
        </div>

<Footer links={links}/>
    </div>
    )
    
}

export default Overview