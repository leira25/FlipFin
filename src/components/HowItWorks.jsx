import React from 'react';

const HowItWorks = () => {
    return (
        <section className="py-20 md:py-28">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">How Flip Works</h2>

                <div className="grid md:grid-cols-3 gap-10 relative">
                    <div className="absolute hidden md:block top-1/2 left-1/4 right-1/4 h-1 bg-gradient-to-r from-solana-purple to-solana-green opacity-40">
                    </div>

                    <div className="bg-card-bg border border-gray-800 rounded-2xl p-8 relative z-10 text-center">
                        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-solana-purple/20 flex items-center justify-center text-3xl">
                            1</div>
                        <h3 className="text-2xl font-semibold mb-4">Open Terminal</h3>
                        <p className="text-gray-400">Browse instantly — no login needed to see live data.</p>
                    </div>
                    <div className="bg-card-bg border border-gray-800 rounded-2xl p-8 relative z-10 text-center">
                        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-solana-green/20 flex items-center justify-center text-3xl">
                            2</div>
                        <h3 className="text-2xl font-semibold mb-4">Filter & Watch</h3>
                        <p className="text-gray-400">Sort by age, % change, MC, volume — follow Flow & Narratives live.</p>
                    </div>
                    <div className="bg-card-bg border border-gray-800 rounded-2xl p-8 relative z-10 text-center">
                        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent-yellow/20 flex items-center justify-center text-3xl">
                            3</div>
                        <h3 className="text-2xl font-semibold mb-4">Flip & Track</h3>
                        <p className="text-gray-400">Favorite tokens, monitor PnL, catch the next big graduate pump.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;