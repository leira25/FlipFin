import React from 'react';
import { Book, Globe, Shield, Zap, Cpu } from 'lucide-react';

const Documentation = () => {
    return (
        <section id="how" className="how-section">
            <div className="section-container">
                <div className="mb-12 md:mb-16">
                    <h2 className="section-title">Terminal <span className="ff-text-primary">How It Works</span></h2>
                    <p style={{ color: 'var(--ff-muted)', fontWeight: '500', textTransform: 'uppercase', fontSize: '10px', letterSpacing: '0.1em' }}>The lifecycle of a high-frequency Solana trade</p>
                </div>

                <div className="feature-grid mb-12 md:mb-16">
                    {/* Phase 1 */}
                    <div className="feature-card !p-6 !rounded-lg">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="feature-icon !w-10 !h-10 !mb-0">
                                <Globe size={18} />
                            </div>
                            <h3 className="feature-title !text-lg !mb-0">1. Scouting</h3>
                        </div>
                        <p className="text-muted leading-relaxed text-sm">
                            FlipFin scans every new pool on Raydium, Meteora, and Orca in real-time. Our algorithms filter for verified social metadata, high initial liquidity, and volume-to-market-cap efficiency.
                        </p>
                    </div>

                    {/* Phase 2 */}
                    <div className="feature-card !p-6 !rounded-lg">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="feature-icon !w-10 !h-10 !mb-0">
                                <Shield size={18} />
                            </div>
                            <h3 className="feature-title !text-lg !mb-0">2. Assessment</h3>
                        </div>
                        <p className="text-muted leading-relaxed text-sm">
                            Automated rug-check protocols analyze contract mint authority, freeze authority, and top holder concentration. We only present opportunities that meet our strict "Safe-Entry" criteria.
                        </p>
                    </div>

                    {/* Phase 3 */}
                    <div className="feature-card !p-6 !rounded-lg">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="feature-icon !w-10 !h-10 !mb-0">
                                <Zap size={18} />
                            </div>
                            <h3 className="feature-title !text-lg !mb-0">3. Execution</h3>
                        </div>
                        <p className="text-muted leading-relaxed text-sm">
                            Execute trades with sub-40ms latency. Our private RPC nodes and Jito-integration bypass public congestion to ensure your transaction lands first in the block.
                        </p>
                    </div>

                    {/* Phase 4 */}
                    <div className="feature-card !p-6 !rounded-lg">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="feature-icon !w-10 !h-10 !mb-0">
                                <Cpu size={18} />
                            </div>
                            <h3 className="feature-title !text-lg !mb-0">4. Automation</h3>
                        </div>
                        <p className="text-muted leading-relaxed text-sm">
                            Go beyond manual trading with Copy Trading and AI-powered Sniper Bots. Follow alpha-wallets automatically or capture new launches the moment liquidity is added.
                        </p>
                    </div>
                </div>

                <div className="bg-[#0d1117] border border-[var(--ff-border)] rounded-xl p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-8">
                        <Book className="ff-text-primary" size={20} />
                        <h3 className="text-base font-black uppercase tracking-widest">Professional Solana Infrastructure</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                        <div>
                            <h4 className="text-white text-base font-bold mb-2">Institutional Analytics</h4>
                            <p className="text-muted text-xs leading-relaxed">Real-time OHLCV data via Birdeye, detailed holder distribution maps, and smart money tracking.</p>
                        </div>
                        <div>
                            <h4 className="text-white text-base font-bold mb-2">X Post Generator</h4>
                            <p className="text-muted text-xs leading-relaxed">Professional marketing tools for token creators and alpha seekers to generate instant hype on X.</p>
                        </div>
                        <div>
                            <h4 className="text-white text-base font-bold mb-2">Points & Rewards</h4>
                            <p className="text-muted text-xs leading-relaxed">Gamified trading experience—earn points for every swap and climb the global leaderboard.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Documentation;
