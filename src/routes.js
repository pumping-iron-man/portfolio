import {HashRouter, Routes, Route } from 'react-router-dom'

import App from './App'
import Bookingssystem from './Pages/Bookingsystem/Bookingsystem'
import NoMatch from './Pages/NoMatch/NoMatch'

const routes = (
    < HashRouter >
        <Routes>
            <Route exact path="/" element={ <App /> } />
            <Route path="/bookingsystem" element={ <Bookingssystem /> } />
            <Route path='*' element={ <NoMatch /> } />
        </Routes>
   </ HashRouter >
)

export default routes