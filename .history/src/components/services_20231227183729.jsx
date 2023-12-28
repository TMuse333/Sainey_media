import React from "react";
import Navbar from "./navbar";
import Footer from './footer'
import '../styles/services.css'


const Services = () => {

    const links = [
        {
            dest:'/',
            name:'Home'
        },
        {
        dest:'about-ceo',
        name :'About CEO'  
        },
      
        {
            dest:'portfolio',
            name:'Our work'
        },
        
    ]

    return (
        <div className="services-container">
            <Navbar links={links}
            />
            <h1 className="title-text">
                About Company
            </h1>

            <div className="background-intro">
                <h1 className="title-text">
                    
                </h1>
            </div>

<Footer
links={links}
/>
        </div>
    )

}


export default Services