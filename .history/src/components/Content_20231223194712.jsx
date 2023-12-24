import React from "react";
import '../styles/content.css'
import q3 from '../media/q3-visuals-logo-2.svg'
const Content = ({img,title,desc}) => {

    const style ={
        // height:'100%',
        // width:'100%',
        // maxHeight:'400px'
    }

    return (
        <div className="content-container">

        <h1 className="title-text">
          {title}
        </h1>

        <div className="image-text-box">



<img
  src={q3}
  loading="lazy"
className='content-image'
/>



<p className='description-text'>
{desc}
        </p>

        </div>

       

    </div>
    )

  
}


export default Content