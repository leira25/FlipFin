import React from 'react';

const HowItWorks = () => {
    return (
        <section id="how" className="how-section">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h2 style={{ fontSize: '4rem', fontWeight: '900', fontStyle: 'italic', textTransform: 'uppercase', letterSpacing: '-0.05em', marginBottom: '1rem' }}>The <span className="ff-text-primary">Workflow</span></h2>
                    <p style={{ color: 'var(--ff-muted)', fontWeight: '500', textTransform: 'uppercase', fontSize: '12px', letterSpacing: '0.3em' }}>Master the terminal in three steps</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '3rem' }} className="md:grid-cols-3">
                    <div style={{ textAlign: 'center' }}>
                        <div className="step-number" style={{ marginBottom: '2rem' }}>01</div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: '900', fontStyle: 'italic', textTransform: 'uppercase', marginBottom: '1rem' }}>Open <span className="ff-text-primary">Terminal</span></h3>
                        <p style={{ color: 'var(--ff-muted)', lineHeight: '1.6', fontWeight: '500' }}>Instant access to the live Solana stream. No registration required to view professional-grade market data.</p>
                    </div>

                    <div style={{ textAlign: 'center' }}>
                        <div className="step-number" style={{ marginBottom: '2rem' }}>02</div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: '900', fontStyle: 'italic', textTransform: 'uppercase', marginBottom: '1rem' }}>Analyze <span className="ff-text-primary">Narratives</span></h3>
                        <p style={{ color: 'var(--ff-muted)', lineHeight: '1.6', fontWeight: '500' }}>Filter by market cap, volume, and graduation progress. Follow the hype live through our social metrics.</p>
                    </div>

                    <div style={{ textAlign: 'center' }}>
                        <div className="step-number" style={{ marginBottom: '2rem' }}>03</div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: '900', fontStyle: 'italic', textTransform: 'uppercase', marginBottom: '1rem' }}>Execute <span className="ff-text-primary">Flips</span></h3>
                        <p style={{ color: 'var(--ff-muted)', lineHeight: '1.6', fontWeight: '500' }}>Connect and trade with precision. Monitor your PnL in real-time and manage your Solana portfolio.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
