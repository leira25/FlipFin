import React from 'react';

const HowItWorks = () => {
    return (
        <section id="how" className="how-section section-py bg-[var(--ff-card)]">
            <div className="section-container">
                <div className="text-center mb-20 md:mb-32">
                    <h2 className="heading-lg mb-4">The <span className="ff-text-primary cyber-glow-text">Workflow</span></h2>
                    <p className="text-[var(--ff-muted)] font-medium uppercase text-sm tracking-widest">Master the terminal in three steps</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-10">
                    <div className="text-center group">
                        <div className="step-number mb-8 group-hover:text-[var(--ff-primary)] group-hover:opacity-10 transition-all duration-500">01</div>
                        <h3 className="font-black text-2xl md:text-3xl italic uppercase mb-6 group-hover:text-[var(--ff-primary)] transition-colors">Open <span className="ff-text-primary">Terminal</span></h3>
                        <p className="text-[var(--ff-muted)] leading-relaxed text-lg font-medium">Instant access to the live Solana stream. No registration required to view professional-grade market data.</p>
                    </div>

                    <div className="text-center group">
                        <div className="step-number mb-8 group-hover:text-[var(--ff-primary)] group-hover:opacity-10 transition-all duration-500">02</div>
                        <h3 className="font-black text-2xl md:text-3xl italic uppercase mb-6 group-hover:text-[var(--ff-primary)] transition-colors">Analyze <span className="ff-text-primary">Narratives</span></h3>
                        <p className="text-[var(--ff-muted)] leading-relaxed text-lg font-medium">Filter by market cap, volume, and graduation progress. Follow the hype live through our social metrics.</p>
                    </div>

                    <div className="text-center group">
                        <div className="step-number mb-8 group-hover:text-[var(--ff-primary)] group-hover:opacity-10 transition-all duration-500">03</div>
                        <h3 className="font-black text-2xl md:text-3xl italic uppercase mb-6 group-hover:text-[var(--ff-primary)] transition-colors">Execute <span className="ff-text-primary">Flips</span></h3>
                        <p className="text-[var(--ff-muted)] leading-relaxed text-lg font-medium">Connect and trade with precision. Monitor your PnL in real-time and manage your Solana portfolio.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
