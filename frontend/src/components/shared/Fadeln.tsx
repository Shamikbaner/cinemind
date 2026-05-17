"use client"

import {motion} from "framer-motion"

type FadelnProps={
    children:React.ReactNode
}

export default function Fadeln({
    children,
}:FadelnProps){
    return(
        <motion.div
        initial={{
            opacity:0,
            y:30,
        }}
        animate={{
            opacity:1,
            y:0,
        }}
        transition={{
            duration:0.7,
        }}
        >
            {children}
        </motion.div>
    )
}
