import { min } from "@tensorflow/tfjs"
import { useCallback, useMemo } from "react"



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
                    speed:{min:1, max:5},
                   
                },
                opacity:{
                    value:{
                        min:0.3, max:0.7
                    }
                },
                size:{
                    value:{
                        min:1, max:3
                    }
                }

            }
        }


        const particleInit = useCallback((engine)
    })
} 