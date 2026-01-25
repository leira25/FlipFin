import React from 'react';

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/50 border-b border-gray-800/60">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <img src="/logo.png" alt="Flip Finance Logo" className="h-10 w-auto md:h-12 logo-img flex-shrink-0" />
                    <div className="flex flex-col">
                        <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-solana-green to-solana-purple bg-clip-text text-transparent">Flip Finance</span>
                        <span className="text-xs text-gray-400">Solana Trading Terminal</span>
                    </div>
                </div>

                <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                    <a href="https://flipfin.fun/flow" className="hover:text-solana-green transition">Flow</a>
                    <a href="https://flipfin.fun/narratives" className="hover:text-solana-green transition">Narratives</a>
                    <a href="https://flipfin.fun/social" className="hover:text-solana-green transition">Hype</a>
                    <a href="https://flipfin.fun/rewards" className="hover:text-solana-green transition">Rewards</a>
                    <a href="https://flipfin.fun/tracker" className="hover:text-solana-green transition">Tracker</a>
                    <a href="https://flipfin.fun/portfolio" className="hover:text-solana-green transition">PnL</a>
                </nav>

                <div className="flex items-center gap-5">
                    <div className="hidden sm:block text-right">
                        <div className="text-xs text-gray-400">SOL</div>
                        <div className="text-lg font-bold text-solana-green">$142</div>
                    </div>
                    <button className="px-6 py-2.5 bg-gradient-to-r from-solana-purple to-solana-green rounded-lg font-semibold hover:opacity-90 transition shadow-md">Launch App</button>
                </div>
            </div>
        </header>
    );
};

export default Header;