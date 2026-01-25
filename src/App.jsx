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
    <div className="min-h-screen" style={{ backgroundColor: 'var(--ff-background)', color: 'var(--ff-foreground)', fontFamily: 'var(--ff-font-sans)' }}>
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
