import React, { useState } from 'react';

const FAQ = () => {
    return (
        <section id="faq" className="faq-section bg-[var(--ff-bg)]">
            <div className="section-container max-w-4xl">
                <div className="text-center mb-20 md:mb-32">
                    <h2 className="section-title mb-4">Terminal <span className="ff-text-primary cyber-glow-text">Intel</span></h2>
                    <p className="text-[var(--ff-muted)] font-medium uppercase text-sm tracking-widest">Frequently asked questions</p>
                </div>
                
                <div className="flex flex-col gap-4">
                    <details className="faq-item group" open>
                        <summary className="faq-question py-8 px-6 bg-[var(--ff-card)] border border-[var(--ff-border)] rounded-xl hover:border-[var(--ff-primary)] transition-colors">
                            <span className="text-xl md:text-2xl font-black italic uppercase">Is FlipFin free?</span>
                            <span className="ff-text-primary text-3xl group-open:rotate-45 transition-transform">+</span>
                        </summary>
                        <div className="faq-answer text-lg leading-relaxed p-8 bg-[var(--ff-bg)] border-x border-b border-[var(--ff-border)] rounded-b-xl -mt-2">
                            Yes. The core terminal features, including live data streams and graduation tracking, are 100% free. We believe in providing the best data to the Solana community without barriers.
                        </div>
                    </details>

                    <details className="faq-item group">
                        <summary className="faq-question py-8 px-6 bg-[var(--ff-card)] border border-[var(--ff-border)] rounded-xl hover:border-[var(--ff-primary)] transition-colors">
                            <span className="text-xl md:text-2xl font-black italic uppercase">Do I need to connect a wallet?</span>
                            <span className="ff-text-primary text-3xl group-open:rotate-45 transition-transform">+</span>
                        </summary>
                        <div className="faq-answer text-lg leading-relaxed p-8 bg-[var(--ff-bg)] border-x border-b border-[var(--ff-border)] rounded-b-xl -mt-2">
                            No. You can monitor the market and browse all terminal data anonymously. You only need to connect a wallet if you wish to use our integrated trading module or sync your favorites across devices.
                        </div>
                    </details>
  
                    <details className="faq-item group">
                        <summary className="faq-question py-8 px-6 bg-[var(--ff-card)] border border-[var(--ff-border)] rounded-xl hover:border-[var(--ff-primary)] transition-colors">
                            <span className="text-xl md:text-2xl font-black italic uppercase">How accurate is the data?</span>
                            <span className="ff-text-primary text-3xl group-open:rotate-45 transition-transform">+</span>
                        </summary>
                        <div className="faq-answer text-lg leading-relaxed p-8 bg-[var(--ff-bg)] border-x border-b border-[var(--ff-border)] rounded-b-xl -mt-2">
                            We pull data directly from our proprietary Solana node infrastructure. Our graduation radar typically identifies tokens 10–90 seconds before they become visible on standard DEX aggregators.
                        </div>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
