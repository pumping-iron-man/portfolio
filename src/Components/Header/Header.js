import { IconContext } from "react-icons";
import { FiYoutube, FiInstagram, FiMail, FiLinkedin, FiGithub } from "react-icons/fi";

import './Header.css';

const Header = () => {

    return (
      <div className="Header">

          <div className='Links'>
            <IconContext.Provider value={{ className: 'HeaderIcons' }}>
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
      </div>
    );
  }
  
  export default Header;