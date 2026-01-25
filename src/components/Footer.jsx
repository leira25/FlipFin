import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-glow"></div>
            
            <div className="footer-container">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '3rem' }}>
                    <img src="/logo.png" alt="FlipFin Logo" style={{ height: '4rem', width: 'auto', marginBottom: '1.5rem', opacity: 0.5 }} />
                    <p style={{ color: 'var(--ff-muted)', fontFamily: 'var(--ff-font-mono)', fontSize: '12px', maxWidth: '32rem', margin: '0 auto', lineHeight: '1.6', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                        FlipFin © 2026 • fastest solana launch & graduation tracker • not financial advice • always dyor • engineered for speed
                    </p>
                </div>

                <div className="footer-links">
                    <a href="#" className="footer-link">Twitter</a>
                    <a href="#" className="footer-link">Discord</a>
                    <a href="#" className="footer-link">Telegram</a>
                    <a href="#" className="footer-link">Documentation</a>
                    <a href="#" className="footer-link">Terms of Service</a>
                </div>

                <div className="footer-bottom">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--ff-primary)' }}></div>
                            <span style={{ fontSize: '9px', fontWeight: '900', textTransform: 'uppercase', color: 'var(--ff-muted)', letterSpacing: '0.1em' }}>Mainnet-Beta</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--ff-primary)' }}></div>
                            <span style={{ fontSize: '9px', fontWeight: '900', textTransform: 'uppercase', color: 'var(--ff-muted)', letterSpacing: '0.1em' }}>Latency: 42ms</span>
                        </div>
                    </div>
                    <div style={{ fontSize: '9px', fontWeight: '900', textTransform: 'uppercase', color: 'var(--ff-muted)', letterSpacing: '0.1em', fontStyle: 'italic' }}>
                        Built with <span style={{ color: 'var(--ff-primary)' }}>Solana</span> performance in mind
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
