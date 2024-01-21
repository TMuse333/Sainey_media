import React, { useEffect, useRef, useState } from "react";
import '../styles/content.css'
import sample from '../media/image-holder.jpg'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Content = ({ title, description, rev, link, linkText, hasTitle, id, hasAnimation, hasTilt }) => {
    const [isAnimated, setIsAnimated] = useState(false);
    const [tiltAngle, setTiltAngle] = useState(30);
    const contentRef = useRef();
    useEffect(() => {
        const handleScroll = () => {
            const contentElement = contentRef.current;
    
            const elementTop = contentElement.getBoundingClientRect().top;
            const elementBottom = contentElement.getBoundingClientRect().bottom;
            const windowHeight = window.innerHeight;
    
            // Calculate the percentage of the element in view
            const visiblePercentTop = Math.max(0, Math.min(100, (windowHeight - elementTop) / windowHeight * 100));
            const visiblePercentBottom = Math.max(0, Math.min(100, (windowHeight - elementBottom) / windowHeight * 100));
    
            // Gradually decrease the tilt angle from 10 to 0 as 40% of the element becomes visible
            const newTiltAngleTop = Math.max(0, 10 - (visiblePercentTop / 60) * 10);
    
            // Gradually decrease the tilt angle from 0 to -30 as the bottom 40% of the element becomes visible
            const newTiltAngleBottom =  (visiblePercentBottom / 60) * 20;
    
            const newTiltAngle = Math.max(newTiltAngleTop, newTiltAngleBottom);
    
            console.log("Visible Percentage Top:", visiblePercentTop);
            console.log("Visible Percentage Bottom:", visiblePercentBottom);
            console.log("Tilt Angle:", newTiltAngle);
            setTiltAngle(newTiltAngle);
    
            const offset = 350;
    
            if (elementTop < windowHeight - offset) {
                setIsAnimated(true);
            }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [id]);
    
    
    
    

    const animations = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 1
            }
        }
    };

    const textAnimations = {
        hidden: {
            opacity: 0,
            x: rev ? -50 : 50
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.4,
                delay: 0.6
            },
            x: 0
        }
    };



  
    

    return (
        <div className="content-container" ref={contentRef} id={id}
        style={hasTilt ? { transform: `perspective(1000px) rotateX(${tiltAngle}deg)` } : null}

    >
            <div className={`image-text-box ${rev ? 'reverse' : 'image-text-box'}`}>
                {rev ? (
                    <div className="description-box">
                        <p className='description-text'>
                            {description}
                        </p>
                    </div>
                ) : null}

                <div className="image-box">
                    <h1 className="title-text">{title}</h1>
                    <motion.img
                        src={sample}
                        loading="lazy"
                        className='content-image'
                        initial={hasAnimation ? animations.hidden : animations.visible}
                        animate={isAnimated && hasAnimation ? animations.visible : null}
                    />
                </div>

                {rev ? null : (
                    <div className="description-box">
                        {hasTitle && <h2 className="title-text">{title}</h2>}
                        <motion.p
                            className='description-text'
                            initial={hasAnimation ? textAnimations.hidden : textAnimations.visible}
                            animate={isAnimated && hasAnimation ? textAnimations.visible : null}
                        >
                            {description}
                            <br/>
                            {link != null && 
                                <Link to={link}>
                                    <button className="button">{linkText}</button>
                                </Link>
                            }
                        </motion.p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Content;
