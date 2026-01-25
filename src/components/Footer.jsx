import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-glow"></div>
            
            <div className="footer-container">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '5rem' }}>
                    <div className="logo-text" style={{ fontSize: '3rem', marginBottom: '2rem' }}>FlipFin</div>
                    <p style={{ color: 'var(--ff-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', maxWidth: '36rem', margin: '0 auto', lineHeight: '1.8', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: '600' }}>
                        FlipFin © 2026 • fastest solana launch & graduation tracker • not financial advice • always dyor • engineered for speed
                    </p>
                </div>

                <div className="footer-links">
                    <a href="https://twitter.com/i/communities/2013802185507889401" target="_blank" rel="noopener noreferrer" className="footer-link">Twitter</a>
                    <a href="https://t.me/flipfin" target="_blank" rel="noopener noreferrer" className="footer-link">Telegram</a>
                    <a href="https://docs.flipfin.fun" target="_blank" rel="noopener noreferrer" className="footer-link">Documentation</a>
                    <a href="#" className="footer-link">Terms of Service</a>
                </div>

                <div className="footer-bottom">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--ff-primary)', boxShadow: '0 0 10px var(--ff-primary)' }}></div>
                            <span style={{ fontSize: '10px', fontWeight: '900', textTransform: 'uppercase', color: 'var(--ff-muted)', letterSpacing: '0.2em' }}>Mainnet-Beta</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--ff-primary)', boxShadow: '0 0 10px var(--ff-primary)' }}></div>
                            <span style={{ fontSize: '10px', fontWeight: '900', textTransform: 'uppercase', color: 'var(--ff-muted)', letterSpacing: '0.2em' }}>Latency: 42ms</span>
                        </div>
                    </div>
                    <div style={{ fontSize: '10px', fontWeight: '900', textTransform: 'uppercase', color: 'var(--ff-muted)', letterSpacing: '0.2em', fontStyle: 'italic' }}>
                        Built with <span style={{ color: 'var(--ff-primary)' }}>Solana</span> performance in mind
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
