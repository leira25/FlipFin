import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedTokens from './components/FeaturedTokens';
import WhyFlip from './components/WhyFlip';
import HowItWorks from './components/HowItWorks';
import Documentation from './components/Documentation';
import CTA from './components/CTA';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0b0e11] text-white">
      <Header />
      <main>
        <Hero />
        <FeaturedTokens />
        <WhyFlip />
        <HowItWorks />
        <Documentation />
        <CTA />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
