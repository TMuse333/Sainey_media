import React from "react";
import Navbar from "./navbar";
import img from '../media/image-holder.jpg'
import Content from './content'
import '../styles/overview.css'
import Outro from "./outro";
import { outroText } from "../componentData/data";


const Overview = () => {



    return (
        <div className="overview-container">
            <Navbar/>
        <div className="overview-header">
           <Outro content={outroText}/>
        </div>
    </div>
    )
    
}

export default Overview