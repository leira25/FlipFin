import React from 'react';

const FeaturedTokens = () => {
    return (
        <section id="featured" className="tokens-section">
            <div className="container">
                <div className="section-header">
                    <div>
                        <h2 className="section-title">Live <span className="ff-text-primary">Terminal</span> Feed</h2>
                        <p style={{ color: 'var(--ff-muted)', fontWeight: '500', textTransform: 'uppercase', fontSize: '12px', letterSpacing: '0.1em' }}>Real-time data from the Solana ecosystem</p>
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <span className="token-badge">Trending</span>
                        <span className="token-badge" style={{ backgroundColor: 'var(--ff-secondary)', color: 'var(--ff-muted)', borderColor: 'var(--ff-border)' }}>New</span>
                        <span className="token-badge" style={{ backgroundColor: 'var(--ff-secondary)', color: 'var(--ff-muted)', borderColor: 'var(--ff-border)' }}>Top Volume</span>
                    </div>
                </div>

                <div className="token-grid">
                    <div className="token-card">
                        <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--ff-primary)', boxShadow: '0 0 10px var(--ff-primary)' }}></div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'between', alignItems: 'start', marginBottom: '1.5rem' }}>
                            <div style={{ flex: 1 }}>
                                <h3 style={{ fontWeight: '900', fontSize: '1.5rem', fontStyle: 'italic' }}>$MOONCAT</h3>
                                <div className="ff-font-mono" style={{ fontSize: '10px', color: 'var(--ff-muted)', textTransform: 'uppercase' }}>0x42...f69</div>
                            </div>
                            <span className="ff-font-mono" style={{ color: 'var(--ff-primary)', fontWeight: '900', fontSize: '1.25rem' }}>+842.5%</span>
                        </div>
                        <div className="token-stat-grid">
                            <div>
                                <div className="token-stat-label">Market Cap</div>
                                <div className="token-stat-value">$420,690</div>
                            </div>
                            <div>
                                <div className="token-stat-label">24H Volume</div>
                                <div className="token-stat-value" style={{ color: '#fff' }}>$1.2M</div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '10px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                            <span style={{ color: 'var(--ff-muted)' }}>Age: 14m</span>
                            <span style={{ color: 'var(--ff-primary)', backgroundColor: 'rgba(2, 192, 118, 0.1)', padding: '0.125rem 0.5rem', borderRadius: '4px' }}>Bullish Hype</span>
                        </div>
                    </div>

                    <div className="token-card">
                        <div style={{ display: 'flex', justifyContent: 'between', alignItems: 'start', marginBottom: '1.5rem' }}>
                            <div style={{ flex: 1 }}>
                                <h3 style={{ fontWeight: '900', fontSize: '1.5rem', fontStyle: 'italic' }}>$GRADIENT</h3>
                                <div className="ff-font-mono" style={{ fontSize: '10px', color: 'var(--ff-muted)', textTransform: 'uppercase' }}>0x8a...e12</div>
                            </div>
                            <span style={{ color: '#fff', fontWeight: '900', fontSize: '1rem', fontStyle: 'italic', textTransform: 'uppercase' }}>Graduating</span>
                        </div>
                        <div className="token-stat-grid">
                            <div>
                                <div className="token-stat-label">Market Cap</div>
                                <div className="token-stat-value">$890,120</div>
                            </div>
                            <div>
                                <div className="token-stat-label">Bonding Curve</div>
                                <div className="token-stat-value ff-text-primary">92.4%</div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '10px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                            <span style={{ color: 'var(--ff-muted)' }}>Age: 58m</span>
                            <span style={{ color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0.1)', padding: '0.125rem 0.5rem', borderRadius: '4px' }}>Near Raydium</span>
                        </div>
                    </div>

                    <div className="token-card">
                        <div style={{ display: 'flex', justifyContent: 'between', alignItems: 'start', marginBottom: '1.5rem' }}>
                            <div style={{ flex: 1 }}>
                                <h3 style={{ fontWeight: '900', fontSize: '1.5rem', fontStyle: 'italic' }}>$PUMPED</h3>
                                <div className="ff-font-mono" style={{ fontSize: '10px', color: 'var(--ff-muted)', textTransform: 'uppercase' }}>0x2d...b88</div>
                            </div>
                            <span className="ff-font-mono" style={{ color: 'var(--ff-primary)', fontWeight: '900', fontSize: '1.25rem' }}>+1,240.2%</span>
                        </div>
                        <div className="token-stat-grid">
                            <div>
                                <div className="token-stat-label">Market Cap</div>
                                <div className="token-stat-value">$3.1M</div>
                            </div>
                            <div>
                                <div className="token-stat-label">Holders</div>
                                <div className="token-stat-value" style={{ color: '#fff' }}>4,285</div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '10px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                            <span style={{ color: 'var(--ff-muted)' }}>Age: 4h</span>
                            <span style={{ color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0.1)', padding: '0.125rem 0.5rem', borderRadius: '4px' }}>Raydium Live</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedTokens;
