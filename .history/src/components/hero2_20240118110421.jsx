import React from "react";
import logo from '../media/no-bg-sainey-logo.png'


const Hero2 = () => {
    return (
        <div className="hero2-container">
            <div className="text-image-box">

                <div className="image-box">
                    <img src={logo}
                    style={{
                        height:'50px'
                    }}/>
                </div>

                <div className="text-box">
                    <h2 className="hero-text">
                        Welcome to sainey media
                    </h2>
                    <p className=""
                </div>

            </div>
        </div>
    )
}