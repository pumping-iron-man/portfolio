import { IconContext } from 'react-icons';
import { FiYoutube, FiInstagram, FiMail } from "react-icons/fi";

import Header from './Components/Header/Header'
import Card from './Components/Card/Card'
import './App.css'

import thumbnails from './assets/thumbnails/thumbnail-images'


const App = () => {

  return (
    <div className="App">
      <Header />
      <div className="Introduction">
        <p className="Subtext">Hi, I'm (<span className="Z">Z</span>i-)Shaan</p>
        <p className="Attention">UX Designer & Developer in love with experiences</p>
        <p className="Subtext">Currently working with a social fitness startup. In the spare time I do movie reviews.</p>
      </div>
      <hr className="Divider"/>
      <div className="Studies">
        <p className="Attention">Studies</p>
        <div className='Cards'>
          <Card imgPath= { thumbnails[0] } 
                imgAlt='Booking-System' 
                title='Booking-System' 
                subtext='Enabling University students to book a library seat under Covid restrictions.' />
          <Card imgPath={ thumbnails[1] }
                imgAlt='More to come' />
        </div>
      </div>
      <hr className="Divider"/>
      <footer>
        <IconContext.Provider value={{ className: 'react-icons'}}>
          <div className='Icons'>
            <a href='mailto:zishon@hotmail.de'>
              <FiMail />
            </a>
            <a href='https://www.youtube.com/c/ThrilledProductions'>
              <FiYoutube />
            </a>
            <a href='https://www.instagram.com/prototyphius/'>
              <FiInstagram />
            </a>
          </div>
        </IconContext.Provider>
      </footer>
    </div>
  );
}

export default App;
