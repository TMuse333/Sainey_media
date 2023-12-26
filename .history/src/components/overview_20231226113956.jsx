import React from "react";
import Navbar from "./navbar";
import img from '../media/image-holder.jpg'
import Content from './content'
import '../styles/overview.css'
import Outro from "./outro";
import { overViewText } from "../componentData/data";


const Overview = () => {



    return (
        <div className="overview-container">
            <Navbar/>
        <div className="overview-header">
         <h1 className="title-text">
            Sainey Media
         </h1>
         <p className="description-text">
        </div>
    </div>
    )
    
}

export default Overview