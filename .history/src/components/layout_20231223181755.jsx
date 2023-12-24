import React from "react";
import Testimonials from "./testimonials";
import Navbar from "./navbar";
import Herobanner from "./herobanner";
import Content from "./content";
import Personal from "./personal";


const Layout = () =>{
    return (
<div>

<Navbar/>

        <div className="layout">
         
            <Herobanner/>
           >
 
            {/* <Testimonials/> */}
        </div>
        </div>
    )
}

export default Layout