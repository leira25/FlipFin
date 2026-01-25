import React from 'react';
import { Shield, Zap, Target } from 'lucide-react';

const WhyFlip = () => {
    return (
        <section id="why" className="py-24 md:py-32 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-4">Elite <span className="text-primary">Specs</span></h2>
                    <p className="text-muted-foreground font-medium uppercase text-xs tracking-[0.3em]">Engineered for professional Solana traders</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-card border border-border rounded p-10 hover:border-primary transition group relative">
                        <div className="absolute top-4 right-4 text-primary opacity-20 group-hover:opacity-100 transition">
                            <Shield size={32} />
                        </div>
                        <h3 className="text-3xl font-black italic uppercase mb-6 tracking-tight">Reinforced <span className="text-primary">Security</span></h3>
                        <p className="text-muted-foreground leading-relaxed font-medium">Connect your wallet with military-grade encryption. Every transaction is verified through our secure node infrastructure to ensure your assets are protected while you flip.</p>
                        <div className="mt-8 pt-8 border-t border-border flex items-center gap-2 text-[10px] font-black uppercase text-primary">
                            <span>Status: Verified</span>
                            <div className="w-1 h-1 rounded-full bg-primary"></div>
                        </div>
                    </div>

                    <div className="bg-card border border-border rounded p-10 hover:border-primary transition group relative overflow-hidden">
                        <div className="absolute top-4 right-4 text-primary opacity-20 group-hover:opacity-100 transition">
                            <Zap size={32} />
                        </div>
                        <h3 className="text-3xl font-black italic uppercase mb-6 tracking-tight">Pulse <span className="text-primary">Execution</span></h3>
                        <p className="text-muted-foreground leading-relaxed font-medium">Sub-second token detection and instant execution. Our optimized routing engine ensures you get the best entries on trending Solana launches before the crowd even sees them.</p>
                        <div className="mt-8 pt-8 border-t border-border flex items-center gap-2 text-[10px] font-black uppercase text-primary">
                            <span>Latency: 42ms</span>
                            <div className="w-1 h-1 rounded-full bg-primary"></div>
                        </div>
                    </div>

                    <div className="bg-card border border-border rounded p-10 hover:border-primary transition group relative">
                        <div className="absolute top-4 right-4 text-primary opacity-20 group-hover:opacity-100 transition">
                            <Target size={32} />
                        </div>
                        <h3 className="text-3xl font-black italic uppercase mb-6 tracking-tight">Precision <span className="text-primary">Signals</span></h3>
                        <p className="text-muted-foreground leading-relaxed font-medium">Advanced data-dense interface with real-time narratives and hype tracking. Identify high-conviction plays using our proprietary graduation metrics and bonding curve analysis.</p>
                        <div className="mt-8 pt-8 border-t border-border flex items-center gap-2 text-[10px] font-black uppercase text-primary">
                            <span>Accuracy: Optimal</span>
                            <div className="w-1 h-1 rounded-full bg-primary"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyFlip;
