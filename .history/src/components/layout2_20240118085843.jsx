import React from "react";
import Herobanner from "./herobanner";
import Navbar2 from "./navbar2";
import ParticlesComponent from "./particle";
import {  company } from "../componentData/data";
import Content from "./content";
const Layout2 = () => {

    return (
        <>
     
        <ParticlesComponent/>
        <Navbar2/>
        <Herobanner/>
        </>
    )
}

export default Layout2