import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyFlip from './components/WhyFlip';
import HowItWorks from './components/HowItWorks';
import FeaturedTokens from './components/FeaturedTokens';
import Documentation from './components/Documentation';
import CTA from './components/CTA';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#0b0e11] text-white selection:bg-[#02c076] selection:text-black">
      <Header />
      <main>
        <Hero />
        <FeaturedTokens />
        <WhyFlip />
        <HowItWorks />
        <Documentation />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
