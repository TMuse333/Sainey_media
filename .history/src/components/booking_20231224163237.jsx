import React from "react";
import { InlineWidget } from "react-calendly";


const Booking = () => {
//need to get event types link

    return (
        <div className="booking-container">
                
            <InlineWidget url='https://calendly.com/your_scheduling_page'/>
        </div>
    )
}

export default Booking