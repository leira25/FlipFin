import React from 'react';
import { Coins, TrendingUp, Gift, Users, Zap } from 'lucide-react';

const FlipToken = () => {
  const tokenomics = [
    { label: "Total Supply", value: "1B", sub: "$FLIP" },
    { label: "Dev Supply", value: "10%", sub: "Transparent" },
    { label: "Marketing", value: "5%", sub: "Locked Fair" },
    { label: "Public Sale", value: "85%", sub: "Fair Launch" },
    // { label: "Liquidity", value: "100%", sub: "Burned Forever" },
  ];

  const utility = [
    "Governance voting on platform features",
    "Fee discounts on trades",
    "Access to premium features",
    "Future staking rewards",
    "Revenue sharing (roadmap)"
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#05080a] to-[#0a1510] overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#02c076]/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold italic uppercase tracking-wider mb-6">
            $FLIP <span className="text-[#02c076] cyber-glow">Token</span>
          </h2>
          <p className="text-lg md:text-xl text-[#94a3b8] font-mono uppercase tracking-widest max-w-3xl mx-auto">
            Coming to PumpFun - The future of Solana trading rewards
          </p>
        </div>

        {/* Tokenomics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
          {tokenomics.map((item, index) => (
            <div key={index} className="cyber-card relative p-8 border border-[#121e1a] text-center group hover:border-[#02c076] transition-all duration-300 overflow-hidden">
              {/* Animated gradient border */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#02c076]/5 to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="text-4xl font-black text-white mb-2">{item.value}</div>
                <div className="text-sm text-[#94a3b8] uppercase tracking-wider mb-1">{item.label}</div>
                <div className="text-xs text-[#02c076] font-medium">{item.sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Token Utility */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-[#1e2329]/50 border border-[#2b3139] rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Coins className="w-6 h-6 text-[#02c076]" />
              Token Utility
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {utility.map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-[#121e1a] rounded-xl">
                  <div className="w-5 h-5 rounded-full bg-[#02c076] flex items-center justify-center flex-shrink-0">
                    <Coins size={14} className="text-white" />
                  </div>
                  <span className="text-sm text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#02c076] to-emerald-400 rounded-2xl blur opacity-25 group-hover:opacity-75 transition-opacity duration-300"></div>
            <div className="relative bg-[#05080a] border border-[#121e1a] rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                Get $FLIP
              </h3>
              <p className="text-[#94a3b8] mb-8 max-w-2xl mx-auto">
                Follow for launch announcements and be the first to know when $FLIP drops on PumpFun.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                <a
                  href="https://x.com/flipfindotfun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#02c076] to-emerald-400 text-black font-bold text-lg rounded-xl hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                >
                  <span>Follow on X</span>
                  <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center group-hover:bg-white transition-colors">
                    <TrendingUp size={16} className="text-[#02c076] group-hover:text-black transition-colors" />
                  </div>
                </a>
                <button
                  
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#f6465d] to-red-400 text-white font-bold text-lg rounded-xl hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(246,70,93,0.3)]"
                >
                <a href="#elite-specs"><span>View Specs</span></a>  
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center group-hover:bg-[#f6465d] transition-colors">
                    <Zap size={16} className="text-[#f6465d] group-hover:text-white transition-colors" />
                  </div>
                </button>
              </div>
              {/* <div className="text-sm text-[#94a3b8] font-mono tracking-wider">
                CA: SOON
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlipToken;