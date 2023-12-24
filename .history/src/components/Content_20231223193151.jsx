import React from "react";
import '../styles/content.css'
import q3 from '../media/q3-visuals-logo-2.svg'
const Content = ({img,title,desc}) => {

    const style ={
        height:'100%',
        width:'100%',
        maxHeight:'400px'
    }

    return (
        <div className="content-container">

        <h1 className="title-text">
          {title}
        </h1>

        <div className="image-text-box">

{/* <div className="image-holder">
    YOUR IMAGE HERE
</div> */}

<img
  src={q3}
  loading="lazy"
  width="542"
  sizes="(max-width: 479px) 91vw, (max-width: 767px) 95vw, (max-width: 991px) 92vw, (max-width: 1439px) 47vw, 860px"
 
  alt=""
  style={style}
className=''
/>


<p className='description-text'>
{desc}
        </p>

        </div>

       

    </div>
    )

  
}


export default Content