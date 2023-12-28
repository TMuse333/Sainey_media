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
            dest:'/portfolio',
            name:'Our work'
        },
        
    ]


    return (
        <div className="portfolio-container">
            <h1 className="title-text">
                Showcase your work here
            </h1>
        </div>
    )
}


export default Portfolio
