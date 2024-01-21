import React from "react";
import Herobanner from "./herobanner";
import Navbar2 from "./navbar2";
import ParticlesComponent from "./particle";
import {  company } from "../componentData/data";
import Content from "./content";
import Testimonials from "./testimonials";
import Outro from "./outro";
import { outroText } from "../componentData/data";
import Footer from './footer'
import Hero2 from "./hero2";
import black from '../media/black-sainey-logo.png'
import nobg from '../media/Sainey-3-removebg-preview.png'
import ss2 from '../media/ss2_sainey.jpg'
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
            name:'Our work'
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

        <Content title={company.title}
         description={company.description}
         rev={company.reverse}
         link="about-company"
         linkText="Our services"
         hasTitle={false}
        id={'company'}
        hasAnimation={true}
        hasTilt={true}
        // image={ss2}
        id='no-image'
         />

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