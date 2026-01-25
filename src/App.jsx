import Header from './components/Header';
import Hero from './components/Hero';
import WhyFlip from './components/WhyFlip';
import HowItWorks from './components/HowItWorks';
import FeaturedTokens from './components/FeaturedTokens';
import CTA from './components/CTA';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-dark-bg text-gray-100 min-h-screen">
      <Header />
      <Hero />
      <WhyFlip />
      <HowItWorks />
      <FeaturedTokens />
      <CTA />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;