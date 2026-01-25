import React from 'react';
import { Terminal, Code, Info, Zap } from 'lucide-react';

const Commands = () => {
    return (
        <section id="docs" className="py-24 md:py-32 bg-background relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between mb-20 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-6">Master the <span className="text-primary">Terminal</span></h2>
                        <p className="text-muted-foreground text-lg font-medium leading-relaxed italic border-l-4 border-primary pl-6 py-2 bg-primary/5">
                            "Speed is everything in the Solana ecosystem. Flip Finance gives you the edge with a streamlined command interface designed for precision."
                        </p>
                    </div>
                    <div className="hidden lg:block">
                        <Terminal size={120} className="text-primary opacity-10 animate-pulse" />
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    <div className="bg-card border border-border rounded-lg overflow-hidden flex flex-col">
                        <div className="p-4 border-b border-border bg-secondary/50 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Code size={16} className="text-primary" />
                                <span className="text-[10px] font-black uppercase tracking-widest">Trading_Module.sh</span>
                            </div>
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-border"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-border"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-primary/40"></div>
                            </div>
                        </div>
                        <div className="p-8 space-y-6 flex-1">
                            <h3 className="text-2xl font-black italic uppercase flex items-center gap-3">
                                <Zap size={24} className="text-primary" /> Instant Execution
                            </h3>
                            <div className="space-y-4 font-data">
                                <div className="group flex items-center justify-between p-3 bg-background border border-border rounded hover:border-primary/50 transition">
                                    <code className="text-primary">/buy [token]</code>
                                    <span className="text-[10px] text-muted-foreground uppercase opacity-0 group-hover:opacity-100 transition">Execute Buy</span>
                                </div>
                                <div className="group flex items-center justify-between p-3 bg-background border border-border rounded hover:border-primary/50 transition">
                                    <code className="text-primary">/sell [token]</code>
                                    <span className="text-[10px] text-muted-foreground uppercase opacity-0 group-hover:opacity-100 transition">Execute Sell</span>
                                </div>
                                <div className="group flex items-center justify-between p-3 bg-background border border-border rounded hover:border-primary/50 transition">
                                    <code className="text-primary">/alert buy [token]</code>
                                    <span className="text-[10px] text-muted-foreground uppercase opacity-0 group-hover:opacity-100 transition">Set Buy Trigger</span>
                                </div>
                                <div className="group flex items-center justify-between p-3 bg-background border border-border rounded hover:border-primary/50 transition">
                                    <code className="text-primary">/pnl</code>
                                    <span className="text-[10px] text-muted-foreground uppercase opacity-0 group-hover:opacity-100 transition">Fetch ROI</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card border border-border rounded-lg overflow-hidden flex flex-col">
                        <div className="p-4 border-b border-border bg-secondary/50 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Info size={16} className="text-primary" />
                                <span className="text-[10px] font-black uppercase tracking-widest">Intelligence_Feed.log</span>
                            </div>
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-border"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-border"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-primary/40"></div>
                            </div>
                        </div>
                        <div className="p-8 space-y-6 flex-1">
                            <h3 className="text-2xl font-black italic uppercase flex items-center gap-3">
                                <Terminal size={24} className="text-primary" /> Data Streams
                            </h3>
                            <div className="space-y-4 font-data">
                                <div className="group flex items-center justify-between p-3 bg-background border border-border rounded hover:border-primary/50 transition">
                                    <code className="text-primary">/flow</code>
                                    <span className="text-[10px] text-muted-foreground uppercase opacity-0 group-hover:opacity-100 transition">Real-time Feed</span>
                                </div>
                                <div className="group flex items-center justify-between p-3 bg-background border border-border rounded hover:border-primary/50 transition">
                                    <code className="text-primary">/narratives</code>
                                    <span className="text-[10px] text-muted-foreground uppercase opacity-0 group-hover:opacity-100 transition">Trend Analysis</span>
                                </div>
                                <div className="group flex items-center justify-between p-3 bg-background border border-border rounded hover:border-primary/50 transition">
                                    <code className="text-primary">/hype</code>
                                    <span className="text-[10px] text-muted-foreground uppercase opacity-0 group-hover:opacity-100 transition">Social Pulse</span>
                                </div>
                                <div className="group flex items-center justify-between p-3 bg-background border border-border rounded hover:border-primary/50 transition">
                                    <code className="text-primary">/graduation</code>
                                    <span className="text-[10px] text-muted-foreground uppercase opacity-0 group-hover:opacity-100 transition">Raydium Radar</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Commands;
