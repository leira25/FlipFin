import React from 'react';
import { Shield, Zap, Target } from 'lucide-react';

const WhyFlip = () => {
    return (
        <section id="why" className="why-section section-py bg-[var(--ff-bg)]">
            <div className="section-container">
                <div className="text-center mb-20 md:mb-32">
                    <h2 className="heading-lg mb-4">Elite <span className="ff-text-primary cyber-glow-text">Specs</span></h2>
                    <p className="text-[var(--ff-muted)] font-medium uppercase text-sm tracking-widest">Engineered for professional Solana traders</p>
                </div>

                <div className="feature-grid">
                    <div className="feature-card group">
                        <div className="feature-icon group-hover:scale-110 transition-transform">
                            <Shield size={36} />
                        </div>
                        <h3 className="feature-title mb-6">Reinforced <span className="ff-text-primary">Security</span></h3>
                        <p className="text-[var(--ff-muted)] leading-relaxed text-lg">Connect your wallet with military-grade encryption. Every transaction is verified through our secure node infrastructure to ensure your assets are protected while you flip.</p>
                        <div className="mt-10 pt-8 border-t border-[var(--ff-border)] flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-[var(--ff-primary)]">
                            <div className="w-1.5 h-1.5 rounded-full bg-[var(--ff-primary)] shadow-[0_0_8px_var(--ff-primary)]"></div>
                            <span>Status: Verified</span>
                        </div>
                    </div>

                    <div className="feature-card group">
                        <div className="feature-icon group-hover:scale-110 transition-transform">
                            <Zap size={36} />
                        </div>
                        <h3 className="feature-title mb-6">Pulse <span className="ff-text-primary">Execution</span></h3>
                        <p className="text-[var(--ff-muted)] leading-relaxed text-lg">Sub-second token detection and instant execution. Our optimized routing engine ensures you get the best entries on trending Solana launches before the crowd even sees them.</p>
                        <div className="mt-10 pt-8 border-t border-[var(--ff-border)] flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-[var(--ff-primary)]">
                            <div className="w-1.5 h-1.5 rounded-full bg-[var(--ff-primary)] shadow-[0_0_8px_var(--ff-primary)]"></div>
                            <span>Latency: 42ms</span>
                        </div>
                    </div>

                    <div className="feature-card group">
                        <div className="feature-icon group-hover:scale-110 transition-transform">
                            <Target size={36} />
                        </div>
                        <h3 className="feature-title mb-6">Precision <span className="ff-text-primary">Signals</span></h3>
                        <p className="text-[var(--ff-muted)] leading-relaxed text-lg">Advanced data-dense interface with real-time narratives and hype tracking. Identify high-conviction plays using our proprietary graduation metrics and bonding curve analysis.</p>
                        <div className="mt-10 pt-8 border-t border-[var(--ff-border)] flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-[var(--ff-primary)]">
                            <div className="w-1.5 h-1.5 rounded-full bg-[var(--ff-primary)] shadow-[0_0_8px_var(--ff-primary)]"></div>
                            <span>Accuracy: Optimal</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyFlip;
