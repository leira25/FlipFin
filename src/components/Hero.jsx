import React, { useState, useEffect } from 'react';

const Hero = () => {
    const [stats, setStats] = useState({
        liveCreations: 1248,
        graduating: 29,
        graduated: 4,
        volume24h: 12400000,
        solPrice: 142.45
    });

    const formatVolume = (val) => {
        if (val >= 1000000) return `$${(val / 1000000).toFixed(1)}M`;
        if (val >= 1000) return `$${(val / 1000).toFixed(1)}K`;
        return `$${val.toFixed(2)}`;
    };

    useEffect(() => {
        const fetchStats = async () => {
            try {
                // 1. Fetch SOL Price
                const solRes = await fetch('https://api.dexscreener.com/latest/dex/pairs/solana/8s98p3skaetkpg5shv8wzyay9u5n4q4mruy2hjbpshxs');
                const solData = await solRes.json();
                const solPrice = solData.pair?.priceUsd ? parseFloat(solData.pair.priceUsd) : 142.45;

                // 2. Fetch Latest Token Profiles
                const profileRes = await fetch('https://api.dexscreener.com/token-profiles/latest/v1');
                const profiles = await profileRes.json();
                
                const solanaAddresses = profiles
                    .filter(t => t.chainId === 'solana')
                    .map(t => t.tokenAddress)
                    .slice(0, 100);

                if (solanaAddresses.length > 0) {
                    const detailsRes = await fetch(`https://api.dexscreener.com/tokens/v1/solana/${solanaAddresses.join(',')}`);
                    const pairs = await detailsRes.json();
                    
                    if (Array.isArray(pairs)) {
                        const now = Date.now();
                        let live = 0;
                        let graduating = 0;
                        let graduated = 0;
                        let totalVol = 0;

                        // Use a Set to avoid double counting same token from different pairs
                        const seenTokens = new Set();

                        pairs.forEach(pair => {
                            if (pair.chainId !== 'solana' || seenTokens.has(pair.baseToken.address)) return;
                            seenTokens.add(pair.baseToken.address);

                            const age = pair.pairCreatedAt ? now - pair.pairCreatedAt : Infinity;
                            const mcap = pair.fdv || 0;
                            const vol = pair.volume?.h24 || 0;

                            totalVol += vol;

                            if (age < 3600000) {
                                live++;
                            } else if (mcap < 69000) {
                                graduating++;
                            } else {
                                graduated++;
                            }
                        });

                        setStats({
                            liveCreations: live,
                            graduating: graduating,
                            graduated: graduated,
                            volume24h: totalVol,
                            solPrice
                        });
                    }
                }
            } catch (err) {
                console.error('Failed to fetch live stats:', err);
            }
        };

        fetchStats();
        const interval = setInterval(fetchStats, 60000);
        return () => clearInterval(interval);
    }, []);

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
                    Flip<span className="ff-text-primary cyber-glow-text">Fin</span>
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
                        <div className="stat-value ff-text-primary">{stats.liveCreations.toLocaleString()}</div>
                    </div>
                    <div className="stat-item" style={{ borderLeft: '1px solid var(--ff-border)' }}>
                        <div className="stat-label">Graduating</div>
                        <div className="stat-value" style={{ color: '#fff' }}>{stats.graduating}</div>
                    </div>
                    <div className="stat-item" style={{ borderLeft: '1px solid var(--ff-border)' }}>
                        <div className="stat-label">Graduated</div>
                        <div className="stat-value ff-text-primary">{stats.graduated}</div>
                    </div>
                    <div className="stat-item" style={{ borderLeft: '1px solid var(--ff-border)' }}>
                        <div className="stat-label">24H Volume</div>
                        <div className="stat-value" style={{ color: '#fff' }}>{formatVolume(stats.volume24h)}</div>
                    </div>
                    <div className="stat-item" style={{ borderLeft: '1px solid var(--ff-border)' }}>
                        <div className="stat-label">SOL/USD</div>
                        <div className="stat-value ff-text-primary">${stats.solPrice.toFixed(2)}</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
