import React from 'react'
import './App.css';
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import CardSection from './components/CardSection'
import FooterSection from './components/FooterSection'

function App() {
  return (
    <div>
        <NavBar />
        <FeatureSection />
        <HeroSection />
        <CardSection />
        <FooterSection />

    </div>
  )
}

export default App;