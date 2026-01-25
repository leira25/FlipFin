import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedTokens from './components/FeaturedTokens';
import WhyFlip from './components/WhyFlip';
import HowItWorks from './components/HowItWorks';
import Commands from './components/Commands';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0b0e11] text-white font-sans selection:bg-primary selection:text-black">
      <Header />
      <main>
        <Hero />
        <FeaturedTokens />
        <WhyFlip />
        <HowItWorks />
        <Commands />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
