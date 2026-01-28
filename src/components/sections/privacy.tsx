import React from 'react';
import { Eye, Lock, Globe, Users } from 'lucide-react';

const Privacy = () => {
  const collected = [
    "Wallet addresses (public blockchain data)",
    "Trading activity (public blockchain data)",
    "Referral relationships (for points)"
  ];

  const notCollected = [
    "Personal identification info",
    "IP addresses",
    "Email (unless you provide it)",
    "Private keys (never)"
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#0a1510] to-[#05080a] overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-400/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold italic uppercase tracking-wider mb-6">
            Privacy <span className="text-[#8b5cf6] cyber-glow">Policy</span>
          </h2>
          <p className="text-lg md:text-xl text-[#94a3b8] font-mono uppercase tracking-widest max-w-3xl mx-auto">
            What we collect (almost nothing) - Your privacy is our priority
          </p>
        </div>

        {/* Privacy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* What We Collect */}
          <div className="cyber-card p-8 border border-[#121e1a] group hover:border-[#8b5cf6] transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-[#8b5cf6]/10">
                <Eye className="w-6 h-6 text-[#8b5cf6]" />
              </div>
              <h3 className="text-2xl font-bold text-white">What We See</h3>
            </div>
            <div className="space-y-3">
              {collected.map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-sm text-[#94a3b8]">
                  <div className="w-2 h-2 rounded-full bg-[#8b5cf6]"></div>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* What We Don't Collect */}
          <div className="cyber-card p-8 border border-[#121e1a] group hover:border-[#8b5cf6] transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-[#8b5cf6]/10">
                <Lock className="w-6 h-6 text-[#8b5cf6]" />
              </div>
              <h3 className="text-2xl font-bold text-[#8b5cf6]">Never Collected</h3>
            </div>
            <div className="space-y-3">
              {notCollected.map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-sm text-[#94a3b8]">
                  <div className="w-3 h-3 rounded-full bg-[#8b5cf6] flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Privacy Statement */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-[#1e2329]/50 border border-[#2b3139] rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Globe className="w-6 h-6 text-[#8b5cf6]" />
              Your Private Key Security
            </h3>
            <p className="text-[#94a3b8] leading-relaxed text-lg">
              Your private key is stored ONLY in your browser's localStorage. It never leaves your device. 
              This is the foundation of true DeFi - complete control over your funds with complete 
              responsibility for their security. We cannot access, recover, or help you with your private key.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#8b5cf6] to-violet-400 rounded-2xl blur opacity-25 group-hover:opacity-75 transition-opacity duration-300"></div>
            <div className="relative bg-[#05080a] border border-[#121e1a] rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                Privacy First
              </h3>
              <p className="text-[#94a3b8] mb-8 max-w-2xl mx-auto">
                We believe in true privacy and decentralization. Your data stays yours, 
                your keys stay yours, and your privacy stays protected.
              </p>
              <a
                href="https://qa.flipfin.fun/"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#8b5cf6] to-violet-400 text-black font-bold text-lg rounded-xl hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(139,92,246,0.3)]"
              >
                <span>Start Private Trading</span>
                <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center group-hover:bg-white transition-colors">
                  <Users size={16} className="text-[#8b5cf6] group-hover:text-black transition-colors" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Privacy;