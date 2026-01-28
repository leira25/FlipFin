import React from 'react';

const CTASection = () => {
  return (
    <section className="cta-section py-[120px] px-4 md:px-8 bg-[#05080a]">
      <div className="container mx-auto max-w-[1280px]">
        {/* Massive vibrant green box with scanline texture */}
        <div 
          className="cta-box relative w-full rounded-[8px] bg-[#10b981] p-12 md:p-20 flex flex-col items-center text-center overflow-hidden"
          style={{ boxShadow: '0 0 40px rgba(16, 185, 129, 0.15)' }}
        >
          
          {/* Scanline texture overlay */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage: `repeating-linear-gradient(
                0deg,
                rgba(0, 0, 0, 0.2),
                rgba(0, 0, 0, 0.2) 1px,
                transparent 1px,
                transparent 2px
              )`
            }}
          />

          {/* Heading Content */}
          <h2 className="cta-title relative z-10 text-[48px] md:text-[80px] font-extrabold italic uppercase leading-[1] text-[#05080a] mb-8 tracking-tight font-sans">
            Stop Missing <br />
            <span className="bg-[#05080a] text-[#10b981] px-4 inline-block mt-2">
              Flips
            </span>
          </h2>

          {/* Subtext */}
          <p className="relative z-10 text-[16px] md:text-[18px] font-medium text-[#05080a] opacity-90 mb-10 max-w-[600px] uppercase italic tracking-wider">
            Join thousands spotting 10×–100× plays daily on Solana. <br className="hidden md:block" />
            Free to start — edge included.
          </p>

          {/* Black Button */}
          <a 
            href="https://qa.flipfin.fun/"
            className="relative z-10 ff-btn flex items-center justify-center bg-[#05080a] text-[#ffffff] px-10 py-5 rounded-[4px] text-[15px] font-bold uppercase italic tracking-widest hover:scale-[1.02] transition-transform duration-200"
          >
            Launch Terminal Now
          </a>

          {/* Sublte inner glow effect */}
          <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.1)] pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default CTASection;
