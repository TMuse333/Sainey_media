import React from "react";
import Testimonials from "./testimonials";
import Navbar from "./navbar";
import Herobanner from "./herobanner";
import Content from "./content";
import { company } from "../componentData/data";
import



const Layout = () =>{
    return (
<div>

<Navbar/>

        <div className="layout">
         
            <Herobanner/>
           
 
            {/* <Testimonials/> */}
        </div>
        </div>
    )
}

export default Layout