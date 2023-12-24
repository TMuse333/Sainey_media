import React from "react";
import '../styles/about.css'
const Content = (img,title,desc) => {

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

        </p>

        </div>

       

    </div>
    )

  
}


export default Content