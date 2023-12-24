import React from "react";
import { InlineWidget } from "react-calendly";


const Booking = () => {
    return (
        <div className="booking-container">
            <InlineWidget url='https://calendly.com/your_scheduling_page'/>
        </div>
    )
}

export 