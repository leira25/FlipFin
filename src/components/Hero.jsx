import React from 'react';

const Hero = () => {
    return (
        <section className="pt-28 pb-16 md:pt-40 md:pb-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(2,192,118,0.05)_0%,transparent_70%)] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <div className="flex justify-center mb-8">
                    <div className="relative">
                        <div className="absolute inset-0 bg-primary blur-3xl opacity-20"></div>
                        <img src="/logo.png" alt="Flip Finance Logo" className="h-24 w-auto md:h-32 relative z-10 animate-pulse-slow" />
                    </div>
                </div>

                <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter leading-tight italic uppercase">
                    Flip <span className="text-primary">Finance</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 font-medium">
                    The professional-grade crypto trading terminal for the <span className="text-white">Solana</span> ecosystem. Catch flips and 100x opportunities with real-time data.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-5 mb-16">
                    <a href="https://flipfin.fun/"
                        className="px-12 py-5 bg-primary text-black rounded font-black text-xl italic uppercase hover:scale-105 transition transform shadow-[0_0_30px_rgba(2,192,118,0.4)]">
                        Launch Terminal
                    </a>
                    <a href="#why"
                        className="px-12 py-5 bg-secondary border border-border rounded font-black text-xl italic uppercase hover:bg-border transition">
                        View Specs
                    </a>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 bg-card border border-border rounded p-8 max-w-5xl mx-auto shadow-2xl">
                    <div className="flex flex-col items-center">
                        <div className="text-[10px] text-muted-foreground uppercase font-black mb-1">Live Creations</div>
                        <div className="text-3xl font-bold text-primary font-data">1,248</div>
                    </div>
                    <div className="flex flex-col items-center border-l border-border">
                        <div className="text-[10px] text-muted-foreground uppercase font-black mb-1">Graduating</div>
                        <div className="text-3xl font-bold text-white font-data">29</div>
                    </div>
                    <div className="flex flex-col items-center border-l border-border">
                        <div className="text-[10px] text-muted-foreground uppercase font-black mb-1">Graduated</div>
                        <div className="text-3xl font-bold text-primary font-data">4</div>
                    </div>
                    <div className="flex flex-col items-center border-l border-border">
                        <div className="text-[10px] text-muted-foreground uppercase font-black mb-1">24H Volume</div>
                        <div className="text-3xl font-bold text-white font-data">$12.4M</div>
                    </div>
                    <div className="flex flex-col items-center border-l border-border col-span-2 md:col-span-1">
                        <div className="text-[10px] text-muted-foreground uppercase font-black mb-1">SOL/USD</div>
                        <div className="text-3xl font-bold text-primary font-data">$142.45</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
