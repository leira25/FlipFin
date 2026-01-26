import React from 'react';

const FAQ = () => {
    return (
        <section id="faq" className="tokens-section">
            <div className="section-container max-w-4xl">
                <div className="text-center mb-16 md:mb-24">
                    <h2 className="section-title">Terminal <span className="ff-text-primary">Intel</span></h2>
                    <p style={{ color: 'var(--ff-muted)', fontWeight: '500', textTransform: 'uppercase', fontSize: '14px', letterSpacing: '0.1em' }}>Frequently asked questions</p>
                </div>
                
                <div className="flex flex-col">
                    <details className="faq-item group" open>
                        <summary className="faq-question">
                            <span className="text-xl md:text-2xl font-black italic uppercase">Is FlipFin free?</span>
                            <span className="ff-text-primary text-3xl">+</span>
                        </summary>
                        <div className="faq-answer text-lg leading-relaxed pt-6">
                            Yes. The core terminal features, including live data streams and graduation tracking, are 100% free. We believe in providing the best data to the Solana community without barriers.
                        </div>
                    </details>

                    <details className="faq-item group">
                        <summary className="faq-question">
                            <span className="text-xl md:text-2xl font-black italic uppercase">Do I need to connect a wallet?</span>
                            <span className="ff-text-primary text-3xl">+</span>
                        </summary>
                        <div className="faq-answer text-lg leading-relaxed pt-6">
                            No. You can monitor the market and browse all terminal data anonymously. You only need to connect a wallet if you wish to use our integrated trading module or sync your favorites across devices.
                        </div>
                    </details>
  
                    <details className="faq-item group">
                        <summary className="faq-question">
                            <span className="text-xl md:text-2xl font-black italic uppercase">How accurate is the data?</span>
                            <span className="ff-text-primary text-3xl">+</span>
                        </summary>
                        <div className="faq-answer text-lg leading-relaxed pt-6">
                            We pull data directly from our proprietary Solana node infrastructure. Our graduation radar typically identifies tokens 10–90 seconds before they become visible on standard DEX aggregators.
                        </div>
                    </details>

                </div>
            </div>
        </section>
    );
};

export default FAQ;

