import React from 'react';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-glow"></div>

            <div className="hero-content">
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
                    <div style={{ position: 'relative' }}>
                        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'var(--ff-primary)', filter: 'blur(60px)', opacity: 0.15 }}></div>
                        <img src="/logo.png" alt="FlipFin Logo" style={{ height: '6rem', width: 'auto', position: 'relative', zIndex: 10 }} />
                    </div>
                </div>

                <h1 className="hero-title">
                    Flip<span className="ff-text-primary">Fin</span>
                </h1>
                <p className="hero-subtitle">
                    The professional-grade crypto trading terminal for the <span style={{ color: '#fff' }}>Solana</span> ecosystem. Catch flips and 100x opportunities with real-time data.
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.25rem', marginBottom: '4rem' }}>
                    <a href="https://flipfin.fun/" className="ff-btn ff-btn-primary" style={{ padding: '1.25rem 3rem', fontSize: '1.25rem' }}>
                        Launch Terminal
                    </a>
                    <a href="#why" className="ff-btn ff-btn-secondary" style={{ padding: '1.25rem 3rem', fontSize: '1.25rem' }}>
                        View Specs
                    </a>
                </div>

                <div className="hero-stats">
                    <div className="stat-item">
                        <div className="stat-label">Live Creations</div>
                        <div className="stat-value ff-text-primary">1,248</div>
                    </div>
                    <div className="stat-item" style={{ borderLeft: '1px solid var(--ff-border)' }}>
                        <div className="stat-label">Graduating</div>
                        <div className="stat-value" style={{ color: '#fff' }}>29</div>
                    </div>
                    <div className="stat-item" style={{ borderLeft: '1px solid var(--ff-border)' }}>
                        <div className="stat-label">Graduated</div>
                        <div className="stat-value ff-text-primary">4</div>
                    </div>
                    <div className="stat-item" style={{ borderLeft: '1px solid var(--ff-border)' }}>
                        <div className="stat-label">24H Volume</div>
                        <div className="stat-value" style={{ color: '#fff' }}>$12.4M</div>
                    </div>
                    <div className="stat-item" style={{ borderLeft: '1px solid var(--ff-border)' }}>
                        <div className="stat-label">SOL/USD</div>
                        <div className="stat-value ff-text-primary">$142.45</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
