import React, { useState, useEffect } from 'react';

const Hero = () => {
    return (
        <section className="hero-section relative overflow-hidden">
            <div className="hero-glow"></div>

            <div className="section-container relative z-10">
                <div className="flex justify-center mb-8">
                    <div className="relative">
                        <div className="absolute inset-0 bg-[var(--ff-primary)] blur-[60px] opacity-15"></div>
                        <img src="/logo.png" alt="FlipFin Logo" className="h-20 md:h-24 w-auto relative z-10" />
                    </div>
                </div>

                <h1 className="hero-title mb-4">
                    Flip<span className="ff-text-primary cyber-glow-text">Fin</span>
                </h1>
                <p className="hero-subtitle mb-8 max-w-xl mx-auto">
                    The professional-grade crypto trading terminal for the <span className="text-white font-semibold">Solana</span> ecosystem. Catch flips and 100x opportunities with real-time data.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href="https://flipfin.fun/" className="ff-btn ff-btn-primary px-8 py-3.5 text-base w-full sm:w-auto min-w-[200px]">
                        Launch Terminal
                    </a>
                    <a href="#why" className="ff-btn ff-btn-secondary px-8 py-3.5 text-base w-full sm:w-auto min-w-[200px]">
                        View Specs
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
