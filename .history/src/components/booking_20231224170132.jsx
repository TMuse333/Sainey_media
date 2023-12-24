import React, {useState} from "react";
import { InlineWidget } from "react-calendly";
import { PopupWidget } from "react-calendly"
import '../styles/booking.css'


const Booking = () => {
//need to get event types link

const [isHovered, setIsHovered] = useState(false)

const onMouseEnter = () =>{
    setIsHovered(true)
}

    return (
        <div className="booking-container">

            <PopupWidget
            url='https://calendly.com/thomaslmusial'
            rootElement={document.getElementById("root")}
            text='Click here to schedule'
            color='transparent'
            textColor='#00bfff'
      

            />



            {/* <InlineWidget url='https://calendly.com/thomaslmusial'/> */}
        </div>
    )
}

export default Booking