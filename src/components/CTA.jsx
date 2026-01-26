import React from 'react';

const CTA = () => {
    return (
        <section className="cta-section section-py">
            <div className="section-container">
                <div className="cta-box px-8 md:px-16 py-20 md:py-32">
                    <h2 className="cta-title">
                        Stop Missing <br />
                        <span className="bg-black text-[var(--ff-primary)] px-6 py-2 inline-block mt-4 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                            Flips
                        </span>
                    </h2>
                    <p className="mb-12 text-black font-black uppercase italic text-xl md:text-2xl opacity-90 leading-tight max-w-2xl mx-auto">
                        Join thousands spotting 10×–100× plays daily on Solana. Free to start — edge included.
                    </p>
                    <a href="https://flipfin.fun/"
                        className="ff-btn bg-black text-[var(--ff-primary)] px-12 py-6 text-2xl md:text-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:scale-105 transition-transform">
                        Launch Terminal
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CTA;
