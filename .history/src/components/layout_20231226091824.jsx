import React from "react";
import Testimonials from "./testimonials";
import Navbar from "./navbar";
import Herobanner from "./herobanner";
import Content from "./content";
import { ceoLink, company } from "../componentData/data";
import { personal } from "../componentData/data";
import { outroText } from "../componentData/data";
import Outro from "./outro";
import Booking from "./booking";
import Footer from "./footer";
import About from "./ceo";
import {ceoLink} from '../componentData/data'



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
         link={ceoLink}
        
         />

<Testimonials/>

<Outro
title='Outro'
content={outroText}/>



<Footer/>



         
       
           

        </div>
        </div>
    )
}

export default Layout