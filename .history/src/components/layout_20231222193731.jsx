import React from "react";
import Testimonials from "./testimonials";
import Navbar from "./navbar";
import Herobanner from "./herobanner";


const Layout = () =>{
    return (
        <div className="layout">
            <Navbar/>
            <Herobanner/>
            {/* <Testimonials/> */}
        </div>
    )
}

export default Layout