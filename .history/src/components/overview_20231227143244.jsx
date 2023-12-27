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
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
         </p>
         
        </div>
        <Content title='about'
        image={img}
        desc={overViewText}
        />
          <Content title='about again'
        image={img}
        desc={overViewText}
        rev={true}
        />

        <h1 className="title-text">About 3</h1>
        <p className="description-text"></p>


    </div>
    )
    
}

export default Overview