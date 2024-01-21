import React, { useEffect, useRef, useState } from "react";
import '../styles/content.css';
import { Link } from "react-router-dom";

const Content = ({ description, image, link, linkText }) => {
  const [isAnimated, setIsAnimated] = useState(false);
  const contentRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const contentElement = contentRef.current;
      const elementTop = contentElement.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const offset = 350;

      if (elementTop < windowHeight - offset) {
        setIsAnimated(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
            <br />
            {link != null && (
              <Link to={link}>
                <button className="button">{linkText}</button>
              </Link>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Content;
