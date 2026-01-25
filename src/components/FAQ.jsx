import React from 'react';

const FAQ = () => {
    return (
        <section id="faq" className="py-24 md:py-32 border-t border-border">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-black italic uppercase tracking-tighter mb-4">Terminal <span className="text-primary">Intel</span></h2>
                    <p className="text-muted-foreground font-medium uppercase text-xs tracking-widest">Frequently asked questions</p>
                </div>
                
                <div className="space-y-4">
                    <details className="group bg-card border border-border rounded overflow-hidden">
                        <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                            <span className="text-xl font-black italic uppercase">Is FlipFin free?</span>
                            <span className="text-primary transition-transform group-open:rotate-45">+</span>
                        </summary>
                        <div className="px-6 pb-6 text-muted-foreground leading-relaxed font-medium border-t border-border/50 pt-4">
                            Yes. The core terminal features, including live data streams and graduation tracking, are 100% free. We believe in providing the best data to the Solana community without barriers.
                        </div>
                    </details>

                    <details className="group bg-card border border-border rounded overflow-hidden">
                        <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                            <span className="text-xl font-black italic uppercase">Do I need to connect a wallet?</span>
                            <span className="text-primary transition-transform group-open:rotate-45">+</span>
                        </summary>
                        <div className="px-6 pb-6 text-muted-foreground leading-relaxed font-medium border-t border-border/50 pt-4">
                            No. You can monitor the market and browse all terminal data anonymously. You only need to connect a wallet if you wish to use our integrated trading module or sync your favorites across devices.
                        </div>
                    </details>

                    <details className="group bg-card border border-border rounded overflow-hidden">
                        <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                            <span className="text-xl font-black italic uppercase">How accurate is the data?</span>
                            <span className="text-primary transition-transform group-open:rotate-45">+</span>
                        </summary>
                        <div className="px-6 pb-6 text-muted-foreground leading-relaxed font-medium border-t border-border/50 pt-4">
                            We pull data directly from our proprietary Solana node infrastructure. Our graduation radar typically identifies tokens 10–90 seconds before they become visible on standard DEX aggregators.
                        </div>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
