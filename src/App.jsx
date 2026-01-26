import React from 'react';
import Header from './components/sections/Header';
import Hero from './components/sections/hero';
import HowItWorks from './components/sections/how-it-works';
import EliteSpecs from './components/sections/elite-specs';
import FAQ from './components/sections/faq';
import CTA from './components/sections/cta';
import Footer from './components/sections/footer';

function App() {
  return (
    <div className="bg-[#05080a] text-white selection:bg-[#10b981] selection:text-[#05080a] scanlines">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <EliteSpecs />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
