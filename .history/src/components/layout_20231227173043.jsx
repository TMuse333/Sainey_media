import React from "react";
import Testimonials from "./testimonials";
import Navbar from "./navbar";
import Herobanner from "./herobanner";
import Content from "./content";
import {  company } from "../componentData/data";
import { personal } from "../componentData/data";
import { outroText } from "../componentData/data";
import Outro from "./outro";
import Booking from "./booking";
import Footer from "./footer";
import About from "./ceo";




const Layout = () =>{

    const links = [
        {
        dest:'about-ceo',
        name :'About CEO'  
        },
        {
            dest:'about-company',
            name:'About Company'
        },
        {
            dest:'portfolio',
            name:'Our work'
        },
        
    ]

    
    return (
<div>

<Navbar/>



        <div className="layout">

        <Herobanner/>

        {/* <Outro/> */}

         <Content title={company.title}
         desc={company.description}
         rev={company.reverse}
         link="about-company"
         linkText="about us"
         hasTitle={true}
         />
          <Content title={personal.title}
         desc={personal.description}
     
         rev={personal.reverse}
         link="ceo"
        linkText='About Sainey'
        hasTitle={true}
         />

<Testimonials/>

<Outro
title='Outro'
content={outroText}
button={true}/>



<Footer/>



         
       
           

        </div>
        </div>
    )
}

export default Layout