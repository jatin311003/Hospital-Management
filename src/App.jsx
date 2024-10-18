import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Appointment from './components/Appointment/Appointment';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <Router >
        <div className='container'>
        <Navbar/>
        <main>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/appointment' element={<Appointment/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
        </main>
        </div>
    </Router>
  )
}

export default App
