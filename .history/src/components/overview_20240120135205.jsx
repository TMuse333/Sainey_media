import React from "react";
import Navbar from "./navbar";
import img from '../media/image-holder.jpg'
import Content from './content'
import '../styles/overview.css'
import Outro from "./outro";
import { overViewText } from "../componentData/data";
import Footer from "./footer";
import { about1,about2 } from "../componentData/data";
import Booking from "./booking";


const Overview = () => {

    const links = [
        {
        dest:'/',
        name :'home'  
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
        image={img}
        description={about1}
        id={'about'}
        hasAnimation={false}
        />
          <Content title='about again'
        image={img}
        description={about2}
        rev={true}
        id={}
        />


        <div className="overview-section-3">


        <h1 className="title-text">About 3</h1>
        <img src={img} className='overview-image'/>


        <p className="description-text">
        Sainey's passion for media excellence shines through in his work. He has successfully collaborated with numerous clients to elevate their social presence to new heights. His unique insights and creative strategies have helped businesses across industries capture the attention of their target audience and drive meaningful engagement.
<br/><br/>
Sainey Take founded Sainey Media in March 2023 with a singular vision in mind - to provide affordable yet impactful marketing solutions that empower businesses to succeed in today's dynamic digital landscape. His unwavering commitment to client success, coupled with his media prowess, has already made Sainey Media a force to be reckoned with in the industry.
<br/><br/>
Sainey Take's journey is one of passion, innovation, and a relentless pursuit of excellence. He invites you to join him on this exciting adventure as he continues to empower businesses and individuals with media and marketing expertise.
<Booking/>

        </p>
        </div>

        

<Footer links={links}
gradientBackground={true}/>
    </div>
    </>
    )
    
}

export default Overview