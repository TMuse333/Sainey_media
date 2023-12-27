import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import '../styles/about.css'
import img from '../media/image-holder.jpg'
import Content from "./content";



const About = () => {

    const links = [
        {
        dest:'/',
        name :'home'  
        },
        {
            dest:'about-company',
            name:'About Company'
        },
        {
            dest:'portfolio',
            name:''
        }
        
    ]

    return (
        <div>
  <Navbar
  link={links}/>
       
        <div className="about-container">
          
            <h1 className="title-text">
                About CEO
            </h1>

            <div>

           
            <p className="description-text about-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vulputate porttitor egestas.
Cras vel massa risus. Suspendisse tincidunt pharetra diam nec placerat. Pellentesque pretium congue mauris,
tincidunt pellentesque velit condimentum quis. Donec dictum dictum nulla vitae rhoncus.
           
            </p>

            <p className="description-text about-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vulputate porttitor egestas.
Cras vel massa risus. Suspendisse tincidunt pharetra diam nec placerat. Pellentesque pretium congue mauris,
tincidunt pellentesque velit condimentum quis. Donec dictum dictum nulla vitae rhoncus.
            </p>

            </div>

            <Content 
            img={img}
            title={'ceo'}
            />


           

            <h2 className="title-text bold-700">
                Hustlers dont stop they keep going!
            </h2>

            <Footer/>
        </div>
 
        </div>
    )
}

export default About