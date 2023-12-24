import React from "react";
import Testimonials from "./testimonials";
import Navbar from "./navbar";


const Layout = () =>{
    return (
        <div className="layout">
            <Navbar/>
            <Testimonials/>
        </div>
    )
}

export default Layout