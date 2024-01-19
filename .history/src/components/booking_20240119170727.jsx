import React, {useState} from "react";
import { InlineWidget } from "react-calendly";
import { PopupWidget } from "react-calendly"
import '../styles/booking.css'


const Booking = () => {
//need to get event types link

const [isHovered, setIsHovered] = useState(false)

const handleMouseEnter = () =>{
    setIsHovered(true)
    // console.log('hovernation')
}

const handleMouseLeave = () => {
    setIsHovered(false)
}

    return (

        <div className="booking-wrapper">

     

        <div className="booking-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >

            <PopupWidget
            url='https://calendly.com/thomaslmusial'
            rootElement={document.getElementById("root")}
            text='Click here to schedule'
            color={isHovered ? '#9b824b' : '#a5935c'}
            textColor={isHovered ? 'white' : '#4e4125'}
      
           
           
      

            />



            {/* <InlineWidget url='https://calendly.com/thomaslmusial'/> */}
        </div>
    )
}

export default Booking