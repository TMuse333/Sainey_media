import react, {useEffect, useRef}from 'react'
import '../styles/packages.css'
import Footer from './footer'

import Navbar from './navbar'
import Booking from './booking'

import { useState } from 'react'
const Packages = () => {

    const links = [
        {
        dest:'/about-ceo',
        name :'About CEO'  
        },
        {
            dest:'/',
            name:'Home'
        },
        {
            dest:'/portfolio',
            name:'Our work'
        },
        
    ]








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

    {/* <ParticlesComponent/> */}
  <Navbar
            links={links}
            />
        <div className='packages-container'>

          
            <div className='package-intro'>


            <h1 className='title-text'>
            Elevate Your Social Presence with Sainey Media
            </h1>
<p className=''>At Sainey Media, we understand that every client is unique, and that's why we offer two tailored packages designed to meet your specific needs. Whether you're a budding creator or an established brand looking to take your social media game to the next level, we have the perfect solution for you.</p>
</div>   
            <div className='packages-box'>



                <div className='package-1'
                id='package-1'
                ref={package1Ref}>
                    <h1 className='title-text'>
                     Content Catalyst
                    </h1>
                    <ul className='package-list'>
                        <motion.li
                        variants={animations(true,0)}
                        initial={'initial'}
                        animate={package1Visible ? 'visible' : 'initial'}
                        >
                        7 High-Quality Videos per Week for Daily Posting

                        </motion.li>
                        <motion.li
                         variants={animations(true,1)}
                         initial={'initial'}
                         animate={package1Visible ? 'visible' : 'initial'}
                         >
                        Personalized 1-on-1 Content Consultation
                        </motion.li>

                        <motion.li
                         variants={animations(true,2)}
                         initial={'initial'}
                         animate={package1Visible ? 'visible' : 'initial'}
                         >
                        Weekly Researched Hooks for Effortless Idea Generation
                        </motion.li>
                    </ul>

                    <p className='package-offer bold'>Exclusive 3-Month Trial Offer: $499 USD/month</p>

                    <p className='package-offer'>After the trial period, continue to elevate your content with Sainey Media for a year at just $649 USD/month.</p>

                </div>
                <div className='package-2'
                id='package-2'
                ref={package2Ref}>
                    <h1 className='title-text'>
                     Influence Amplifier
                    </h1>
                        <ul className='package-list'
                        >
                            <motion.li
                             variants={animations(false,0)}
                             initial={'initial'}
                             animate={package2Visible ? 'visible' : 'initial'}
                             >
                            14 High-Quality Videos per Week for Maximum Impact
                            </motion.li>
                            <motion.li
                             variants={animations(false,1)}
                             animate={package2Visible ? 'visible' : 'initial'}
                             >
                            Tailored 1-on-1 Content Consultation
                            </motion.li>
                            <motion.li
                             variants={animations(false,2)}
                             initial={'initial'}
                             animate={package2Visible ? 'visible' : 'initial'}
                             >
                            Weekly Researched Hooks for Seamless Content Creation
                            </motion.li>
                        </ul>

                        <p className='package-offer bold'>Exclusive 3-Month Trial Offer: $975 USD/month</p>

<p className='package-offer'>After the trial period, unleash your full potential with Sainey Media for a year at just $1,249 USD/month.</p>
                </div>
                </div>

            <div className='package-outro'>

        
                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ab saepe nisi sequi praesentium corporis dolorem officia quae, voluptate tenetur?
                    <Booking
                    altColor={true}/>
                    
                </p>
                    <p style={{
                        marginBottom:'1rem'
                    }}>Want to see these packages in action? <br/>
                       
  
                    </p>
                    <button className='button'>
                        Click Here
                        </button>
                </div>

                

                <Footer links={links}
        gradientBackground={false}/>
        </div>

       
        
        </>
    )
}

export default Packages