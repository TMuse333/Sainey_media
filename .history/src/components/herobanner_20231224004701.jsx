import React from "react";
import '../styles/herobanner.css'
import logo from '../media/gold-sainey-logo.png'
import bg from '../media/no-bg-sainey-logo.png'



const Herobanner = () => {


    return (
        <div className="hero-container">
            <img src={logo}
            className='logo'/>
            <div className="hero-logo">
          
                <p >
                Your image here
                </p>

            </div>
           
        </div>
    )

}

export default Herobanner