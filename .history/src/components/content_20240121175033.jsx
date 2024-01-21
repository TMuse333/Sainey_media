import React, { useEffect, useRef, useState } from "react";
import '../styles/content.css';
import { Link } from "react-router-dom";

const Content = ({ description, image,  }) => {
  const contentRef = useRef();

  return (
    <div className="content-container" ref={contentRef}>
      <div className="image-text-box">
        <div className="image-box">
          <img
            src={image}
            loading="lazy"
            className='content-image'
          />
        </div>
        <div className="description-box">
          <p className='description-text'>
            {description}
           
          </p>
        </div>
      </div>
    </div>
  );
}

export default Content;
