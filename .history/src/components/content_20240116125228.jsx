import React from "react";
import '../styles/content.css'
import q3 from '../media/q3-visuals-logo-2.svg'
import sample from '../media/image-holder.jpg'
import { Link } from "react-router-dom";

const Content = ({img, title, description, rev,link,linkText,hasTitle}) => {
    console.log('rev:', rev);

  


    


    return (
        <div className="content-container">
            <div className={`image-text-box ${rev ? 'reverse' : ''}`}>

                {rev ? (
                    // Render description-box before image-box if rev is true
                    <div className="description-box ">
                       {hasTitle && <h2 className="title-text">title</h2>}
                        <p className='description-text'>
                        At Sainey Media, we're not just another marketing agency; we are your dedicated allies in the digital world. With a passion for creativity and a commitment to delivering results, we strive to empower businesses of all sizes with affordable and impactful marketing solutions.

Our mission is simple: to help businesses thrive in today's competitive landscape by providing top-notch marketing services tailored to their unique needs. We believe that every business deserves the opportunity to succeed, and we're here to make that vision a reality.


                          
                            {link != null && 
                     <Link to={link}>
                     <button className="button">{linkText}</button>
                  </Link>
                     }    
                         
                        </p>
                    </div>
                ) : null}

                <div className="image-box">
                    <h1 className="title-text">{title}</h1>
                    <img src={sample} loading="lazy" className='content-image' />
                </div>

                {rev ? null : (
                    // Render description-box after image-box if rev is false
                    <div className="description-box">
                         {hasTitle && <h2 className="title-text">title</h2>}
                        <p className='description-text'>
                         
                        {description}
                     {link != null && 
                     <Link to={link}>
                     <button className="button">{linkText}</button>
                  </Link>
                     }    
                        </p>
                    </div>
                )}
                

            </div>

             

           
        </div>
    );
}

export default Content;
