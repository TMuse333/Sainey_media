import React from "react";
import '../styles/herobanner.css'
import logo from '../media/gold-sainey-logo.png'
import bg from '../media/no-bg-sainey-logo.png'
import logo2 from '../media/SAINEY-MEDIA.png'


const Herobanner = () => {


    return (
        <div className='hero-wrapper'>

{/* <div className="black">
    lol
</div> */}
   
        <div className="hero-container">
            <img src={logo}
            className='logo'/>

            <h2 className="title-text slogan">
                Your slogan here
            </h2>
           
        </div>
        </div>
    )

}

export default Herobanner