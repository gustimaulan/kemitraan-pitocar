import React from 'react'
import { initFacebookPixel } from './tracking/metaPixel';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Home from './pages/Home'
import ThankYouPage from './pages/ThankYouPage'
import ScalevForm from './components/ScalevForm'

function App() {
  
  useEffect(() => {
    initFacebookPixel();
  }, []);

  return (
    <>
    <Router>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/thankyou" element={<ThankYouPage />} />
        <Route path="/form" element={<ScalevForm />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
