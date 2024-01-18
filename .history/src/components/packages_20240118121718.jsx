import react from 'react'
import '../styles/packages.css'


const Packages = () => {


    return (
        <div className='packages-container'>
            <h1 className='title-text'>
            Elevate Your Social Presence with Sainey Media
            </h1>
<p>At Sainey Media, we understand that every client is unique, and that's why we offer two tailored packages designed to meet your specific needs. Whether you're a budding creator or an established brand looking to take your social media game to the next level, we have the perfect solution for you.</p>
            
                <div className='package-1'>
                    <h1 className='title-text'>
                     Content Catalyst
                    </h1>
                    <ul className='package-list'>
                        <li>
                        7 High-Quality Videos per Week for Daily Posting

                        </li>
                        <li>
                        Personalized 1-on-1 Content Consultation
                        </li>

                        <li>
                        Weekly Researched Hooks for Effortless Idea Generation
                        </li>
                    </ul>
                </div>
                <div className='package-2'>
                    <h2 className='title-text'>
                     Influence Amplifier
                    </h2>
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
                </div>
        </div>
    )
}

export default Packages