import React from 'react';

const CTA = () => {
    return (
        <section className="cta-section">
            <div className="container">
                <div className="cta-box">
                    <h2 className="cta-title">
                        Stop Missing <br /><span style={{ backgroundColor: '#000', color: 'var(--ff-primary)', padding: '0 1rem' }}>Flips</span>
                    </h2>
                    <p style={{ fontSize: '1.25rem', fontWeight: '900', textTransform: 'uppercase', fontStyle: 'italic', marginBottom: '3rem', color: '#000', opacity: 0.8 }}>
                        Join thousands spotting 10×–100× plays daily on Solana. Free to start — edge included.
                    </p>
                    <a href="https://flipfin.fun/"
                        className="ff-btn"
                        style={{ backgroundColor: '#000', color: 'var(--ff-primary)', padding: '1.25rem 3rem', fontSize: '1.5rem', boxShadow: '0 20px 50px rgba(0,0,0,0.3)', borderRadius: '0.5rem' }}>
                        Launch Terminal Now
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CTA;
