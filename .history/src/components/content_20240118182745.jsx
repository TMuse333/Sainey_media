import React, {useEffect,useRef,useState} from "react";
import '../styles/content.css'
import q3 from '../media/q3-visuals-logo-2.svg'
import sample from '../media/image-holder.jpg'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Content = ({img, title, description, rev,link,linkText,hasTitle,id}) => {

    const [isAnimated, setIsAnimated] = useState(false)

    const contentRef = useRef();

    const package1Ref = useRef();
  const package2Ref = useRef();
  const [package1Visible, setPackage1Visible] = useState(false);
  const [package2Visible, setPackage2Visible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const checkVisibility = (ref, setState) => {
        const elementTop = ref.current.getBoundingClientRect().top;
        const elementBottom = ref.current.getBoundingClientRect().bottom;
        const offset = 350;

        if (elementTop < window.innerHeight - offset && elementBottom > offset) {
          setState(true);
        }
      };

      checkVisibility(package1Ref, setPackage1Visible);
      checkVisibility(package2Ref, setPackage2Visible);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [package1Ref, package2Ref]);
  
  

const animations = {
    hidden: {
        opacity:0
    },
    visible: {
        opacity:1,
        transition:{
            duration:1
        }
    }
}


const textAnimations = {
    hidden: {
        opacity:0,
        x: rev ? -50 : 50
    },
    visible: {
        opacity:1,
        transition:{
            duration:0.4,
            delay:1
        },
        x:0
    }
}
    


    return (
        <div
         className="content-container"
          ref={contentRef}
>
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
                    <motion.img
                     src={sample}
                      loading="lazy"
                       className='content-image'
                       initial={animations.hidden}
                       animate={isAnimated? animations.visible : animations.hidden}
                       />
                </div>

                {rev ? null : (
                    // Render description-box after image-box if rev is false
                    <div className="description-box">
                         {hasTitle && <h2 className="title-text">title</h2>}
                        <motion.p
                         className='description-text'
                         initial={animations.hidden}
                         animate={isAnimated? textAnimations.visible : textAnimations.hidden}
                         >
                         
                            {description}

                            <br/>
                     {link != null && 
                     <Link to={link}>
                     <button className="button">{linkText}</button>
                  </Link>
                     }    
                        </motion.p>
                    </div>
                )}
                

            </div>

             

           
        </div>
    );
}

export default Content;
