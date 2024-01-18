import React from "react";
import '../styles/herobanner.css'
import logo from '../media/gold-sainey-logo.png'
import bg from '../media/no-bg-sainey-logo.png'
import { Link } from "react-router-dom";


const Herobanner = () => {


    return (
        <div className="hero-container">
            <img src={bg}
            className='logo'/>
            <h2 className="title-text">
                Your slogan here
            </h2>
            <Link to='about-ceo'>
                
            </Link>

           
        </div>
    )

}

export default Herobanner