import React from 'react';

const Header = () => {
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
                    <div className="hidden sm:block" style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '10px', color: 'var(--ff-muted)', textTransform: 'uppercase' }}>SOL/USD</div>
                        <div className="ff-font-mono" style={{ fontSize: '0.875rem', fontWeight: 'bold', color: 'var(--ff-primary)' }}>$142.45</div>
                    </div>
                    <a 
                        href="https://flipfin.fun/" 
                        className="ff-btn ff-btn-primary"
                        style={{ padding: '0.5rem 1.5rem', fontSize: '0.875rem' }}
                    >
                        Launch App
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
