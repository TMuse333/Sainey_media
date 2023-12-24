import React from "react";
import '../styles/content.css'
import q3 from '../media/q3-visuals-logo-2.svg'
const Content = ({img,title,desc}) => {

    return (
        <div className="content-container">

        <h1 className="title-text">
          {title}
        </h1>

        <div className="image-text-box">

<div className="image-holder">
    YOUR IMAGE HERE
</div>

<p className='description-text'>
{desc}
        </p>

        </div>

       

    </div>
    )

  
}


export default Content