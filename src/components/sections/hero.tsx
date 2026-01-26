import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative min-h-[676px] w-full bg-[#05080a] pt-[112px] pb-[140px] px-[21px] flex flex-col items-center justify-center overflow-hidden">
      {/* Hero Radial Glow Background */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1120px] h-[560px] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)'
        }}
      ></div>

      {/* Cyber Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0 cyber-grid"></div>

      <div className="relative z-10 max-w-[896px] w-full text-center flex flex-col items-center">
        {/* Large FlipFin Logo */}
        <div className="mb-[28px] relative group">
          <div className="absolute inset-0 bg-[#10b981] blur-md opacity-20 group-hover:opacity-40 transition-opacity"></div>
          <img
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/72adb3de-1a58-45c8-82a3-8edac240bd60-c-users-ariel-desktop-flipfin-vercel-app/assets/icons/logo-1.png"
            alt="FlipFin Logo"
            width={105}
            height={84}
            className="relative z-10 object-contain"
          />
        </div>

        {/* Main Title with Neon Glow */}
        <h1 className="hero-title mb-[21px] text-white tracking-widest italic uppercase">
          Flip<span className="text-[#10b981] cyber-glow">Fin</span>
        </h1>

        {/* Descriptive Subtitle */}
        <p className="hero-subtitle mb-[49px] max-w-[560px] text-[#94a3b8] text-[16px] md:text-[18.9px] leading-[1.6] font-sans px-4">
          The professional-grade crypto trading terminal for the <span className="text-white">Solana</span> ecosystem. Catch flips and 100x opportunities with real-time data.
        </p>

        {/* Dual Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-[16px] md:gap-[21px] w-full sm:w-auto px-6">
          <a
            href="https://flipfin.fun/"
            className="flex w-full sm:w-auto items-center justify-center bg-[#10b981] text-[#05080a] px-[42px] py-[17.5px] rounded-[3.5px] text-[17.5px] font-bold uppercase tracking-wider hover:bg-[#0da673] transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
          >
            Launch Terminal
          </a>
          <a
            href="#elite-specs"
            className="flex w-full sm:w-auto items-center justify-center border border-[#121e1a] bg-transparent text-white px-[42px] py-[17.5px] rounded-[3.5px] text-[17.5px] font-medium uppercase tracking-wider hover:bg-[#121e1a] transition-all duration-300"
          >
            View Specs
          </a>
        </div>
        <button
          onClick={() => navigator.clipboard.writeText("CA: SOON")}
          className="mt-4 text-sm text-[#94a3b8] font-mono tracking-wider hover:text-white transition-colors cursor-pointer text-left"
        >
          CA: SOON!
        </button>
      </div>

      {/* Decorative Scanline effect */}
      <div className="absolute inset-0 pointer-events-none z-20 opacity-[0.03] overflow-hidden">
        <div className="w-full h-full" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #fff 3px)',
          backgroundSize: '100% 4px'
        }}></div>
      </div>
    </section>
  );
};

export default HeroSection;
