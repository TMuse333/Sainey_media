import React from "react";
import '../styles/portfolio.css'
import Navbar from "./navbar";
import Footer from "./footer";


const Portfolio = () => {

    const links = [
        {
        dest:'/',
        name :'home'  
        },
        {
            dest:'/about-company',
            name:'About Company'
        },
        {
            dest:'/about-ceo',
            name:'About CEO'
        },
        
    ]


    return (
        <div>

            <Navbar
            links={links}
            />
   
        <div className="portfolio-container">
            <h1 className="title-text">
                Showcase your work here
            </h1>
   
        </div>
     
   
        </div>
    
             <Footer 
           links={links}
           />
        </>
      

        
    )
}


export default Portfolio
