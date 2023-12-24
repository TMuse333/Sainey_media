import React, {useState} from "react";
import { InlineWidget } from "react-calendly";
import { PopupWidget } from "react-calendly"
import '../styles/booking.css'


const Booking = () => {
//need to get event types link

const [isHovered, setIsHovered] = useState(false)

const handleMouseEnter = () =>{
    setIsHovered(true)
    console.log('hovernation')
}

const handleMouseLeave = () => {
    setIsHovered(false)
}
 {/* <InlineWidget url='https://calendly.com/thomaslmusial'/> */}
    return (
       

            <PopupWidget
            url='https://calendly.com/thomaslmusial'
            rootElement={document.getElementById("root")}
            text='Click here to schedule'
            color={isHovered ? '#00bfff' : 'transparent'}
            textColor={isHovered ? 'white' : '#00bfff'}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
      

            />



           
 
    )
}

export default Booking