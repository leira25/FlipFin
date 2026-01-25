import React from 'react';

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <img src="/logo.png" alt="Flip Finance Logo" className="h-10 w-auto md:h-12 flex-shrink-0" />
                    <div className="flex flex-col">
                        <span className="text-xl md:text-2xl font-bold text-primary">Flip Finance</span>
                        <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold">Terminal</span>
                    </div>
                </div>

                <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                    <a href="#featured" className="hover:text-primary transition uppercase tracking-wider">Market</a>
                    <a href="#why" className="hover:text-primary transition uppercase tracking-wider">Features</a>
                    <a href="#how" className="hover:text-primary transition uppercase tracking-wider">How it works</a>
                    <a href="#faq" className="hover:text-primary transition uppercase tracking-wider">FAQ</a>
                </nav>

                <div className="flex items-center gap-5">
                    <div className="hidden sm:block text-right">
                        <div className="text-[10px] text-muted-foreground uppercase">SOL/USD</div>
                        <div className="text-sm font-bold text-primary font-data">$142.45</div>
                    </div>
                    <a 
                        href="https://flipfin.fun/" 
                        className="px-6 py-2 bg-primary text-black rounded font-black italic uppercase text-sm hover:opacity-90 transition shadow-[0_0_20px_rgba(2,192,118,0.3)]"
                    >
                        Launch App
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
