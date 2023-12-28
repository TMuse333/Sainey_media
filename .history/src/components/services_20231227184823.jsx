import React from "react";
import Navbar from "./navbar";
import Footer from './footer'
import '../styles/services.css'
import {companyStats} from '../componentData/data'


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
            <div className="background-intro">
                <h1 className="title-text">
                    Services
                </h1>
                <p className="description-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit qui amet inventore. Cupiditate amet nobis corporis fuga, vitae aliquam officia nostrum aut error modi quis, provident a voluptatem iusto magni.
                </p>
                <div className="line">

                </div>
            </div>

            <div className="company-stats">
              
                   
                   {companyStats.map((service) => (
                    <div className="stat-box">
                        <h2 className="title-text">
                            {service.name}
                        </h2>
                        <p className="description-text">
                            {service.description}
                        </p>
                        </div>
                   ))}
            </div>

            <div className="company-services">
                <h1 className="description-text">
                    Here are our services
                </h1>
                <div className="services-box">
                    
                </div>
            </div>

<Footer
links={links}
/>
        </div>
    )

}


export default Services