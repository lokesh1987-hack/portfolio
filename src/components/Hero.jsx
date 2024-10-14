import profilePic from "../assets/amr_kmr_shw.png"
import { HERO_CONTENT } from "../constants";
import {motion} from  "framer-motion"

const containerVariants = {
    hidden:{opacity:0,x:-100},
    visible:{
        opacity:1,
        x:0,
        transistion:{
            duration:0.5,
            staggerChilderen:0.5,

        },
    }    
}

const childVariants = {
    hidden:{opacity:0,x:-100},
    visible:{
        opacity:1,
        x:0,
        transition:
        {
            duration:0.5
        }
    }
}
const Hero = () =>{
    return(
        <div className="pb-4 lg:mb-36">
            <div className="flex flex-wrap lg:flex-row-reverse">
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-between lg:p-8">
                        <motion.img
                         src={profilePic} 
                         height={650}
                         alt="Amar_Kumar_Shaw" 
                         className="border border-stone-900 rounded-3xl"
                         initial={{x:100,opacity:0}}
                         animate={{x:0,opacity:1}}
                         transition={{duration:1,deplay:1.5}}
                       
                         />

                    </div>
                </div>
                <motion.div 
                initial="hidden"
                animate="visible" 
                variants={containerVariants}
                className="w-full lg:w-1/2 lg:pt-16 ">
                        <div className="flex flex-col items-center lg:items-start mt-10">
                            <motion.h2
                            variants={childVariants}
                            className="pb-2 text-3xl tracking-tighter lg:text-7xl ">
                                Amar Kumar Shaw
                            </motion.h2>
                            <motion.span
                            variants={childVariants}
                            className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text
                             text-2xl tracking-tight text-transparent
                            ">
                            Full Stack Developer
                            </motion.span>
                            <motion.p 
                            variants={childVariants}
                            className="my-2 text-center lg:text-start max-w-2xl py-6 text-2xl leading-relaxed tracking-tighter
                            bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text
                              text-transparent
                            ">
                            {HERO_CONTENT}
                            </motion.p>
                            <motion.a 
                            variants={childVariants}
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreffer"
                            download
                            className="bg-white  rounded-full p-4 text-sm text-stone-800 mb-10"
                            >
                                Download Resume
                        </motion.a>
                        </div>
                </motion.div>
            </div>

        </div>
    )
}

export default Hero;