import React from "react";
import { InlineWidget } from "react-calendly";
import { PopupWidget } from "react-calendly'
import '../styles/booking.css'


const Booking = () => {
//need to get event types link

    return (
        <div className="booking-container">
            <InlineWidget url='https://calendly.com/thomaslmusial'/>
        </div>
    )
}

export default Booking