import React from 'react';

const CTA = () => {
    return (
        <section className="py-32 bg-primary text-black relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.1)_0%,transparent_70%)] pointer-events-none"></div>
            
            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                <h2 className="text-5xl md:text-8xl font-black mb-8 italic uppercase tracking-tighter leading-none">
                    Stop Missing <br /><span className="bg-black text-primary px-4">Flips</span>
                </h2>
                <p className="text-xl md:text-2xl font-black uppercase italic mb-12 opacity-80">
                    Join thousands spotting 10×–100× plays daily on Solana. Free to start — edge included.
                </p>
                <a href="https://flipfin.fun/"
                    className="inline-block px-16 py-7 bg-black text-primary rounded font-black text-3xl italic uppercase hover:scale-105 transition transform shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                    Launch Terminal Now
                </a>
            </div>
        </section>
    );
};

export default CTA;
