import React from 'react';
import { Lock, Eye, Shield, Check } from 'lucide-react';

const WalletSecurity = () => {
  const securityItems = [
    { icon: <Lock size={24} />, title: "Local Storage Only", desc: "Your private key never leaves your browser. We can't access it." },
    { icon: <Eye size={24} />, title: "No Tracking", desc: "We don't collect personal data, IPs, or identification info." },
    { icon: <Shield size={24} />, title: "Direct Transactions", desc: "Sign transactions locally - nothing goes through our servers." },
  ];

  const bestPractices = [
    "Backup your private key in multiple secure locations",
    "Never share your key with anyone - we will never ask for it",
    "Use a dedicated trading wallet with limited funds",
    "Clearing browser data removes your wallet - backup first"
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#0a1510] to-[#05080a] overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#3b82f6]/20 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold italic uppercase tracking-wider mb-6">
            Your Keys, Your <span className="text-[#3b82f6] cyber-glow">Crypto</span>
          </h2>
          <p className="text-lg md:text-xl text-[#94a3b8] font-mono uppercase tracking-widest max-w-3xl mx-auto">
            Military-grade security with zero custodial risk. True DeFi means full control.
          </p>
        </div>

        {/* Security Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {securityItems.map((item, index) => (
            <div key={index} className="cyber-card p-8 border border-[#121e1a] text-center group hover:border-[#3b82f6] transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-[#121e1a] border border-[#121e1a] mb-6 group-hover:border-[#3b82f6]/30 transition-colors">
                <div className="text-[#3b82f6] group-hover:text-white transition-colors">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-[#94a3b8] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Security Checklist */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#1e2329]/50 border border-[#2b3139] rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Check className="w-6 h-6 text-[#3b82f6]" />
              Security Best Practices
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {bestPractices.map((practice, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-[#121e1a] rounded-xl">
                  <div className="w-5 h-5 rounded-full bg-[#3b82f6] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={14} className="text-white" />
                  </div>
                  <span className="text-sm text-gray-300">{practice}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Warning Box */}
          <div className="relative overflow-hidden rounded-xl bg-[#f6465d]/10 border border-[#f6465d]/30 p-8">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#f6465d]/20 rounded-full blur-[60px]" />
            <div className="relative flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#f6465d] flex items-center justify-center flex-shrink-0 mt-0.5">
                <div className="w-4 h-4 rounded-full bg-white"></div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#f6465d] mb-2">Critical Warning</h4>
                <p className="text-[#f6465d]/90 leading-relaxed">
                  Your private key = your funds. If you lose it or share it, your funds are gone forever. 
                  We cannot help recover lost keys. This is the fundamental principle of true DeFi - 
                  with great power comes great responsibility.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#3b82f6] to-cyan-400 rounded-2xl blur opacity-25 group-hover:opacity-75 transition-opacity duration-300"></div>
            <div className="relative bg-[#05080a] border border-[#121e1a] rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Take Control?
              </h3>
              <p className="text-[#94a3b8] mb-8 max-w-2xl mx-auto">
                Experience the freedom of true DeFi trading. Your keys, your crypto, your complete control.
              </p>
              <a
                href="https://qa.flipfin.fun/"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#3b82f6] to-cyan-400 text-black font-bold text-lg rounded-xl hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
              >
                <span>Start Secure Trading</span>
                <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center group-hover:bg-white transition-colors">
                  <Shield size={16} className="text-[#3b82f6] group-hover:text-black transition-colors" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WalletSecurity;