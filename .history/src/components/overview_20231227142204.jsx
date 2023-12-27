import React from "react";
import Navbar from "./navbar";
import img from '../media/image-holder.jpg'
import Content from './content'
import '../styles/overview.css'
import Outro from "./outro";
import { overViewText } from "../componentData/data";


const Overview = () => {

const 

    return (
        <div className="overview-container">
            <Navbar/>
        <div className="overview-header">
         <h1 className="title-text">
            Sainey Media
         </h1>
         <p className="description-text">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
         </p>
         
        </div>
        <Content title='about'
        image={img}
        desc={overViewText}/>

    </div>
    )
    
}

export default Overview