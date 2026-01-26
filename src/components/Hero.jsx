import React, { useState, useEffect } from 'react';

const Hero = () => {
    return (
        <section className="hero-section relative overflow-hidden">
            <div className="hero-glow"></div>

            <div className="section-container relative z-10">
                <div className="flex justify-center mb-12">
                    <div className="relative">
                        <div className="absolute inset-0 bg-[var(--ff-primary)] blur-[60px] opacity-15"></div>
                        <img src="/logo.png" alt="FlipFin Logo" className="h-24 md:h-32 w-auto relative z-10" />
                    </div>
                </div>

                <h1 className="hero-title mb-6">
                    Flip<span className="ff-text-primary cyber-glow-text">Fin</span>
                </h1>
                <p className="hero-subtitle mb-12 max-w-2xl mx-auto">
                    The professional-grade crypto trading terminal for the <span className="text-white font-semibold">Solana</span> ecosystem. Catch flips and 100x opportunities with real-time data.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <a href="https://flipfin.fun/" className="ff-btn ff-btn-primary px-10 py-4.5 text-lg w-full sm:w-auto min-w-[240px]">
                        Launch Terminal
                    </a>
                    <a href="#why" className="ff-btn ff-btn-secondary px-10 py-4.5 text-lg w-full sm:w-auto min-w-[240px]">
                        View Specs
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
