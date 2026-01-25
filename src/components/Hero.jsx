import React from 'react';

const Hero = () => {
    return (
        <section className="pt-28 pb-16 md:pt-40 md:pb-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-950/40 via-indigo-950/20 to-black pointer-events-none">
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <div className="flex justify-center mb-6">
                    <img src="/logo.png" alt="Flip Finance Logo" className="h-24 w-auto md:h-32 logo-img drop-shadow-2xl" />
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
                    Flip Finance
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
                    The easiest way to catch Solana flips and 100x opportunities.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-5 mb-12">
                    <a href="https://flipfin.fun/"
                        className="px-12 py-6 bg-gradient-to-r from-solana-purple to-solana-green rounded-xl font-bold text-xl hover:scale-105 transition transform shadow-xl shadow-purple-700/30">Open
                        Terminal →</a>
                    <a href="#why"
                        className="px-12 py-6 bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-xl font-semibold text-xl hover:bg-gray-700/60 transition">Why
                        Flip?</a>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-6 bg-black/50 backdrop-blur-lg border border-gray-800 rounded-2xl px-6 py-8 max-w-5xl mx-auto">
                    <div>
                        <div className="text-4xl font-bold text-solana-green">12+</div>
                        <div className="text-sm text-gray-400 mt-1">New Creations</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-accent-yellow">29</div>
                        <div className="text-sm text-gray-400 mt-1">About to Graduate</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-purple-400">4</div>
                        <div className="text-sm text-gray-400 mt-1">Graduated Today</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-blue-400">0</div>
                        <div className="text-sm text-gray-400 mt-1">Your Favorites</div>
                    </div>
                    <div className="col-span-2 md:col-span-1">
                        <div className="text-4xl font-bold text-solana-green">$142</div>
                        <div className="text-sm text-gray-400 mt-1">SOL Price</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;