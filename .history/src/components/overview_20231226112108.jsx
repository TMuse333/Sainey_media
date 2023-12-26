import React from "react";
import Navbar from "./navbar";
import img from '../media/image-holder.jpg'
import Content from './content'
import '../'


const Overview = () => {



    return (
        <div className="overview-container">
            <Navbar/>
        <div className="overview-header">
            {/* <img src=''/> */}
            <h1 className="title-text">
                Sainey Media
            </h1>
            <p className='description-text'>
                Description-text
                </p>
        </div>
    </div>
    )
    
}

export default Overview