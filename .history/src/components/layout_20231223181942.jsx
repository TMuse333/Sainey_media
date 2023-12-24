import React from "react";
import Testimonials from "./testimonials";
import Navbar from "./navbar";
import Herobanner from "./herobanner";
import Content from "./content";
import { company } from "../componentData/data";
import { personal } from "../componentData/data";



const Layout = () =>{
    return (
<div>

<Navbar/>

        <div className="layout">
         <Content title={company.title}
         desc={company.description}
         />
          <Content title={[].title}
         desc={company.description}
         />
         
            <Herobanner/>
           
 
            {/* <Testimonials/> */}
        </div>
        </div>
    )
}

export default Layout