import { IconContext } from "react-icons";
import { FiYoutube, FiInstagram, FiMail, FiLinkedin, FiGithub } from "react-icons/fi";

import './Footer.css'


const Footer = () => {
    return (
        <div className="Footer">
            <div className="IconsContainer">
            <IconContext.Provider value={{ className: 'FooterIcons' }}>
                <a href='mailto:zishon@hotmail.de' target="_blank" rel="noopener noreferrer">
                <FiMail />
                </a>
                <a href="https://de.linkedin.com/in/zishan-ahmad-89b69421b" target="_blank" rel="noopener noreferrer">
                <FiLinkedin />
                </a>
                <a href='https://www.instagram.com/prototyphius/' target="_blank" rel="noopener noreferrer">
                <FiInstagram />
                </a>
                <a href="https://github.com/pumping-iron-man" target="_blank" rel="noopener noreferrer">
                <FiGithub />
                </a>
                <a href='https://www.youtube.com/c/ThrilledProductions' target="_blank" rel="noopener noreferrer">
                <FiYoutube />
                </a>
            </IconContext.Provider>
            </div>
            <p>© 2022 Zishan Ahmad</p>
      </div>
    )
}

export default Footer