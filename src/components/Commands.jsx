import React from 'react';

const Commands = () => {
    return (
        <section id="docs" className="py-20 md:py-28">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">FlipFin Documentation</h2>

                <div className="space-y-16">
                    <div className="bg-card-bg border border-gray-800 rounded-2xl p-8">
                        <h3 className="text-3xl font-semibold mb-6">Getting Started</h3>
                        <div className="space-y-4 text-gray-300">
                            <p>FlipFin is your ultimate Solana trading terminal for catching the next 100x flips.</p>
                            <ol className="list-decimal list-inside space-y-2">
                                <li>Connect your Solana wallet (Phantom, Solflare, etc.)</li>
                                <li>Browse live token launches and graduating tokens</li>
                                <li>Use commands to buy, sell, and set alerts</li>
                                <li>Track your PnL and portfolio performance</li>
                            </ol>
                        </div>
                    </div>

                    <div className="bg-card-bg border border-gray-800 rounded-2xl p-8">
                        <h3 className="text-3xl font-semibold mb-6">Available Commands</h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-xl font-semibold mb-4">Trading Commands</h4>
                                <ul className="space-y-3 text-gray-400">
                                    <li><code className="bg-gray-800 px-2 py-1 rounded text-sm">/buy [token]</code> - Buy a token instantly</li>
                                    <li><code className="bg-gray-800 px-2 py-1 rounded text-sm">/sell [token]</code> - Sell a token</li>
                                    <li><code className="bg-gray-800 px-2 py-1 rounded text-sm">/alert buy [token]</code> - Set buy alert</li>
                                    <li><code className="bg-gray-800 px-2 py-1 rounded text-sm">/alert sell [token]</code> - Set sell alert</li>
                                    <li><code className="bg-gray-800 px-2 py-1 rounded text-sm">/portfolio</code> - View portfolio</li>
                                    <li><code className="bg-gray-800 px-2 py-1 rounded text-sm">/pnl</code> - Check profit/loss</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold mb-4">Information Commands</h4>
                                <ul className="space-y-3 text-gray-400">
                                    <li><code className="bg-gray-800 px-2 py-1 rounded text-sm">/flow</code> - View real-time token flow</li>
                                    <li><code className="bg-gray-800 px-2 py-1 rounded text-sm">/narratives</code> - Trending narratives</li>
                                    <li><code className="bg-gray-800 px-2 py-1 rounded text-sm">/hype</code> - Social hype and mentions</li>
                                    <li><code className="bg-gray-800 px-2 py-1 rounded text-sm">/tracker</code> - Full token tracker</li>
                                    <li><code className="bg-gray-800 px-2 py-1 rounded text-sm">/graduation</code> - Tokens about to graduate</li>
                                    <li><code className="bg-gray-800 px-2 py-1 rounded text-sm">/help</code> - Show all commands</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card-bg border border-gray-800 rounded-2xl p-8">
                        <h3 className="text-3xl font-semibold mb-6">Features</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div>
                                <h4 className="text-xl font-semibold mb-3 text-solana-green">Narratives</h4>
                                <p className="text-gray-400">Stay ahead with trending stories and cultural momentum on Solana.</p>
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold mb-3 text-accent-yellow">Graduation Radar</h4>
                                <p className="text-gray-400">Catch tokens 30-90 seconds before they hit Raydium DEX.</p>
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold mb-3 text-solana-purple">Portfolio Tracking</h4>
                                <p className="text-gray-400">Real-time PnL tracking and performance analytics.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Commands;