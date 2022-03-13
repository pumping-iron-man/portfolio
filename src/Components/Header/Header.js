import { useState } from 'react'
import { MdClose } from "react-icons/md";
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
              <MdClose onClick={showSidebar} />
            </IconContext.Provider>
            <a href="./">Works</a>
            <a href="https://de.linkedin.com/in/zishan-ahmad-89b69421b">Linkedin</a>
            <a href="https://github.com/pumping-iron-man">Github</a>
            <a href="https://www.youtube.com/c/ThrilledProductions">Youtube</a>
          </div>
      </div>
    );
  }
  
  export default Header;