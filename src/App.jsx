import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedTokens from './components/FeaturedTokens';
import WhyFlip from './components/WhyFlip';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-background text-foreground min-h-screen cyber-grid">
      <div className="cyber-scanline"></div>
      <Header />
      <main>
        <Hero />
        <FeaturedTokens />
        <WhyFlip />
        <HowItWorks />
        <CTA />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
