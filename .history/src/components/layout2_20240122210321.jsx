import React , {useEffect}from "react";

import Navbar2 from "./navbar2";
import ParticlesComponent from "./particle";

import Testimonials from "./testimonials";
import Outro from "./outro";
import { outroText } from "../componentData/data";
import Footer from './footer'
import Hero2 from "./hero2";

import Paragraph from "./paragraph";
const Layout2 = () => {

    useEffect(() => {
        // Scroll to the top of the window when the component mounts
        window.scrollTo(0, 0);
    
        // If you're using a functional component, you may want to return a cleanup function
        return () => {
          // Any cleanup logic can go here
        };
      }, []);

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
        {
        dest:'b',
        name:'Our Work'
    }
        
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