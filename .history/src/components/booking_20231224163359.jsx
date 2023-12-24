import React from "react";
import { InlineWidget } from "react-calendly";
import '../styles/booking.css'


const Booking = () => {
//need to get event types link

    return (
        <div className="booking-container">
                <p>slat</p>
            <InlineWidget url='https://calendly.com/your_scheduling_page'/>
        </div>
    )
}

export default Booking