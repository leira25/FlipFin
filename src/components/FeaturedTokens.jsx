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
        <section id="featured" className="tokens-section py-16">
            <div className="section-container">
                <div className="section-header mb-12">
                    <div>
                        <h2 className="section-title mb-4">Live <span className="ff-text-primary cyber-glow-text">Terminal</span> Feed</h2>
                        <p className="text-[var(--ff-muted)] font-medium uppercase text-xs tracking-widest">Real-time data from the Solana ecosystem</p>
                    </div>
                    <div className="flex gap-3">
                        <span className="token-badge">Trending</span>
                        <span className="token-badge bg-[var(--ff-secondary)] text-[var(--ff-muted)] border-[var(--ff-border)]">New</span>
                        <span className="token-badge bg-[var(--ff-secondary)] text-[var(--ff-muted)] border-[var(--ff-border)]">Top Volume</span>
                    </div>
                </div>

                <div className="token-grid">
                    {tokens.map((token) => (
                        <div key={token.id} className="token-card group">
                            {token.live && (
                                <div className="absolute top-4 right-4">
                                    <div className="w-2 h-2 rounded-full bg-[var(--ff-primary)] shadow-[0_0_12px_var(--ff-primary)] animate-pulse"></div>
                                </div>
                            )}
                            <div className="flex justify-between items-start mb-8">
                                <div className="flex-1">
                                    <h3 className="font-black text-3xl italic uppercase leading-none mb-2 group-hover:text-[var(--ff-primary)] transition-colors">{token.symbol}</h3>
                                    <div className="ff-font-mono text-[11px] text-[var(--ff-muted)] uppercase tracking-tight">{token.address}</div>
                                </div>
                                {token.specialLabel ? (
                                    <span className="text-white font-black text-xl italic uppercase">{token.specialLabel}</span>
                                ) : (
                                    <span className={`ff-font-mono font-black text-2xl ${token.change >= 0 ? 'text-[var(--ff-primary)]' : 'text-[var(--ff-red)]'}`}>
                                        {token.change >= 0 ? '+' : ''}{token.change.toLocaleString()}%
                                    </span>
                                )}
                            </div>
                            <div className="token-stat-grid mb-8">
                                <div>
                                    <div className="token-stat-label text-[11px] mb-1">Market Cap</div>
                                    <div className="token-stat-value text-2xl">${token.mcap.toLocaleString()}</div>
                                </div>
                                <div>
                                    <div className="token-stat-label text-[11px] mb-1">{token.volumeLabel || '24H Volume'}</div>
                                    <div className={`token-stat-value text-2xl ${token.volumeLabel === 'Bonding Curve' ? 'text-[var(--ff-primary)]' : 'text-white'}`}>
                                        {token.volumeLabel === 'Bonding Curve' ? token.volume : (token.volume.startsWith('$') ? token.volume : `$${token.volume}`)}
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center text-[11px] font-black uppercase tracking-widest">
                                <span className="text-[var(--ff-muted)]">Age: {token.age}</span>
                                <span className="px-3 py-1 rounded bg-[rgba(255,255,255,0.05)] border border-[var(--ff-border)]" style={{ color: token.statusColor, backgroundColor: token.statusBg }}>{token.status}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedTokens;
