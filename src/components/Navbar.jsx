import logo from "../assets/aks-logo.png"
import {FaGithub, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa"
const Navbar = () => {
    return(
       <nav className="flex items-center justify-between py-6 ">
        <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
        <img src={logo} className="mx-2 rounded-lg" width={100} height={75} alt="Logo" />
        </a>
        </div>
        <div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl ">
                <a href="https://www.linkedin.com/in/amar-kumar-s-225290143/"
                target="_blank"
                rel="noopener nopreferrer"
                aria-label="LinkedIn"
                >
                    <FaLinkedin/>                
                </a>
                <a href="https://github.com/AmarKumarShaw"
                target="_blank"
                rel="noopener nopreferrer"
                aria-label="Github"
                >
                    <FaGithub/>                
                </a>
                <a href="https://www.instagram.com/amr_shw/"
                target="_blank"
                rel="noopener nopreferrer"
                aria-label="Instagram"
                >
                    <FaInstagram/>                
                </a>
                <a href="https://x.com/57afaf8bb0b14c5"
                target="_blank"
                rel="noopener nopreferrer"
                aria-label="Twitter"
                >
                    <FaTwitter/>                
                </a>
            </div>
        </div>
       </nav>
    )
}
export default Navbar;