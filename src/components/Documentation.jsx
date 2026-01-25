import React from 'react';
import { Book, Code, Terminal, Zap, Shield, Globe, Cpu, BarChart3 } from 'lucide-react';

const Documentation = () => {
    return (
        <section id="docs" className="tokens-section" style={{ background: 'linear-gradient(to bottom, #0b0e11, #0d1117)' }}>
            <div className="container">
                <div className="section-header" style={{ marginBottom: '4rem' }}>
                    <div>
                        <h2 className="section-title">Terminal <span className="ff-text-primary">Documentation</span></h2>
                        <p style={{ color: 'var(--ff-muted)', fontWeight: '500', textTransform: 'uppercase', fontSize: '12px', letterSpacing: '0.1em' }}>Technical specifications and operational guidelines</p>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {/* Overview */}
                    <div className="token-card" style={{ height: '100%', border: '1px solid var(--ff-border)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                            <div className="feature-icon" style={{ width: '3rem', height: '3rem', fontSize: '1.5rem' }}>
                                <Terminal size={20} />
                            </div>
                            <h3 style={{ fontWeight: '900', fontSize: '1.25rem', textTransform: 'uppercase', fontStyle: 'italic' }}>Terminal Overview</h3>
                        </div>
                        <p style={{ color: 'var(--ff-muted)', fontSize: '0.875rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                            Flip Finance is a professional-grade trading interface designed for high-frequency operations on the Solana blockchain. It provides a consolidated view of liquidity pools, real-time volume analysis, and instant execution pathways.
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            <span className="token-badge" style={{ fontSize: '9px' }}>v1.0.4-stable</span>
                            <span className="token-badge" style={{ fontSize: '9px' }}>Mainnet-Beta</span>
                        </div>
                    </div>

                    {/* Execution Engine */}
                    <div className="token-card" style={{ height: '100%', border: '1px solid var(--ff-border)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                            <div className="feature-icon" style={{ width: '3rem', height: '3rem', fontSize: '1.5rem' }}>
                                <Zap size={20} />
                            </div>
                            <h3 style={{ fontWeight: '900', fontSize: '1.25rem', textTransform: 'uppercase', fontStyle: 'italic' }}>Pulse Execution</h3>
                        </div>
                        <ul style={{ color: 'var(--ff-muted)', fontSize: '0.875rem', padding: 0, listStyle: 'none' }}>
                            <li style={{ marginBottom: '0.75rem', display: 'flex', gap: '0.5rem' }}>
                                <span className="ff-text-primary">•</span> 
                                <span>Sub-40ms latency on transaction routing</span>
                            </li>
                            <li style={{ marginBottom: '0.75rem', display: 'flex', gap: '0.5rem' }}>
                                <span className="ff-text-primary">•</span> 
                                <span>MEV-protected private RPC channels</span>
                            </li>
                            <li style={{ marginBottom: '0.75rem', display: 'flex', gap: '0.5rem' }}>
                                <span className="ff-text-primary">•</span> 
                                <span>Automated slippage optimization (JITO integration)</span>
                            </li>
                        </ul>
                    </div>

                    {/* Security Protocol */}
                    <div className="token-card" style={{ height: '100%', border: '1px solid var(--ff-border)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                            <div className="feature-icon" style={{ width: '3rem', height: '3rem', fontSize: '1.5rem' }}>
                                <Shield size={20} />
                            </div>
                            <h3 style={{ fontWeight: '900', fontSize: '1.25rem', textTransform: 'uppercase', fontStyle: 'italic' }}>Security Core</h3>
                        </div>
                        <p style={{ color: 'var(--ff-muted)', fontSize: '0.875rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                            Military-grade encryption for all local storage. Non-custodial architecture ensures your private keys never leave your secure environment. Transaction simulation layers prevent interactions with malicious drainers.
                        </p>
                        <div style={{ padding: '0.5rem', backgroundColor: 'rgba(2, 192, 118, 0.05)', border: '1px solid var(--ff-primary)', borderRadius: '4px', textAlign: 'center' }}>
                            <span style={{ fontSize: '10px', fontWeight: '900', color: 'var(--ff-primary)', textTransform: 'uppercase' }}>Audited by CyberShield v2</span>
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: '4rem', padding: '2rem', backgroundColor: '#0d1117', border: '1px solid var(--ff-border)', borderRadius: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                        <Code className="ff-text-primary" size={20} />
                        <h3 style={{ fontWeight: '900', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>API Reference</h3>
                    </div>
                    <div className="ff-font-mono" style={{ backgroundColor: '#0b0e11', padding: '1.5rem', borderRadius: '4px', border: '1px solid #1e2329', overflowX: 'auto' }}>
                        <div style={{ color: '#888', marginBottom: '0.5rem' }}>// Initialize FlipFin Terminal Instance</div>
                        <div><span style={{ color: '#f6465d' }}>const</span> terminal = <span style={{ color: '#02c076' }}>new</span> <span style={{ color: '#fff' }}>FlipFin</span>({'{'}</div>
                        <div style={{ paddingLeft: '1.5rem' }}>apiKey: <span style={{ color: '#02c076' }}>"FF_PRIME_XXXX"</span>,</div>
                        <div style={{ paddingLeft: '1.5rem' }}>network: <span style={{ color: '#02c076' }}>"solana-mainnet"</span>,</div>
                        <div style={{ paddingLeft: '1.5rem' }}>mode: <span style={{ color: '#02c076' }}>"ultra-low-latency"</span></div>
                        <div>{'}'});</div>
                        <div style={{ marginTop: '1rem', color: '#888' }}>// Start real-time signal monitoring</div>
                        <div>terminal.<span style={{ color: '#fff' }}>subscribe</span>(<span style={{ color: '#02c076' }}>'trending'</span>, (data) ={'>'} {'{'}</div>
                        <div style={{ paddingLeft: '1.5rem' }}><span style={{ color: '#fff' }}>console</span>.log(<span style={{ color: '#02c076' }}>`New Opportunity: ${'{'}data.symbol{'}'}`</span>);</div>
                        <div>{'}'});</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Documentation;
