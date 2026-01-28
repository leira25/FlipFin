import React from 'react';

const CTA = () => {
    return (
        <section className="cta-section">
            <div className="section-container">
                <div className="cta-box px-8 md:px-16 py-12 md:py-20">
                    <h2 className="cta-title">
                        Stop Missing <br />
                        <span className="bg-black text-[var(--ff-primary)] px-4 py-1.5 inline-block mt-3 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                            Flips
                        </span>
                    </h2>
                    <p className="mb-8 text-black font-black uppercase italic text-lg md:text-xl opacity-90 leading-tight max-w-xl mx-auto">
                        Join thousands spotting 10×–100× plays daily on Solana. Free to start — edge included.
                    </p>
                    <a href="https://qa.flipfin.fun/"
                        className="ff-btn bg-black text-[var(--ff-primary)] px-8 py-4 text-xl md:text-2xl shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:scale-105 transition-transform">
                        Launch Terminal
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CTA;
