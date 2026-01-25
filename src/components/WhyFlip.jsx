import React from 'react';
import { Shield, Zap, Target } from 'lucide-react';

const WhyFlip = () => {
    return (
        <section id="why" className="why-section">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h2 style={{ fontSize: '4rem', fontWeight: '900', fontStyle: 'italic', textTransform: 'uppercase', letterSpacing: '-0.05em', marginBottom: '1rem' }}>Elite <span className="ff-text-primary">Specs</span></h2>
                    <p style={{ color: 'var(--ff-muted)', fontWeight: '500', textTransform: 'uppercase', fontSize: '12px', letterSpacing: '0.3em' }}>Engineered for professional Solana traders</p>
                </div>

                <div className="feature-grid">
                    <div className="feature-card">
                        <div className="feature-icon">
                            <Shield size={32} />
                        </div>
                        <h3 className="feature-title">Reinforced <span className="ff-text-primary">Security</span></h3>
                        <p style={{ color: 'var(--ff-muted)', lineHeight: '1.6', fontWeight: '500' }}>Connect your wallet with military-grade encryption. Every transaction is verified through our secure node infrastructure to ensure your assets are protected while you flip.</p>
                        <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--ff-border)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '10px', fontWeight: '900', textTransform: 'uppercase', color: 'var(--ff-primary)' }}>
                            <span>Status: Verified</span>
                            <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--ff-primary)' }}></div>
                        </div>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">
                            <Zap size={32} />
                        </div>
                        <h3 className="feature-title">Pulse <span className="ff-text-primary">Execution</span></h3>
                        <p style={{ color: 'var(--ff-muted)', lineHeight: '1.6', fontWeight: '500' }}>Sub-second token detection and instant execution. Our optimized routing engine ensures you get the best entries on trending Solana launches before the crowd even sees them.</p>
                        <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--ff-border)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '10px', fontWeight: '900', textTransform: 'uppercase', color: 'var(--ff-primary)' }}>
                            <span>Latency: 42ms</span>
                            <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--ff-primary)' }}></div>
                        </div>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">
                            <Target size={32} />
                        </div>
                        <h3 className="feature-title">Precision <span className="ff-text-primary">Signals</span></h3>
                        <p style={{ color: 'var(--ff-muted)', lineHeight: '1.6', fontWeight: '500' }}>Advanced data-dense interface with real-time narratives and hype tracking. Identify high-conviction plays using our proprietary graduation metrics and bonding curve analysis.</p>
                        <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--ff-border)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '10px', fontWeight: '900', textTransform: 'uppercase', color: 'var(--ff-primary)' }}>
                            <span>Accuracy: Optimal</span>
                            <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--ff-primary)' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyFlip;
