import React, {useEffect,useRef,useState} from "react";
import '../styles/content.css'
import q3 from '../media/q3-visuals-logo-2.svg'
import sample from '../media/image-holder.jpg'
import { Link } from "react-router-dom";

const Content = ({img, title, description, rev,link,linkText,hasTitle,id}) => {

    const [isAnimated, setIsAnimated] = useState(false)

    const contentRef = useRef();

    useEffect(() => {
      const handleScroll = () => {
        const contentElement = contentRef.current;
  
        // Check if the element is in the viewport
        const elementTop = contentElement.getBoundingClientRect().top;
        const elementBottom = contentElement.getBoundingClientRect().bottom;
  
        // You can adjust the offset based on your specific needs
        const offset = 100;
  
        if (elementTop < window.innerHeight - offset && elementBottom > offset) {
          console.log(`Element with ID ${id} is in the viewport!`);
          set
        }
      };
  
      // Attach the scroll event listener
      window.addEventListener("scroll", handleScroll);
  
      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [id]);
  
  


    


    return (
        <div className="content-container" ref={contentRef}>
            <div className={`image-text-box ${rev ? 'reverse' : ''}`}>

                {rev ? (
                    // Render description-box before image-box if rev is true
                    <div className="description-box ">
                       {hasTitle && <h2 className="title-text">title</h2>}
                        <p className='description-text'>
                      

                          
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

                            <br/>
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
