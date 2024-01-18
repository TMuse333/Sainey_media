import { min } from "@tensorflow/tfjs"
import { useMemo } from "react"



export const Particles = () =>{
    const options = useMemo(()=>{
        return{
            interactivity:{},
            particles:{
                links:{
                    enable:true
                },
                move:{
                    enable:true,
                    speed:{min:1, max:5}

                },
                opacity:{
                    
                }

            }
        }
    })
} 