import React from 'react';

const FAQ = () => {
    return (
        <section id="faq" className="why-section">
            <div className="section-container" style={{ maxWidth: '64rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                    <h2 style={{ fontSize: '4rem', fontWeight: '900', fontStyle: 'italic', textTransform: 'uppercase', letterSpacing: '-0.05em', marginBottom: '1rem' }}>Terminal <span className="ff-text-primary">Intel</span></h2>
                    <p style={{ color: 'var(--ff-muted)', fontWeight: '800', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.4em' }}>Frequently asked questions</p>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <details className="faq-item group" open>
                        <summary className="faq-question">
                            <span style={{ fontSize: '1.5rem', fontWeight: '900', fontStyle: 'italic', textTransform: 'uppercase' }}>Is FlipFin free?</span>
                            <span className="ff-text-primary" style={{ fontSize: '2rem' }}>+</span>
                        </summary>
                        <div className="faq-answer">
                            Yes. The core terminal features, including live data streams and graduation tracking, are 100% free. We believe in providing the best data to the Solana community without barriers.
                        </div>
                    </details>

                    <details className="faq-item group">
                        <summary className="faq-question">
                            <span style={{ fontSize: '1.5rem', fontWeight: '900', fontStyle: 'italic', textTransform: 'uppercase' }}>Do I need to connect a wallet?</span>
                            <span className="ff-text-primary" style={{ fontSize: '2rem' }}>+</span>
                        </summary>
                        <div className="faq-answer">
                            No. You can monitor the market and browse all terminal data anonymously. You only need to connect a wallet if you wish to use our integrated trading module or sync your favorites across devices.
                        </div>
                    </details>

                    <details className="faq-item group">
                        <summary className="faq-question">
                            <span style={{ fontSize: '1.5rem', fontWeight: '900', fontStyle: 'italic', textTransform: 'uppercase' }}>How accurate is the data?</span>
                            <span className="ff-text-primary" style={{ fontSize: '2rem' }}>+</span>
                        </summary>
                        <div className="faq-answer">
                            We pull data directly from our proprietary Solana node infrastructure. Our graduation radar typically identifies tokens 10–90 seconds before they become visible on standard DEX aggregators.
                        </div>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default FAQ;

