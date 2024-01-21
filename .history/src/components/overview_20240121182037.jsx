import React from "react";
import Navbar from "./navbar";

import Content from './content'
import '../styles/overview.css'


import Footer from "./footer";
import { about1 } from "../componentData/data";
import Booking from "./booking";
import sainey from '../media/sainey22-min.jpg'


const Overview = () => {

    const links = [
        {
        dest:'/',
        name :'Home'  
        },
        {
            dest:'/about-company',
            name:'About Company'
        },
        {
            dest:'/portfolio',
            name:'Our work'
        },
        
    ]

    return (
        <>

        <Navbar
        links={links}/>
        <div className="overview-container">
         
        <div className="overview-header">
         <h1 className="title-text"
         >
         Empowering Businesses Through Media Expertise
         </h1>
       
         
        </div>
        <Content title='about'
        image={sainey}
        description={about1}
        id={'about1'}
       
        imageId='sainey'
        />
        <div className="overview-section-3">


        <div className="black"
           style={{
            backgroundColor:'black',
            padding:'3rem 1rem 3rem 1rem'
        }}>

     
        <p className="description-text"
        style={{
            backgroundColor:'black'
        }}>
        What sets Sainey apart is not just his impressive resume but his unwavering commitment to innovation. He firmly believes that the media landscape is ever-evolving, and to stand out, one must continuously adapt and innovate.

Before embarking on his entrepreneurial journey with Sainey Media, Sainey Take walked in the shoes of countless individuals and businesses looking to enhance their social presence. He understood the challenges, frustrations, and aspirations of clients, making sure he could offer solutions that truly resonate.
        </p>
        </div>


        <p className="description-text">
        Sainey's passion for media excellence shines through in his work. He has successfully collaborated with numerous clients to elevate their social presence to new heights. His unique insights and creative strategies have helped businesses across industries capture the attention of their target audience and drive meaningful engagement.
<br/><br/>
Sainey Take founded Sainey Media in March 2023 with a singular vision in mind - to provide affordable yet impactful marketing solutions that empower businesses to succeed in today's dynamic digital landscape. His unwavering commitment to client success, coupled with his media prowess, has already made Sainey Media a force to be reckoned with in the industry.
<br/><br/>
Sainey Take's journey is one of passion, innovation, and a relentless pursuit of excellence. He invites you to join him on this exciting adventure as he continues to empower businesses and individuals with media and marketing expertise.
<br/>


        </p>
        <Booking
        altColor={true}/>
        </div>

        

<Footer links={links}
gradientBackground={true}/>
    </div>
    </>
    )
    
}

export default Overview