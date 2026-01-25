import React from 'react';

const CTA = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-black to-purple-950/40 text-center">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold mb-8">Stop Missing Flips</h2>
                <p className="text-xl text-gray-300 mb-10">Join thousands spotting 10×–100× plays daily on Solana. Free to start — edge included.</p>
                <a href="https://flipfin.fun/"
                    className="inline-block px-16 py-7 bg-gradient-to-r from-solana-purple to-solana-green rounded-xl text-2xl font-bold hover:scale-105 transition transform shadow-2xl shadow-purple-700/40">Launch
                    Flip Finance Now</a>
            </div>
        </section>
    );
};

export default CTA;