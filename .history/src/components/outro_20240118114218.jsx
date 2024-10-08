import React from "react";
import '../styles/outro.css'
import Booking from "./booking";


const Outro = ({title, content, button}) => {


    return (
        <div className="outro-container">

            <div className="outro-text-box">


            <h2 className="title-text">Book a call with us!</h2>
            <p className='description-text content2-text'>
            Ready to take the next step in growing your business? Schedule a free 15-minute consultation call with our experts today. We're here to listen, offer insights, and help you achieve your goals.
            
           

</p>
<div className=""

{/* <div className="calendly-container">

{button && 
<Booking/>
}


</div> */}




            </div>
        </div>
    )
} 

export default Outro