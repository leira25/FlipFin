import React from 'react';

const FAQ = () => {
    return (
        <section className="py-20 border-t border-gray-800">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">FAQ</h2>
                <div className="space-y-6">
                    <details className="bg-card-bg border border-gray-800 rounded-xl p-6">
                        <summary className="font-semibold text-lg cursor-pointer">Is Flip Finance free?</summary>
                        <p className="mt-4 text-gray-400">Yes — core tracking and features are 100% free. Future premium tiers may add advanced alerts or API access.</p>
                    </details>
                    <details className="bg-card-bg border border-gray-800 rounded-xl p-6">
                        <summary className="font-semibold text-lg cursor-pointer">Do I need to connect a wallet?</summary>
                        <p className="mt-4 text-gray-400">No — browse live data anonymously. Connect only if you want Portfolio tracking & favorites sync.</p>
                    </details>
                    <details className="bg-card-bg border border-gray-800 rounded-xl p-6">
                        <summary className="font-semibold text-lg cursor-pointer">How accurate is the graduation radar?</summary>
                        <p className="mt-4 text-gray-400">We use real-time on-chain data — typically 10–90 seconds ahead of public DEX visibility.</p>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default FAQ;