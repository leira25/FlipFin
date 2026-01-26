import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [solPrice, setSolPrice] = useState(125.00);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
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
        return () => clearInterval(interval);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="header">
            <div className="header-container">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <img src="/logo.png" alt="FlipFin Logo" style={{ height: '2.5rem', width: 'auto' }} />
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span className="logo-text">FlipFin</span>
                        <span style={{ fontSize: '10px', color: 'var(--ff-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '600' }}>Terminal</span>
                    </div>
                </div>

                <nav className="nav-links">
                    <a href="#featured" className="nav-link">Market</a>
                    <a href="#why" className="nav-link">Features</a>
                    <a href="#how" className="nav-link">How it works</a>
                    <a href="#faq" className="nav-link">FAQ</a>
                </nav>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                    <div className="hidden md:flex">
                        <a 
                            href="https://flipfin.fun/" 
                            className="ff-btn ff-btn-primary"
                            style={{ padding: '0.5rem 1.5rem', fontSize: '0.875rem' }}
                        >
                            Launch App
                        </a>
                    </div>
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
                    style={{ padding: '1rem 3rem', fontSize: '1.25rem', marginTop: '1rem' }}
                    onClick={toggleMenu}
                >
                    Launch App
                </a>
            </div>
        </header>
    );
};

export default Header;
