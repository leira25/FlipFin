import React from 'react';
import { Terminal, Zap, BarChart3, Users, Eye, Coins, Rocket, Sparkles } from 'lucide-react';

const Features = () => {
  const features = [
    { title: "Token Explorer", desc: "Real-time trending tokens with volume, MC, and price changes", tag: "HOME" },
    { title: "Trading Terminal", desc: "Professional interface with security checks & holder analysis", tag: "TRADE" },
    { title: "Money Flow", desc: "Visualize capital movement between tokens in real-time", tag: "FLOW" },
    { title: "Narrative Tracker", desc: "Track market narratives, momentum, and smart money moves", tag: "ALPHA" },
    { title: "Hype Feed", desc: "Live X sentiment analysis from BullX - catch the wave early", tag: "SOCIAL" },
    { title: "Wallet Tracker", desc: "Monitor whales, copy successful traders, get alerts", tag: "COPY" },
    { title: "Portfolio PnL", desc: "Full holdings view with unrealized gains and CSV export", tag: "TRACK" },
    { title: "Points System", desc: "Earn rewards for trading volume and referrals", tag: "EARN" },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#05080a] to-[#0a1510] overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} className="border-l border-[#121e1a] h-full"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold italic uppercase tracking-wider mb-6">
            Your <span className="text-[#10b981] cyber-glow">Trading Arsenal</span>
          </h2>
          <p className="text-lg md:text-xl text-[#94a3b8] font-mono uppercase tracking-widest max-w-3xl mx-auto">
            Everything you need to trade Solana like a pro. Built for speed, designed for success.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="cyber-card p-6 border border-[#121e1a] group hover:border-[#10b981] transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                  <p className="text-sm text-[#94a3b8] leading-relaxed">{feature.desc}</p>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#10b981]/10 text-[#10b981] font-mono">
                  {feature.tag}
                </span>
              </div>
              
              {/* Status Indicator */}
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-[#121e1a] rounded-full group-hover:bg-[#10b981] transition-colors"></div>
                  ))}
                </div>
                <span className="text-xs text-[#94a3b8] font-mono">ACTIVE</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#10b981] to-emerald-400 rounded-2xl blur opacity-25 group-hover:opacity-75 transition-opacity duration-300"></div>
            <div className="relative bg-[#05080a] border border-[#121e1a] rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Level Up?
              </h3>
              <p className="text-[#94a3b8] mb-8 max-w-2xl mx-auto">
                Join thousands of professional traders who trust FlipFin for their Solana trading needs. 
                Fast, secure, and built for maximum alpha extraction.
              </p>
              <a
                href="https://flipfin.fun/"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#10b981] to-emerald-400 text-black font-bold text-lg rounded-xl hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
              >
                <span>Launch Terminal</span>
                <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center group-hover:bg-white transition-colors">
                  <Rocket size={16} className="text-[#10b981] group-hover:text-black transition-colors" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;