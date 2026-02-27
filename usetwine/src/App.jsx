import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import VideoHero from './components/VideoHero'
import BuiltWithSection from './components/BuiltWithSection'
import WhySection from './components/WhySection'
import EverythingSection from './components/EverythingSection'
import FeaturesSection from './components/FeaturesSection'
import TestimonialSection from './components/TestimonialSection'
import JumpSection from './components/JumpSection'
import FAQSection from './components/FAQSection'
import Footer from './components/Footer'
import CTASection from './components/CTASection'

const App = () => {
  return (
    <div>

  <Navbar />
  <Hero />
  <VideoHero />
  <BuiltWithSection />
  <WhySection />
  <EverythingSection />
  <FeaturesSection />
  <TestimonialSection />
  <JumpSection />
  <FAQSection />
  <Footer />
  <CTASection />
</div>
  )
}

export default App