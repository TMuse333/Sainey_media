import React from "react";
import Testimonials from "./testimonials";
import Navbar from "./navbar";
import Herobanner from "./herobanner";
import Content from "./content";
import { company } from "../componentData/data";
import { personal } from "../componentData/data";
import Outro from "./outro";
import Booking from "./booking";



const Layout = () =>{
    return (
<div>

<Navbar/>



        <div className="layout">

        <Herobanner/>

        {/* <Outro/> */}

         <Content title={company.title}
         desc={company.description}
         rev={company.reverse}
         />
          <Content title={personal.title}
         desc={personal.description}
         rev={personal.reverse}
         />

<Testimonials/>

<button className='button'>
      view whole portfolio
    </button>


<Outro/>



         
       
           

        </div>
        </div>
    )
}

export default Layout