import React from 'react';
import { Gift, Users, TrendingUp, AlertTriangle, Check } from 'lucide-react';

const Rewards = () => {
  const rewards = [
    { value: "1 PT", label: "per $1 traded", desc: "Points accumulate automatically" },
    { value: "20%", label: "Level 1 referral", desc: "From direct referrals" },
    { value: "5%", label: "Level 2 referral", desc: "From indirect referrals" },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#0a1510] to-[#05080a] overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-500/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-400/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold italic uppercase tracking-wider mb-6">
            Airdrop <span className="text-[#f6465d] cyber-glow">Season 1</span>
          </h2>
          <p className="text-lg md:text-xl text-[#94a3b8] font-mono uppercase tracking-widest max-w-3xl mx-auto">
            Earn points, build your allocation, and get ready for the $FLIP airdrop
          </p>
        </div>

        {/* Rewards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {rewards.map((reward, index) => (
            <div key={index} className="cyber-card relative p-8 border border-[#121e1a] text-center group hover:border-[#f6465d] transition-all duration-300 overflow-hidden">
              {/* Animated gradient border */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#f6465d]/5 to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="text-4xl font-black text-[#f6465d] mb-2">{reward.value}</div>
                <div className="text-sm font-medium text-white mb-1">{reward.label}</div>
                <div className="text-xs text-[#94a3b8]">{reward.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Warning Box */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative overflow-hidden rounded-xl bg-amber-500/10 border border-amber-500/20 p-8">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/20 rounded-full blur-[60px]" />
            <div className="relative flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                <AlertTriangle size={20} className="text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-amber-200 mb-2">Important Notice</h4>
                <p className="text-amber-200/90 leading-relaxed">
                  Airdrop coming SOON - no ETA yet. Stay updated by following us on X. The more points you accumulate now, the larger your allocation will be when the airdrop drops!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Note Box */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="flex items-start gap-4 p-6 bg-[#1e2329]/50 border-l-2 border-[#f6465d] rounded-xl">
            <div className="w-2 h-2 bg-[#f6465d] rounded-full mt-2"></div>
            <p className="text-sm text-gray-400 italic">
              Point values and reward structures may change before the airdrop. Keep trading and referring to maximize your rewards.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#f6465d] to-rose-400 rounded-2xl blur opacity-25 group-hover:opacity-75 transition-opacity duration-300"></div>
            <div className="relative bg-[#05080a] border border-[#121e1a] rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                Start Earning Points
              </h3>
              <p className="text-[#94a3b8] mb-8 max-w-2xl mx-auto">
                Every trade counts. Every referral multiplies your rewards. Get ready for the biggest airdrop in Solana trading.
              </p>
              <a
                href="https://qa.flipfin.fun/"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#f6465d] to-rose-400 text-black font-bold text-lg rounded-xl hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(246,70,93,0.3)]"
              >
                <span>Start Trading Now</span>
                <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center group-hover:bg-white transition-colors">
                  <TrendingUp size={16} className="text-[#f6465d] group-hover:text-black transition-colors" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rewards;