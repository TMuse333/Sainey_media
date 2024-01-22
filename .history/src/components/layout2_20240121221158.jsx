import React from "react";

import Navbar2 from "./navbar2";
import ParticlesComponent from "./particle";

import Testimonials from "./testimonials";
import Outro from "./outro";
import { outroText } from "../componentData/data";
import Footer from './footer'
import Hero2 from "./hero2";

import Paragraph from "./paragraph";
const Layout2 = () => {

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
            name:'Our Work'
        },
        
    ]

    return (
        <>

        <div className="layout2">

        
     
        <ParticlesComponent/>
        <Navbar2/>
{/* 
        <Herobanner/> */}

        <Hero2/>

  <Paragraph/>

        {/* <Content title={company.title}
         description={company.description}
         rev={company.reverse}
         link="about-company"
         linkText="Our services"
         hasTitle={false}
        id={'company'}
        hasAnimation={true}
        hasTilt={true}
        image={black2}
        // imageId='no-image'
        imageId='black-photo'
         /> */}

         <Testimonials/>
    
         <Outro
title='Outro'
content={outroText}
button={true}/>
<Footer links={links}
/>
</div>
        </>
    )
}

export default Layout2