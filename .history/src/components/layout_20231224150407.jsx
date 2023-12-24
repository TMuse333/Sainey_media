import React from "react";
import Testimonials from "./testimonials";
import Navbar from "./navbar";
import Herobanner from "./herobanner";
import Content from "./content";
import { company } from "../componentData/data";
import { personal } from "../componentData/data";
import Outro from "./outro";



const Layout = () =>{
    return (
<div>

<Navbar/>



        <div className="layout">

        <Herobanner/>

         <Content title={company.title}
         desc={company.description}
         rev={company.reverse}
         />
          <Content title={personal.title}
         desc={personal.description}
         rev={personal.reverse}
         />

<Testimonials/>

<div>
<Outro/>



         
       
           

        </div>
        </div>
    )
}

export default Layout