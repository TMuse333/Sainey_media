import React from "react";
import '../styles/outro.css'
import Booking from "./booking";


const Outro = ({title, content}) => {


    return (
        <div className="outro-container">

            <div className="outro-text-box">


            <h2 className="title-text">{title}</h2>
            <p className='description-text content2'>
 {content}

</p>

<div className="calendly-container">



<Booking/>
</div>




            </div>
        </div>
    )
} 

export default Outro