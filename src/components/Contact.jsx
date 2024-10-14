import { CONTACT } from "../constants";
import {motion} from "framer-motion"
const Contact = () => {
    return (
        <div>
            <div className="border-t border-stone-900 pb-20">
                <motion.h2 
                 whileInView={{opacity:1,x:0}}
                 initial={{opacity:0,x:-100}}
                 transition={{duration:1}}
                 
                className="my-10 text-center text-4xl">
                    Get In Touch 
                </motion.h2>
                <div className="text-center text-base tracking-tighter">
                        <motion.p 
                         whileInView={{opacity:1,x:0}}
                         initial={{opacity:0,x:-100}}
                         transition={{duration:1}}
                         
                        className="my-4">
                            {CONTACT.address}
                        </motion.p>
                        <motion.p 
                         whileInView={{opacity:1,x:0}}
                         initial={{opacity:0,x:-100}}
                         transition={{duration:1}}
                         
                        className="my-4">
                            {CONTACT.phoneNo}
                        </motion.p>
                        <motion.a
                        href={`mailto:${CONTACT.email}`}
                         whileInView={{opacity:1,x:0}}
                         initial={{opacity:0,x:100}}
                         transition={{duration:1}}
                         
                        className="my-4">
                         {CONTACT.email}
                        </motion.a>
                </div>
            </div>
        </div>
    )
}
export default Contact