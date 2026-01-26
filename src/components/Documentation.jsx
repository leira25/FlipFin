import React from 'react';
import { Book, Code, Terminal, Zap, Shield, Globe, Cpu, BarChart3 } from 'lucide-react';

const Documentation = () => {
    return (
        <section id="how" className="section-py relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #0b0e11, #0d1117)' }}>
            <div className="section-container">
                <div className="mb-16 md:mb-24">
                    <h2 className="heading-lg mb-4">Terminal <span className="ff-text-primary">How It Works</span></h2>
                    <p className="text-muted-caps">The lifecycle of a high-frequency Solana trade</p>
                </div>

                <div className="feature-grid mb-16 md:mb-24">
                    {/* Phase 1 */}
                    <div className="feature-card !p-8 !rounded-xl">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="feature-icon !w-12 !h-12 !mb-0">
                                <Globe size={20} />
                            </div>
                            <h3 className="feature-title !text-xl !mb-0">1. Liquidity Scouting</h3>
                        </div>
                        <p className="text-muted leading-relaxed text-base">
                            FlipFin scans every new pool on Raydium, Meteora, and Orca in real-time. Our algorithms filter for verified social metadata, high initial liquidity, and volume-to-market-cap efficiency.
                        </p>
                    </div>

                    {/* Phase 2 */}
                    <div className="feature-card !p-8 !rounded-xl">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="feature-icon !w-12 !h-12 !mb-0">
                                <Shield size={20} />
                            </div>
                            <h3 className="feature-title !text-xl !mb-0">2. Risk Assessment</h3>
                        </div>
                        <p className="text-muted leading-relaxed text-base">
                            Automated rug-check protocols analyze contract mint authority, freeze authority, and top holder concentration. We only present opportunities that meet our strict "Safe-Entry" criteria.
                        </p>
                    </div>

                    {/* Phase 3 */}
                    <div className="feature-card !p-8 !rounded-xl">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="feature-icon !w-12 !h-12 !mb-0">
                                <Zap size={20} />
                            </div>
                            <h3 className="feature-title !text-xl !mb-0">3. Tactical Entry</h3>
                        </div>
                        <p className="text-muted leading-relaxed text-base">
                            Execute trades with sub-40ms latency. Our private RPC nodes and Jito-integration bypass public congestion to ensure your transaction lands first in the block.
                        </p>
                    </div>

                    {/* Phase 4 */}
                    <div className="feature-card !p-8 !rounded-xl">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="feature-icon !w-12 !h-12 !mb-0">
                                <Cpu size={20} />
                            </div>
                            <h3 className="feature-title !text-xl !mb-0">4. Advanced Automation</h3>
                        </div>
                        <p className="text-muted leading-relaxed text-base">
                            Go beyond manual trading with Copy Trading and AI-powered Sniper Bots. Follow alpha-wallets automatically or capture new launches the moment liquidity is added.
                        </p>
                    </div>
                </div>

                <div className="bg-[#0d1117] border border-[var(--ff-border)] rounded-2xl p-8 md:p-12">
                    <div className="flex items-center gap-3 mb-10">
                        <Book className="ff-text-primary" size={24} />
                        <h3 className="text-lg font-black uppercase tracking-widest">Professional Solana Infrastructure</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
                        <div>
                            <h4 className="text-white text-lg font-bold mb-3">Institutional Analytics</h4>
                            <p className="text-muted text-sm leading-relaxed">Real-time OHLCV data via Birdeye, detailed holder distribution maps, and smart money tracking.</p>
                        </div>
                        <div>
                            <h4 className="text-white text-lg font-bold mb-3">X Post Generator</h4>
                            <p className="text-muted text-sm leading-relaxed">Professional marketing tools for token creators and alpha seekers to generate instant hype on X.</p>
                        </div>
                        <div>
                            <h4 className="text-white text-lg font-bold mb-3">Points & Rewards</h4>
                            <p className="text-muted text-sm leading-relaxed">Gamified trading experience—earn points for every swap and climb the global leaderboard.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Documentation;
