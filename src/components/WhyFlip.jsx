import React from 'react';

const WhyFlip = () => {
    return (
        <section id="why" className="py-20 md:py-28 bg-black/40">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Why Degens Choose Flip</h2>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-card-bg border border-gray-800 rounded-2xl p-8 hover:border-solana-green/60 transition group text-center">
                        <div className="text-5xl mb-6">🔒</div>
                        <h3 className="text-2xl font-semibold mb-4">Secure</h3>
                        <p className="text-gray-400">Connect your wallet securely and trade with confidence on Solana.</p>
                    </div>
                    <div className="bg-card-bg border border-gray-800 rounded-2xl p-8 hover:border-solana-green/60 transition group text-center">
                        <div className="text-5xl mb-6">⚡</div>
                        <h3 className="text-2xl font-semibold mb-4">Fast</h3>
                        <p className="text-gray-400">Lightning-fast token detection and instant trading execution.</p>
                    </div>
                    <div className="bg-card-bg border border-gray-800 rounded-2xl p-8 hover:border-solana-green/60 transition group text-center">
                        <div className="text-5xl mb-6">🎯</div>
                        <h3 className="text-2xl font-semibold mb-4">Easy</h3>
                        <p className="text-gray-400">Simple commands and intuitive interface for catching flips.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyFlip;