import React from 'react';
import { AlertTriangle, TrendingDown, Zap, Users, Globe } from 'lucide-react';

const RiskDisclaimer = () => {
  const risks = [
    "Token prices can go to zero instantly",
    "Rug pulls and scams are extremely common",
    "Smart contracts may have exploits",
    "Liquidity can vanish without warning",
    "Most new tokens fail"
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#05080a] to-[#0a1510] overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rose-400/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold italic uppercase tracking-wider mb-6">
            Risk <span className="text-[#f6465d] cyber-glow">Disclaimer</span>
          </h2>
          <p className="text-lg md:text-xl text-[#94a3b8] font-mono uppercase tracking-widest max-w-3xl mx-auto">
            Read this carefully - Trading crypto involves substantial risk
          </p>
        </div>

        {/* Critical Warning */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative overflow-hidden rounded-xl bg-[#f6465d]/10 border border-[#f6465d]/30 p-8">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#f6465d]/20 rounded-full blur-[60px]" />
            <div className="relative flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#f6465d] flex items-center justify-center flex-shrink-0 mt-0.5">
                <AlertTriangle size={28} className="text-white" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-[#f6465d] mb-4">Critical Warning</h4>
                <p className="text-[#f6465d]/90 leading-relaxed text-lg">
                  Cryptocurrency trading involves substantial risk. You can lose your entire investment. 
                  Only trade what you can afford to lose completely. This is not financial advice.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Risks */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-[#1e2329]/50 border border-[#2b3139] rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-[#f6465d]" />
              Key Risks
            </h3>
            <div className="space-y-4">
              {risks.map((risk, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-[#121e1a] rounded-xl group hover:bg-[#1e2329] transition-colors">
                  <div className="w-6 h-6 rounded-full bg-[#f6465d] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <AlertTriangle size={16} className="text-white" />
                  </div>
                  <span className="text-sm text-gray-300">{risk}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* DYOR Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-[#1e2329]/50 border border-[#2b3139] rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Zap className="w-6 h-6 text-[#f6465d]" />
              Do Your Own Research (DYOR)
            </h3>
            <p className="text-[#94a3b8] leading-relaxed text-lg">
              Verify contracts, check teams, understand tokenomics. Nothing on Flip Finance is financial advice. 
              Always research thoroughly before making any trading decisions. The crypto space is highly volatile 
              and speculative - proceed with extreme caution.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#f6465d] to-rose-400 rounded-2xl blur opacity-25 group-hover:opacity-75 transition-opacity duration-300"></div>
            <div className="relative bg-[#05080a] border border-[#121e1a] rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                Trade Responsibly
              </h3>
              <p className="text-[#94a3b8] mb-8 max-w-2xl mx-auto">
                Understand the risks, trade within your means, and never invest more than you can afford to lose. 
                The crypto market is unpredictable and highly volatile.
              </p>
              <a
                href="https://qa.flipfin.fun/"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#f6465d] to-rose-400 text-black font-bold text-lg rounded-xl hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(246,70,93,0.3)]"
              >
                <span>Start Trading</span>
                <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center group-hover:bg-white transition-colors">
                  <TrendingDown size={16} className="text-[#f6465d] group-hover:text-black transition-colors" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiskDisclaimer;