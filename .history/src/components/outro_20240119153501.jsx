import React from "react";
import '../styles/outro.css'
import Booking from "./booking";
import { motion } from "framer-motion";
import {useRef, useEffect, useState} from 'react'


const Outro = ({title, content, button}) => {

    const [isAnimated, setIsAnimated] = useState(false)

    const outroRef = useRef()

    const animations = {
        initial:{
            scale:0,
            opacity:0,
            y:-10
        },
        animate:{
            scale:1,
            opacity:1,
            y:0,
            transition:{
                duration:
            }
        }
    }

    useEffect(() => {
        const handleScroll = () => {
          
            const elementTop = outroRef.current.getBoundingClientRect().top;
            const elementBottom = outroRef.current.getBoundingClientRect().bottom;
            const offset = 175;
    
            if (elementTop < window.innerHeight - offset && elementBottom > offset) {
              setIsAnimated(true);
              console.log('outro in range')
            }
        };
        // Attach the scroll event listener
        window.addEventListener("scroll", handleScroll);
        // Clean up the event listener on component unmount
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, [outroRef]);

    return (
        <div className="outro-container"
        ref={outroRef}>

           


            <motion.h2 
            className="title-text"
            initial={animations.initial}
            animate={isAnimated ? animations.animate : animations.initial}
            >Book a call with us!</motion.h2>
            <p className='description-text content2-text'>
            Ready to take the next step in growing your business? Schedule a free 15-minute consultation call with our experts today. We're here to listen, offer insights, and help you achieve your goals.
            
           

</p>
<div className="button-container">
    <Booking/>
</div>

{/* <div className="calendly-container">

{button && 
<Booking/>
}


</div> */}




            </div>
      
    )
} 

export default Outro