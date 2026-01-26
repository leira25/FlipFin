import React from 'react';
import { Shield, Zap, Target } from 'lucide-react';

const WhyFlip = () => {
    return (
        <section id="why" className="why-section section-py">
            <div className="section-container">
                <div className="text-center mb-16 md:mb-24">
                    <h2 className="heading-lg mb-4">Elite <span className="ff-text-primary">Specs</span></h2>
                    <p className="text-muted-caps">Engineered for professional Solana traders</p>
                </div>

                <div className="feature-grid">
                    <div className="feature-card">
                        <div className="feature-icon">
                            <Shield size={32} />
                        </div>
                        <h3 className="feature-title">Reinforced <span className="ff-text-primary">Security</span></h3>
                        <p className="text-muted leading-relaxed text-lg">Connect your wallet with military-grade encryption. Every transaction is verified through our secure node infrastructure to ensure your assets are protected while you flip.</p>
                        <div className="mt-8 pt-8 border-t border-[var(--ff-border)] flex items-center gap-2 text-xs font-black uppercase text-[var(--ff-primary)]">
                            <span>Status: Verified</span>
                            <div className="w-1 h-1 rounded-full bg-[var(--ff-primary)]"></div>
                        </div>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">
                            <Zap size={32} />
                        </div>
                        <h3 className="feature-title">Pulse <span className="ff-text-primary">Execution</span></h3>
                        <p className="text-muted leading-relaxed text-lg">Sub-second token detection and instant execution. Our optimized routing engine ensures you get the best entries on trending Solana launches before the crowd even sees them.</p>
                        <div className="mt-8 pt-8 border-t border-[var(--ff-border)] flex items-center gap-2 text-xs font-black uppercase text-[var(--ff-primary)]">
                            <span>Latency: 42ms</span>
                            <div className="w-1 h-1 rounded-full bg-[var(--ff-primary)]"></div>
                        </div>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">
                            <Target size={32} />
                        </div>
                        <h3 className="feature-title">Precision <span className="ff-text-primary">Signals</span></h3>
                        <p className="text-muted leading-relaxed text-lg">Advanced data-dense interface with real-time narratives and hype tracking. Identify high-conviction plays using our proprietary graduation metrics and bonding curve analysis.</p>
                        <div className="mt-8 pt-8 border-t border-[var(--ff-border)] flex items-center gap-2 text-xs font-black uppercase text-[var(--ff-primary)]">
                            <span>Accuracy: Optimal</span>
                            <div className="w-1 h-1 rounded-full bg-[var(--ff-primary)]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyFlip;
