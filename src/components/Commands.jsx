import React from 'react';
import { Terminal, Code, Info, Zap } from 'lucide-react';

const Commands = () => {
    return (
        <section id="docs" className="why-section" style={{ borderTop: '1px solid var(--ff-border)' }}>
            <div className="container">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '5rem' }} className="md:flex-row md:items-center md:justify-between">
                    <div style={{ maxWidth: '40rem' }}>
                        <h2 style={{ fontSize: '4rem', fontWeight: '900', fontStyle: 'italic', textTransform: 'uppercase', letterSpacing: '-0.05em', marginBottom: '1.5rem' }}>Master the <span className="ff-text-primary">Terminal</span></h2>
                        <p style={{ color: 'var(--ff-muted)', fontSize: '1.125rem', fontWeight: '500', lineHeight: '1.6', fontStyle: 'italic', borderLeft: '4px solid var(--ff-primary)', paddingLeft: '1.5rem', backgroundColor: 'rgba(2, 192, 118, 0.05)', padding: '1rem 1.5rem' }}>
                            "Speed is everything in the Solana ecosystem. FlipFin gives you the edge with a streamlined command interface designed for precision."
                        </p>
                    </div>
                    <div className="hidden md:block">
                        <Terminal size={120} style={{ color: 'var(--ff-primary)', opacity: 0.1 }} />
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '3rem' }} className="lg:grid-cols-2">
                    <div className="ff-card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ padding: '1rem', borderBottom: '1px solid var(--ff-border)', backgroundColor: 'rgba(30, 35, 41, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Code size={16} className="ff-text-primary" />
                                <span style={{ fontSize: '10px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Trading_Module.sh</span>
                            </div>
                            <div style={{ display: 'flex', gap: '0.375rem' }}>
                                <div style={{ width: '0.625rem', height: '0.625rem', borderRadius: '50%', backgroundColor: 'var(--ff-border)' }}></div>
                                <div style={{ width: '0.625rem', height: '0.625rem', borderRadius: '50%', backgroundColor: 'var(--ff-border)' }}></div>
                                <div style={{ width: '0.625rem', height: '0.625rem', borderRadius: '50%', backgroundColor: 'rgba(2, 192, 118, 0.4)' }}></div>
                            </div>
                        </div>
                        <div style={{ padding: '2rem', flex: 1 }}>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '900', fontStyle: 'italic', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                                <Zap size={24} className="ff-text-primary" /> Instant Execution
                            </h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} className="ff-font-mono">
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem', backgroundColor: 'var(--ff-background)', border: '1px solid var(--ff-border)', borderRadius: '4px' }}>
                                    <code className="ff-text-primary">/buy [token]</code>
                                    <span style={{ fontSize: '10px', color: 'var(--ff-muted)', textTransform: 'uppercase' }}>Execute Buy</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem', backgroundColor: 'var(--ff-background)', border: '1px solid var(--ff-border)', borderRadius: '4px' }}>
                                    <code className="ff-text-primary">/sell [token]</code>
                                    <span style={{ fontSize: '10px', color: 'var(--ff-muted)', textTransform: 'uppercase' }}>Execute Sell</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem', backgroundColor: 'var(--ff-background)', border: '1px solid var(--ff-border)', borderRadius: '4px' }}>
                                    <code className="ff-text-primary">/alert buy [token]</code>
                                    <span style={{ fontSize: '10px', color: 'var(--ff-muted)', textTransform: 'uppercase' }}>Set Buy Trigger</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem', backgroundColor: 'var(--ff-background)', border: '1px solid var(--ff-border)', borderRadius: '4px' }}>
                                    <code className="ff-text-primary">/pnl</code>
                                    <span style={{ fontSize: '10px', color: 'var(--ff-muted)', textTransform: 'uppercase' }}>Fetch ROI</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="ff-card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ padding: '1rem', borderBottom: '1px solid var(--ff-border)', backgroundColor: 'rgba(30, 35, 41, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Info size={16} className="ff-text-primary" />
                                <span style={{ fontSize: '10px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Intelligence_Feed.log</span>
                            </div>
                            <div style={{ display: 'flex', gap: '0.375rem' }}>
                                <div style={{ width: '0.625rem', height: '0.625rem', borderRadius: '50%', backgroundColor: 'var(--ff-border)' }}></div>
                                <div style={{ width: '0.625rem', height: '0.625rem', borderRadius: '50%', backgroundColor: 'var(--ff-border)' }}></div>
                                <div style={{ width: '0.625rem', height: '0.625rem', borderRadius: '50%', backgroundColor: 'rgba(2, 192, 118, 0.4)' }}></div>
                            </div>
                        </div>
                        <div style={{ padding: '2rem', flex: 1 }}>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '900', fontStyle: 'italic', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                                <Terminal size={24} className="ff-text-primary" /> Data Streams
                            </h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} className="ff-font-mono">
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem', backgroundColor: 'var(--ff-background)', border: '1px solid var(--ff-border)', borderRadius: '4px' }}>
                                    <code className="ff-text-primary">/flow</code>
                                    <span style={{ fontSize: '10px', color: 'var(--ff-muted)', textTransform: 'uppercase' }}>Real-time Feed</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem', backgroundColor: 'var(--ff-background)', border: '1px solid var(--ff-border)', borderRadius: '4px' }}>
                                    <code className="ff-text-primary">/narratives</code>
                                    <span style={{ fontSize: '10px', color: 'var(--ff-muted)', textTransform: 'uppercase' }}>Trend Analysis</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem', backgroundColor: 'var(--ff-background)', border: '1px solid var(--ff-border)', borderRadius: '4px' }}>
                                    <code className="ff-text-primary">/hype</code>
                                    <span style={{ fontSize: '10px', color: 'var(--ff-muted)', textTransform: 'uppercase' }}>Social Pulse</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem', backgroundColor: 'var(--ff-background)', border: '1px solid var(--ff-border)', borderRadius: '4px' }}>
                                    <code className="ff-text-primary">/graduation</code>
                                    <span style={{ fontSize: '10px', color: 'var(--ff-muted)', textTransform: 'uppercase' }}>Raydium Radar</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Commands;
