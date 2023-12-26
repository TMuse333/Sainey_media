import React from "react";
import '../styles/outro.css'
import Booking from "./booking";


const Outro = ({title, content, button}) => {


    return (
        <div className="outro-container">

            <div className="outro-text-box">


            <h2 className="title-text">{title}</h2>
            <p className='description-text content2-text'>
 {content}

</p>



{button && {
<Booking/>
}}


</div>




            </div>
        </div>
    )
} 

export default Outro