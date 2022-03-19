import {HashRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import App from './App'
import Bookingssystem from './Pages/Bookingsystem/Bookingsystem'
import NoMatch from './Pages/NoMatch/NoMatch'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

const routes = (
    <React.Fragment>
        <Header />
        < HashRouter >
            <Routes>
                <Route exact path="/" element={ <App /> } />
                <Route path="/bookingsystem" element={ <Bookingssystem /> } />
                <Route path='*' element={ <NoMatch /> } />
            </Routes>
        </ HashRouter >
        <Footer />
    </React.Fragment>
)

export default routes