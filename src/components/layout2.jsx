import React from "react";
import Herobanner from "./herobanner";
import Navbar2 from "./navbar2";
import ParticlesComponent from "./particle";
import {  company } from "../componentData/data";
import Content from "./content";
import Testimonials from "./testimonials";
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
     
        <ParticlesComponent/>
        <Navbar2/>

        <Herobanner/>

        <Content title={company.title}
         description={company.description}
         rev={company.reverse}
         link="about-company"
         linkText="Our services"
         hasTitle={false}
        id={'company'}
         />

         <Testimonials/>
        </>
    )
}

export default Layout2