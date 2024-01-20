import React from "react";
import '../styles/outro.css'
import Booking from "./booking";
import { motion } from "framer-motion";
import {useRef, useEffect, useState} from 'react'


const Outro = ({title, content, button}) => {

    const [isAnimated, setIsAnimated] = useState(false)

    const outroRef = useRef()

    useEffect(() => {
        const handleScroll = () => {
          const checkVisibility = (ref, setState) => {
            const elementTop = ref.current.getBoundingClientRect().top;
            const elementBottom = ref.current.getBoundingClientRect().bottom;
            const offset = 175;
    
            if (elementTop < window.innerHeight - offset && elementBottom > offset) {
              setState(true);
            }
          };
    
          checkVisibility(package1Ref, setPackage1Visible);
          checkVisibility(package2Ref, setPackage2Visible);
        };
    
        // Attach the scroll event listener
        window.addEventListener("scroll", handleScroll);
    
        // Clean up the event listener on component unmount
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, [package1Ref, package2Ref]);

    return (
        <div className="outro-container">

           


            <h2 className="title-text">Book a call with us!</h2>
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