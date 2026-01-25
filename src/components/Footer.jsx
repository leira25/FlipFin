import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-background border-t border-border py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(2,192,118,0.02)_0%,transparent_50%)] pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                <div className="flex flex-col items-center mb-12">
                    <img src="/logo.png" alt="FlipFin Logo" className="h-16 w-auto mb-6 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition duration-500" />
                    <p className="text-muted-foreground font-data text-xs max-w-lg mx-auto leading-relaxed uppercase tracking-widest">
                        FlipFin © 2026 • fastest solana launch & graduation tracker • not financial advice • always dyor • engineered for speed
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-12">
                    <a href="#" className="text-[10px] font-black uppercase tracking-[0.2em] hover:text-primary transition">Twitter</a>
                    <a href="#" className="text-[10px] font-black uppercase tracking-[0.2em] hover:text-primary transition">Discord</a>
                    <a href="#" className="text-[10px] font-black uppercase tracking-[0.2em] hover:text-primary transition">Telegram</a>
                    <a href="#" className="text-[10px] font-black uppercase tracking-[0.2em] hover:text-primary transition">Documentation</a>
                    <a href="#" className="text-[10px] font-black uppercase tracking-[0.2em] hover:text-primary transition">Terms of Service</a>
                </div>

                <div className="pt-12 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                            <span className="text-[9px] font-black uppercase text-muted-foreground tracking-widest">Mainnet-Beta</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                            <span className="text-[9px] font-black uppercase text-muted-foreground tracking-widest">Latency: 42ms</span>
                        </div>
                    </div>
                    <div className="text-[9px] font-black uppercase text-muted-foreground tracking-widest italic">
                        Built with <span className="text-primary">Solana</span> performance in mind
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
