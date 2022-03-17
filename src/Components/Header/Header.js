import { useState } from 'react'
import { FiX } from "react-icons/fi";
import { IconContext } from "react-icons";

import './Header.css';

const Header = () => {

  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)

    return (
      <div className="Header">

          <button className="Burger" onClick={showSidebar}>
            <div></div>
            <div></div>
            <div></div>
          </button>

          <div className={sidebar ? 'Links active' : 'Links'}>
            <IconContext.Provider value={{ className: 'CloseIcon' }}>
              <FiX onClick={showSidebar} />
            </IconContext.Provider>
            <a className='FirstLink' href="./">Works</a>
            <a href="https://de.linkedin.com/in/zishan-ahmad-89b69421b">Linkedin</a>
            <a href="https://github.com/pumping-iron-man">Github</a>
            <a href="https://www.youtube.com/c/ThrilledProductions">Youtube</a>
          </div>
      </div>
    );
  }
  
  export default Header;