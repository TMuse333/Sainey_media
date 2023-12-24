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

<div className="description-box">

<h2 className="title-text">
    title
</h2>

<p className='description-text'>
{/* {desc} */}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vulputate porttitor egestas. <br/><br/>
Cras vel massa risus. Suspendisse tincidunt pharetra diam nec placerat. Pellentesque pretium congue mauris,
<br/><br/>
 tincidunt pellentesque velit condimentum quis. Donec dictum dictum nulla vitae rhoncus.
        </p>
        </div>

        <button

        </div>

       

    </div>
    )

  
}


export default Content