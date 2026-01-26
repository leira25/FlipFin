import React from 'react';
import Header from './components/sections/Header';
import Hero from './components/sections/hero';
import TokenDashboard from './components/sections/token-dashboard';
import HowItWorks from './components/sections/how-it-works';
import FeaturesShowcase from './components/sections/features-showcase';
import Testimonials from './components/sections/testimonials';
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
        <TokenDashboard />
        <HowItWorks />
        <FeaturesShowcase />
        <Testimonials />
        <EliteSpecs />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
