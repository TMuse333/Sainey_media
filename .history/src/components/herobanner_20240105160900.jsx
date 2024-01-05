import React from "react";
import '../styles/herobanner.css'
import logo from '../media/gold-sainey-logo.png'
import bg from '../media/no-bg-sainey-logo.png'



const Herobanner = () => {


    return (
        <div className="hero-container">
            <img src={bg}
            className='logo'/>
            <h2 className="description-text">
                Your slogan here
            </p>
           
        </div>
    )

}

export default Herobanner