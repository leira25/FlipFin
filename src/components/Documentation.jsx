import React from 'react';
import { Book, Code, Terminal, Zap, Shield, Globe, Cpu, BarChart3 } from 'lucide-react';

const Documentation = () => {
    return (
        <section id="how" className="tokens-section" style={{ background: 'linear-gradient(to bottom, #0b0e11, #0d1117)' }}>
            <div className="container">
                <div className="section-header" style={{ marginBottom: '4rem' }}>
                    <div>
                        <h2 className="section-title">Terminal <span className="ff-text-primary">How It Works</span></h2>
                        <p style={{ color: 'var(--ff-muted)', fontWeight: '500', textTransform: 'uppercase', fontSize: '12px', letterSpacing: '0.1em' }}>The lifecycle of a high-frequency Solana trade</p>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {/* Phase 1 */}
                    <div className="token-card" style={{ height: '100%', border: '1px solid var(--ff-border)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                            <div className="feature-icon" style={{ width: '3rem', height: '3rem', fontSize: '1.5rem' }}>
                                <Globe size={20} />
                            </div>
                            <h3 style={{ fontWeight: '900', fontSize: '1.25rem', textTransform: 'uppercase', fontStyle: 'italic' }}>1. Liquidity Scouting</h3>
                        </div>
                        <p style={{ color: 'var(--ff-muted)', fontSize: '0.875rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                            FlipFin scans every new pool on Raydium, Meteora, and Orca in real-time. Our algorithms filter for verified social metadata, high initial liquidity, and volume-to-market-cap efficiency.
                        </p>
                    </div>

                    {/* Phase 2 */}
                    <div className="token-card" style={{ height: '100%', border: '1px solid var(--ff-border)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                            <div className="feature-icon" style={{ width: '3rem', height: '3rem', fontSize: '1.5rem' }}>
                                <Shield size={20} />
                            </div>
                            <h3 style={{ fontWeight: '900', fontSize: '1.25rem', textTransform: 'uppercase', fontStyle: 'italic' }}>2. Risk Assessment</h3>
                        </div>
                        <p style={{ color: 'var(--ff-muted)', fontSize: '0.875rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                            Automated rug-check protocols analyze contract mint authority, freeze authority, and top holder concentration. We only present opportunities that meet our strict "Safe-Entry" criteria.
                        </p>
                    </div>

                    {/* Phase 3 */}
                    <div className="token-card" style={{ height: '100%', border: '1px solid var(--ff-border)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                            <div className="feature-icon" style={{ width: '3rem', height: '3rem', fontSize: '1.5rem' }}>
                                <Zap size={20} />
                            </div>
                            <h3 style={{ fontWeight: '900', fontSize: '1.25rem', textTransform: 'uppercase', fontStyle: 'italic' }}>3. Tactical Entry</h3>
                        </div>
                        <p style={{ color: 'var(--ff-muted)', fontSize: '0.875rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                            Execute trades with sub-40ms latency. Our private RPC nodes and Jito-integration bypass public congestion to ensure your transaction lands first in the block.
                        </p>
                    </div>
                </div>

                <div style={{ marginTop: '4rem', padding: '2rem', backgroundColor: '#0d1117', border: '1px solid var(--ff-border)', borderRadius: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                        <BarChart3 className="ff-text-primary" size={20} />
                        <h3 style={{ fontWeight: '900', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>4. Portfolio Management & Exit</h3>
                    </div>
                    <div className="ff-font-mono" style={{ backgroundColor: '#0b0e11', padding: '1.5rem', borderRadius: '4px', border: '1px solid #1e2329', overflowX: 'auto' }}>
                        <div style={{ color: '#888', marginBottom: '0.5rem' }}>// Active Monitoring & Automated Exit Strategies</div>
                        <div style={{ color: '#02c076' }}>{'>'} <span style={{ color: '#fff' }}>Monitoring SOL/TOKEN pool...</span></div>
                        <div style={{ color: '#02c076' }}>{'>'} <span style={{ color: '#fff' }}>Current PnL: +24.5%</span></div>
                        <div style={{ color: '#f6465d' }}>{'>'} <span style={{ color: '#fff' }}>Take-Profit order triggered at $0.0042</span></div>
                        <div style={{ color: '#02c076' }}>{'>'} <span style={{ color: '#fff' }}>Transaction confirmed. Profit secured.</span></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Documentation;
