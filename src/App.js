import Card from './Components/Card/Card'
import './App.css'
import thumbnails from './assets/thumbnails/thumbnail-images'


const App = () => {

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
