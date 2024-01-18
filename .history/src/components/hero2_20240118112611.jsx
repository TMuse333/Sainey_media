import React from "react";
import Typing from "react-typing-effect"; // Import the library
import logo from '../media/no-bg-sainey-logo.png';
import '../styles/hero2.css';

const Hero2 = () => {
  return (
    <div className="hero2-container">
      <div className="text-image-box">
        <div className="image-box">
          <img src={logo} alt="Sainey Media Logo" />
        </div>

        <div className="text-box">
          {/* Use the Typing component to create a typing effect */}
          <Typing speed={100} hideCursor={false}>
            <h2 className="hero-text">Welcome to Sainey Media</h2>
          </Typing>

          <p className="hero-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            eveniet culpa quasi laudantium velit ducimus ad, obcaecati nisi
            commodi nostrum.
          </p>
          <button className="light-button">Learn more</button>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
