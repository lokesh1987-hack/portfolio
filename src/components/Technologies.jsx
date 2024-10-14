import {RiReactjsLine} from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import {motion} from "framer-motion"



const iconVariants =  (duration) => ({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse"

            
        }
    }
})



const Technologies =() => {
    return(

        <div className="pb-24">

                <motion.h2 
                whileInView={{opacity:1,y:0}}
                initial={{opacity:0,y:-100}}                
                transition={{duration:1.5}}
                className="my-20 text-center text-4xl">
                    Technologies
                </motion.h2>
                <motion.div 
                whileInView={{opacity:1,y:0}}
                initial={{opacity:0,y:-100}}                
                transition={{duration:1.5}} 
                className="flex flex-wrap items-center justify-center gap-4 ">

                        <motion.div
                        initial="initial"
                        animate="animate"
                        variants={iconVariants(2.5)}
                        >
                            
                            <RiReactjsLine className=" p-2 text-8xl text-cyan-400"/>
                        </motion.div>
                        <motion.div
                        initial="initial"
                        animate="animate"
                        variants={iconVariants(5)}
                        >
                            <RiNextjsFill className=" p-2 text-8xl text-white"/>
                        </motion.div>
                        <motion.div
                        initial="initial"
                        animate="animate"
                        variants={iconVariants(3)}
                        >
                            <IoLogoJavascript className=" p-2 text-8xl text-yellow-400"/>
                        </motion.div>
                        <motion.div
                        initial="initial"
                        animate="animate"
                        variants={iconVariants(6)}
                        
                        >
                            <TbBrandRedux  className=" p-2 text-8xl text-purple-600"/>
                        </motion.div>
                        <motion.div
                        initial="initial"
                        animate="animate"
                        variants={iconVariants(2)}
                        >
                            <RiTailwindCssFill  className=" p-2 text-8xl text-cyan-400"/>
                        </motion.div>
                        <motion.div
                        initial="initial"
                        animate="animate"
                        variants={iconVariants(2.5)}
                        >
                            <SiTypescript className=" p-2 text-8xl text-blue-500"/>
                        </motion.div>
                        <motion.div
                        initial="initial"
                        animate="animate"
                        variants={iconVariants(6)}
                        >
                            <SiMui  className="p-2 text-8xl text-cyan-400"/>
                        </motion.div>
                        
                      
                </motion.div>

        </div>
    )
}

export default Technologies;