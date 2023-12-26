import React from "react";
import Navbar from "./navbar";
import img from '../media/image-holder.jpg'
import Content from './content'
import '../styles/overview.css'


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
                Description-textLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </p>
        </div>
    </div>
    )
    
}

export default Overview