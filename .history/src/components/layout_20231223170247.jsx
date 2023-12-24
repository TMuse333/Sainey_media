import React from "react";
import Testimonials from "./testimonials";
import Navbar from "./navbar";
import Herobanner from "./herobanner";
import About from "./about";


const Layout = () =>{
    return (

        
        <div className="layout">
         
            <Herobanner/>
            <About/>
 
            <Testimonials/>
        </div>
    )
}

export default Layout