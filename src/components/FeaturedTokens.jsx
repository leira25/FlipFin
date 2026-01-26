import React, { useState, useEffect } from 'react';

const FeaturedTokens = () => {
    const [tokens, setTokens] = useState([
        {
            id: 1,
            symbol: '$MOONCAT',
            address: '0x42...f69',
            change: 842.5,
            mcap: 420690,
            volume: '1.2M',
            age: '14m',
            status: 'Bullish Hype',
            statusColor: 'var(--ff-primary)',
            statusBg: 'rgba(2, 192, 118, 0.1)',
            live: true
        },
        {
            id: 2,
            symbol: '$GRADIENT',
            address: '0x8a...e12',
            change: 0,
            mcap: 890120,
            volume: '92.4%',
            volumeLabel: 'Bonding Curve',
            age: '58m',
            status: 'Near Raydium',
            statusColor: '#fff',
            statusBg: 'rgba(255, 255, 255, 0.1)',
            live: false,
            specialLabel: 'Graduating'
        },
        {
            id: 3,
            symbol: '$PUMPED',
            address: '0x2d...b88',
            change: 1240.2,
            mcap: 3100000,
            volume: '4,285',
            volumeLabel: 'Holders',
            age: '4h',
            status: 'Raydium Live',
            statusColor: '#fff',
            statusBg: 'rgba(255, 255, 255, 0.1)',
            live: false
        }
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setTokens(currentTokens => 
                currentTokens.map(token => {
                    // Randomly fluctuate price change and mcap
                    const changeDiff = (Math.random() - 0.45) * 2;
                    const mcapDiff = (Math.random() - 0.45) * 500;
                    
                    return {
                        ...token,
                        change: parseFloat((token.change + changeDiff).toFixed(1)),
                        mcap: Math.floor(token.mcap + mcapDiff)
                    };
                })
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="featured" className="tokens-section">
            <div className="container">
                <div className="section-header">
                    <div>
                        <h2 className="section-title">Live <span className="ff-text-primary">Terminal</span> Feed</h2>
                        <p style={{ color: 'var(--ff-muted)', fontWeight: '500', textTransform: 'uppercase', fontSize: '14px', letterSpacing: '0.1em' }}>Real-time data from the Solana ecosystem</p>
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <span className="token-badge">Trending</span>
                        <span className="token-badge" style={{ backgroundColor: 'var(--ff-secondary)', color: 'var(--ff-muted)', borderColor: 'var(--ff-border)' }}>New</span>
                        <span className="token-badge" style={{ backgroundColor: 'var(--ff-secondary)', color: 'var(--ff-muted)', borderColor: 'var(--ff-border)' }}>Top Volume</span>
                    </div>
                </div>

                <div className="token-grid">
                    {tokens.map((token) => (
                        <div key={token.id} className="token-card">
                            {token.live && (
                                <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--ff-primary)', boxShadow: '0 0 10px var(--ff-primary)' }}></div>
                                </div>
                            )}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1.5rem' }}>
                                <div style={{ flex: 1 }}>
                                    <h3 style={{ fontWeight: '900', fontSize: '1.75rem', fontStyle: 'italic' }}>{token.symbol}</h3>
                                    <div className="ff-font-mono" style={{ fontSize: '11px', color: 'var(--ff-muted)', textTransform: 'uppercase' }}>{token.address}</div>
                                </div>
                                {token.specialLabel ? (
                                    <span style={{ color: '#fff', fontWeight: '900', fontSize: '1.25rem', fontStyle: 'italic', textTransform: 'uppercase' }}>{token.specialLabel}</span>
                                ) : (
                                    <span className="ff-font-mono" style={{ color: token.change >= 0 ? 'var(--ff-primary)' : 'var(--ff-secondary-red)', fontWeight: '900', fontSize: '1.5rem' }}>
                                        {token.change >= 0 ? '+' : ''}{token.change.toLocaleString()}%
                                    </span>
                                )}
                            </div>
                            <div className="token-stat-grid">
                                <div>
                                    <div className="token-stat-label" style={{ fontSize: '11px' }}>Market Cap</div>
                                    <div className="token-stat-value" style={{ fontSize: '1.5rem' }}>${token.mcap.toLocaleString()}</div>
                                </div>
                                <div>
                                    <div className="token-stat-label" style={{ fontSize: '11px' }}>{token.volumeLabel || '24H Volume'}</div>
                                    <div className="token-stat-value" style={{ fontSize: '1.5rem', color: token.volumeLabel === 'Bonding Curve' ? 'var(--ff-primary)' : '#fff' }}>
                                        {token.volumeLabel === 'Bonding Curve' ? token.volume : (token.volume.startsWith('$') ? token.volume : `$${token.volume}`)}
                                    </div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '11px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                <span style={{ color: 'var(--ff-muted)' }}>Age: {token.age}</span>
                                <span style={{ color: token.statusColor, backgroundColor: token.statusBg, padding: '0.25rem 0.75rem', borderRadius: '4px' }}>{token.status}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedTokens;
