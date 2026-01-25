import React from 'react';

const HowItWorks = () => {
    return (
        <section id="how" className="py-24 md:py-32 bg-card/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-4">The <span className="text-primary">Workflow</span></h2>
                    <p className="text-muted-foreground font-medium uppercase text-xs tracking-[0.3em]">Master the terminal in three steps</p>
                </div>

                <div className="grid md:grid-cols-3 gap-12 relative">
                    <div className="absolute hidden md:block top-1/2 left-[15%] right-[15%] h-px bg-border -translate-y-1/2"></div>

                    <div className="relative z-10 text-center group">
                        <div className="w-20 h-20 mx-auto mb-8 bg-card border border-border rounded flex items-center justify-center text-3xl font-black italic group-hover:border-primary group-hover:text-primary transition">
                            01</div>
                        <h3 className="text-2xl font-black italic uppercase mb-4 tracking-tight">Open <span className="text-primary">Terminal</span></h3>
                        <p className="text-muted-foreground leading-relaxed font-medium">Instant access to the live Solana stream. No registration required to view professional-grade market data.</p>
                    </div>

                    <div className="relative z-10 text-center group">
                        <div className="w-20 h-20 mx-auto mb-8 bg-card border border-border rounded flex items-center justify-center text-3xl font-black italic group-hover:border-primary group-hover:text-primary transition">
                            02</div>
                        <h3 className="text-2xl font-black italic uppercase mb-4 tracking-tight">Analyze <span className="text-primary">Narratives</span></h3>
                        <p className="text-muted-foreground leading-relaxed font-medium">Filter by market cap, volume, and graduation progress. Follow the hype live through our social metrics.</p>
                    </div>

                    <div className="relative z-10 text-center group">
                        <div className="w-20 h-20 mx-auto mb-8 bg-card border border-border rounded flex items-center justify-center text-3xl font-black italic group-hover:border-primary group-hover:text-primary transition">
                            03</div>
                        <h3 className="text-2xl font-black italic uppercase mb-4 tracking-tight">Execute <span className="text-primary">Flips</span></h3>
                        <p className="text-muted-foreground leading-relaxed font-medium">Connect and trade with precision. Monitor your PnL in real-time and manage your Solana portfolio.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
