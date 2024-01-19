import react, {useEffect}from 'react'
import '../styles/packages.css'
import Footer from './footer'

import Navbar from './navbar'
import Booking from './booking'
import { motion } from 'framer-motion'
import { useState } from 'react'
const Packages = () => {

    const links = [
        {
        dest:'about-ceo',
        name :'About CEO'  
        },
        {
            dest:'/',
            name:'Home'
        },
        {
            dest:'portfolio',
            name:'Our work'
        },
        
    ]

    const [package1Visible, setPackage1Visible] = useState(false);
  const [package2Visible, setPackage2Visible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const package1Element = document.getElementById('package1');
      const package2Element = document.getElementById('package2');

      if (package1Element) {
        const rect1 = package1Element.getBoundingClientRect();
        const isVisible1 = rect1.top < window.innerHeight && rect1.bottom >= 0;
        setPackage1Visible(isVisible1);
      }

      if (package2Element) {
        const rect2 = package2Element.getBoundingClientRect();
        const isVisible2 = rect2.top < window.innerHeight && rect2.bottom >= 0;
        setPackage2Visible(isVisible2);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on initial render

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array to run the effect once on mount



    const animations = (left, index) => {
        const initialX = left ? -100 : 100;
        const delay = index ? index * 0.3 : 0;
    
        return {
            initial: {
                opacity: 0,
                x: initialX,
            },
            visible: {
                opacity: 1,
                x: 0,
                transition: {
                    ease: 'easeIn',
                    delay: delay,
                },
            },
        };
    };

    return (<>
  <Navbar
            links={links}
            />
        <div className='packages-container'>

          
            <div className='package-intro'>


            <h1 className='title-text'>
            Elevate Your Social Presence with Sainey Media
            </h1>
<p >At Sainey Media, we understand that every client is unique, and that's why we offer two tailored packages designed to meet your specific needs. Whether you're a budding creator or an established brand looking to take your social media game to the next level, we have the perfect solution for you.</p>
</div>   
            <div className='packages-box'>



                <div className='package-1'
                id='package-1'>
                    <h1 className='title-text'>
                     Content Catalyst
                    </h1>
                    <ul className='package-list'>
                        <motion.li
                        variants={animations(true,0)}
                        initial={'initial'}
                        animate={'visible'}
                        >
                        7 High-Quality Videos per Week for Daily Posting

                        </motion.li>
                        <motion.li
                         variants={animations(true,1)}
                         initial={'initial'}
                         animate={'visible'}>
                        Personalized 1-on-1 Content Consultation
                        </motion.li>

                        <motion.li
                         variants={animations(true,2)}
                         initial={'initial'}
                         animate={'visible'}>
                        Weekly Researched Hooks for Effortless Idea Generation
                        </motion.li>
                    </ul>

                    <p className='package-offer bold'>Exclusive 3-Month Trial Offer: $499 USD/month</p>

                    <p className='package-offer'>After the trial period, continue to elevate your content with Sainey Media for a year at just $649 USD/month.</p>

                </div>
                <div className='package-2'
                id='package-2'>
                    <h1 className='title-text'>
                     Influence Amplifier
                    </h1>
                        <ul className='package-list'
                        >
                            <motion.li
                             variants={animations(false,0)}
                             initial={'initial'}
                             animate={'visible'}>
                            14 High-Quality Videos per Week for Maximum Impact
                            </motion.li>
                            <motion.li
                             variants={animations(false,1)}
                             initial={'initial'}
                             animate={'visible'}>
                            Tailored 1-on-1 Content Consultation
                            </motion.li>
                            <motion.li
                             variants={animations(false,2)}
                             initial={'initial'}
                             animate={'visible'}>
                            Weekly Researched Hooks for Seamless Content Creation
                            </motion.li>
                        </ul>

                        <p className='package-offer bold'>Exclusive 3-Month Trial Offer: $975 USD/month</p>

<p className='package-offer'>After the trial period, unleash your full potential with Sainey Media for a year at just $1,249 USD/month.</p>
                </div>
                </div>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ab saepe nisi sequi praesentium corporis dolorem officia quae, voluptate tenetur?
                    <Booking/>
                </p>
                <Footer links={links}
        gradientBackground={true}/>
        </div>

       
        
        </>
    )
}

export default Packages