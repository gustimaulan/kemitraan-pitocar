import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutFranchise from './components/AboutFranchise'
import MarketPotential from './components/MarketPotential'
import WhyJoin from './components/WhyJoin'
import Comparison from './components/Comparison'
import Packages from './components/Packages'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import AboutCompany from './components/AboutCompany' 
import FiveYearProjections from './components/FiveYearProjections'
import Process from './components/Process'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ThankYou from './ThankYou'
import FloatingButton from './components/FloatingButton'


function App() {
  return (
    <>
    <Router>
      <Routes> 
        <Route path="/" element={<div className='justify-center mx-auto'>
          {/* <Header /> */}
          <Hero />
          <AboutFranchise />
          <MarketPotential />
          <AboutCompany />
          <WhyJoin />
          <Comparison />
          <Packages />
          <FiveYearProjections />
          <Process />
          <FAQ />
          <Contact />
          <Footer />
          <FloatingButton />
        </div>}
        />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
