import React from 'react';

const FeaturedTokens = () => {
    return (
        <section id="featured" className="py-24 border-y border-border bg-card/30 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                    <div>
                        <h2 className="text-4xl font-black italic uppercase tracking-tighter mb-2">Live <span className="text-primary">Terminal</span> Feed</h2>
                        <p className="text-muted-foreground font-medium uppercase text-xs tracking-widest">Real-time data from the Solana ecosystem</p>
                    </div>
                    <div className="flex gap-2">
                        <span className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded text-[10px] font-black uppercase tracking-widest">Trending</span>
                        <span className="px-3 py-1 bg-secondary text-muted-foreground border border-border rounded text-[10px] font-black uppercase tracking-widest">New</span>
                        <span className="px-3 py-1 bg-secondary text-muted-foreground border border-border rounded text-[10px] font-black uppercase tracking-widest">Top Volume</span>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-card border border-border rounded p-6 hover:border-primary/50 transition relative group overflow-hidden">
                        <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-100 transition">
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                        </div>
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h3 className="font-black text-2xl italic">$MOONCAT</h3>
                                <div className="text-[10px] text-muted-foreground font-mono uppercase">0x42...f69</div>
                            </div>
                            <span className="text-primary font-black text-xl font-data">+842.5%</span>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mb-6 border-y border-border py-4 font-data">
                            <div>
                                <div className="text-[9px] text-muted-foreground uppercase mb-1">Market Cap</div>
                                <div className="text-sm font-bold">$420,690</div>
                            </div>
                            <div>
                                <div className="text-[9px] text-muted-foreground uppercase mb-1">24H Volume</div>
                                <div className="text-sm font-bold text-white">$1.2M</div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                            <span className="text-muted-foreground">Age: 14m</span>
                            <span className="text-primary bg-primary/10 px-2 py-0.5 rounded">Bullish Hype</span>
                        </div>
                    </div>

                    <div className="bg-card border border-border rounded p-6 hover:border-primary/50 transition relative group overflow-hidden">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h3 className="font-black text-2xl italic">$GRADIENT</h3>
                                <div className="text-[10px] text-muted-foreground font-mono uppercase">0x8a...e12</div>
                            </div>
                            <span className="text-featured font-black text-xl uppercase italic">Graduating</span>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mb-6 border-y border-border py-4 font-data">
                            <div>
                                <div className="text-[9px] text-muted-foreground uppercase mb-1">Market Cap</div>
                                <div className="text-sm font-bold">$890,120</div>
                            </div>
                            <div>
                                <div className="text-[9px] text-muted-foreground uppercase mb-1">Bonding Curve</div>
                                <div className="text-sm font-bold text-featured">92.4%</div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                            <span className="text-muted-foreground">Age: 58m</span>
                            <span className="text-featured bg-featured/10 px-2 py-0.5 rounded">Near Raydium</span>
                        </div>
                    </div>

                    <div className="bg-card border border-border rounded p-6 hover:border-primary/50 transition relative group overflow-hidden">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h3 className="font-black text-2xl italic">$PUMPED</h3>
                                <div className="text-[10px] text-muted-foreground font-mono uppercase">0x2d...b88</div>
                            </div>
                            <span className="text-primary font-black text-xl font-data">+1,240.2%</span>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mb-6 border-y border-border py-4 font-data">
                            <div>
                                <div className="text-[9px] text-muted-foreground uppercase mb-1">Market Cap</div>
                                <div className="text-sm font-bold">$3.1M</div>
                            </div>
                            <div>
                                <div className="text-[9px] text-muted-foreground uppercase mb-1">Holders</div>
                                <div className="text-sm font-bold text-white">4,285</div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                            <span className="text-muted-foreground">Age: 4h</span>
                            <span className="text-white bg-white/10 px-2 py-0.5 rounded">Raydium Live</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedTokens;
