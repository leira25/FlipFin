import React from 'react';

const FeaturedTokens = () => {
    return (
        <section className="py-20 bg-black/50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center mb-12">Live Action Right Now</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-card-bg border border-gray-800 rounded-xl p-6 hover:border-solana-green/50 transition">
                        <div className="flex justify-between items-center mb-4">
                            <span className="font-bold text-lg">$MOONCAT</span>
                            <span className="text-solana-green font-bold">+842%</span>
                        </div>
                        <div className="text-sm text-gray-400">Age: 14m • MC: $420k • Vol: $1.2M</div>
                        <div className="mt-4 text-xs text-gray-500">New creation • Trending on Hype</div>
                    </div>
                    <div className="bg-card-bg border border-gray-800 rounded-xl p-6 hover:border-solana-green/50 transition">
                        <div className="flex justify-between items-center mb-4">
                            <span className="font-bold text-lg">$GRADIENT</span>
                            <span className="text-accent-yellow font-bold">Graduating</span>
                        </div>
                        <div className="text-sm text-gray-400">Age: 58m • MC: $890k • Progress: 92%</div>
                        <div className="mt-4 text-xs text-gray-500">About to hit Raydium</div>
                    </div>
                    <div className="bg-card-bg border border-gray-800 rounded-xl p-6 hover:border-solana-green/50 transition">
                        <div className="flex justify-between items-center mb-4">
                            <span className="font-bold text-lg">$PUMPED</span>
                            <span className="text-purple-400 font-bold">+1,240%</span>
                        </div>
                        <div className="text-sm text-gray-400">Age: 4h • MC: $3.1M • Vol: $8.9M</div>
                        <div className="mt-4 text-xs text-gray-500">Graduated today • Narrative: AI cats</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedTokens;