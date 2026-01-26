import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [solPrice, setSolPrice] = useState(125.00);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        const fetchSolPrice = async () => {
            try {
                const res = await fetch('https://api.dexscreener.com/latest/dex/tokens/So11111111111111111111111111111111111111112');
                const data = await res.json();
                if (data.pairs?.[0]?.priceUsd) {
                    setSolPrice(parseFloat(data.pairs[0].priceUsd));
                }
            } catch (err) {
                console.error('Failed to fetch SOL price in header:', err);
            }
        };

        fetchSolPrice();
        const interval = setInterval(fetchSolPrice, 60000);
        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="header">
            <div className="section-container flex items-center justify-between h-20 md:h-24">
                <div className="flex items-center gap-3">
                    <img src="/logo.png" alt="FlipFin Logo" className="h-10 md:h-12 w-auto" />
                    <div className="flex flex-col">
                        <span className="logo-text !text-2xl">FlipFin</span>
                        <span className="text-[10px] text-[var(--ff-muted)] uppercase tracking-widest font-bold">Terminal</span>
                    </div>
                </div>

                <nav className="hidden md:flex items-center gap-10">
                    <a href="#featured" className="nav-link font-bold">Market</a>
                    <a href="#why" className="nav-link font-bold">Features</a>
                    <a href="#how" className="nav-link font-bold">How it works</a>
                    <a href="#faq" className="nav-link font-bold">FAQ</a>
                </nav>

                <div className="flex items-center gap-5">
                    {!isMobile && (
                        <a
                            href="https://flipfin.fun/"
                            className="ff-btn ff-btn-primary px-6 py-2.5 text-sm"
                        >
                            Launch App
                        </a>
                    )}
                    <button className="hamburger" onClick={toggleMenu}>
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                <a href="#featured" className="mobile-menu-link" onClick={toggleMenu}>Market</a>
                <a href="#why" className="mobile-menu-link" onClick={toggleMenu}>Features</a>
                <a href="#how" className="mobile-menu-link" onClick={toggleMenu}>How it works</a>
                <a href="#faq" className="mobile-menu-link" onClick={toggleMenu}>FAQ</a>
                <a
                    href="https://flipfin.fun/"
                    className="ff-btn ff-btn-primary"
                    style={{ padding: '0.5rem 1.5rem', fontSize: '0.875rem' }}
                >
                    Launch App
                </a>
            </div>
        </header>
    );
};

export default Header;
