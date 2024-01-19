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

    const [package1, setPackage1] = useState(false);


    const animations = (left, index) => {
        const initialX = left ? -50 : 50;
        const delay = index ? index * 0.1 : 0;
    
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



                <div className='package-1'>
                    <h1 className='title-text'>
                     Content Catalyst
                    </h1>
                    <ul className='package-list'>
                        <motion.li
                        variants={animations(0,true)
                        }
                        initial={'init'}>
                        7 High-Quality Videos per Week for Daily Posting

                        </li>
                        <li>
                        Personalized 1-on-1 Content Consultation
                        </li>

                        <li>
                        Weekly Researched Hooks for Effortless Idea Generation
                        </li>
                    </ul>

                    <p className='package-offer bold'>Exclusive 3-Month Trial Offer: $499 USD/month</p>

                    <p className='package-offer'>After the trial period, continue to elevate your content with Sainey Media for a year at just $649 USD/month.</p>

                </div>
                <div className='package-2'>
                    <h1 className='title-text'>
                     Influence Amplifier
                    </h1>
                        <ul className='package-list'>
                            <li>
                            14 High-Quality Videos per Week for Maximum Impact
                            </li>
                            <li>
                            Tailored 1-on-1 Content Consultation
                            </li>
                            <li>
                            Weekly Researched Hooks for Seamless Content Creation
                            </li>
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