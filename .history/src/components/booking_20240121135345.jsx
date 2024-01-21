import React, {useState} from "react";
import { InlineWidget } from "react-calendly";
import { PopupWidget } from "react-calendly"
import '../styles/booking.css'


const Booking = ({altColor}) => {
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
            url='https://calendly.com/saineymedia'
            rootElement={document.getElementById("root")}
            text='Click Here To Schedule'
            color={isHovered ? '#9b824b' : 'transparent'}
            textColor={isHovered ? 'white' : !altColor ?  '#c3a157' : '#4e4125'}
      
            />



            {/* <InlineWidget url='https://calendly.com/thomaslmusial'/> */}
        </div>
        </div>
    )
}

export default Booking