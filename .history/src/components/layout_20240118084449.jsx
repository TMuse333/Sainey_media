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
import Navbar2 from "./navbar2";
import ParticlesComponent from "./particle";




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

{/* <Navbar
links={links}/> */}

{/* <Navbar2/> */}



        <div className="layout">
        <ParticlesComponent/>

        {/* <Herobanner/> */}
        

        {/* <Outro/> */}

         <Content title={company.title}
         description={company.description}
         rev={company.reverse}
         link="about-company"
         linkText="Our services"
         hasTitle={false}
        id={'company'}
         />
         
          {/* <Content title={personal.title}
         desc={personal.description}
     
         rev={personal.reverse}
         link="about-ceo"
        linkText='About Sainey'
        hasTitle={true}
         /> */}

<Testimonials/>

<Outro
title='Outro'
content={outroText}
button={true}/>



<Footer
links={links}/>



         
       
           

        </div>
        </div>
    )
}

export default Layout