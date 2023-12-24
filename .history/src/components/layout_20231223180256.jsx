import React from "react";
import Testimonials from "./testimonials";
import Navbar from "./navbar";
import Herobanner from "./herobanner";
import About from "./about";
import Personal from "./personal";


const Layout = () =>{
    return (
<div>

<Navbar/>

        <div className="layout">
         
            <Herobanner/>
            <About/>
            <Personal/>
 
            {/* <Testimonials/> */}
        </div>
        </div>
    )
}

export default Layout