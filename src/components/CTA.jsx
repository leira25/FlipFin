import React from 'react';

const CTA = () => {
    return (
        <section className="cta-section section-py">
            <div className="section-container">
                <div className="cta-box !px-6 md:!px-12">
                    <h2 className="heading-xl mb-8 !text-black">
                        Stop Missing <br />
                        <span className="bg-black text-[var(--ff-primary)] px-4 py-1 inline-block mt-2">
                            Flips
                        </span>
                    </h2>
                    <p className="mb-12 text-black font-black uppercase italic text-lg md:text-xl opacity-90 leading-tight max-w-2xl mx-auto">
                        Join thousands spotting 10×–100× plays daily on Solana. Free to start — edge included.
                    </p>
                    <a href="https://flipfin.fun/"
                        className="ff-btn bg-black text-[var(--ff-primary)] px-10 py-5 text-xl md:text-2xl shadow-2xl rounded-lg hover:scale-105 transition-transform">
                        Launch Terminal Now
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CTA;
