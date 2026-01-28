import React from 'react';
import { Scale, AlertTriangle, Shield, Users } from 'lucide-react';

const TermsOfService = () => {
  const legalSections = [
    { title: "Acceptance", content: "By using Flip Finance, you agree to these Terms. If you disagree, don't use the platform." },
    { title: "Eligibility", content: "You must be 18+ and legally permitted to use crypto/DeFi services in your jurisdiction." },
    { title: "Nature of Service", content: "We provide a trading interface. We don't custody funds, execute trades on your behalf, or provide financial advice." },
    { title: "Your Responsibility", content: "You're responsible for your private key security and all trading decisions." },
    { title: "Limitation of Liability", content: "We're not liable for losses from trading, smart contract failures, or third-party outages." },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#05080a] to-[#0a1510] overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-slate-500/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gray-400/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold italic uppercase tracking-wider mb-6">
            Terms of <span className="text-[#6b7280] cyber-glow">Service</span>
          </h2>
          <p className="text-lg md:text-xl text-[#94a3b8] font-mono uppercase tracking-widest max-w-3xl mx-auto">
            Updated January 2026 - Please read carefully before using our platform
          </p>
        </div>

        {/* Legal Sections */}
        <div className="max-w-4xl mx-auto space-y-8">
          {legalSections.map((section, index) => (
            <div key={index} className="cyber-card p-8 border border-[#121e1a] group hover:border-[#6b7280] transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#121e1a] border border-[#121e1a] flex items-center justify-center group-hover:border-[#6b7280]/30 transition-colors">
                  <Scale className="w-6 h-6 text-[#6b7280] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-3 text-sm">{index + 1}. {section.title}</h4>
                  <p className="text-sm text-[#94a3b8] leading-relaxed">{section.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Warning Box */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="relative overflow-hidden rounded-xl bg-[#f6465d]/10 border border-[#f6465d]/30 p-8">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#f6465d]/20 rounded-full blur-[60px]" />
            <div className="relative flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#f6465d] flex items-center justify-center flex-shrink-0 mt-0.5">
                <AlertTriangle size={20} className="text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#f6465d] mb-2">Important Notice</h4>
                <p className="text-[#f6465d]/90 leading-relaxed">
                  These terms constitute a legally binding agreement between you and Flip Finance. 
                  By using our platform, you acknowledge that you have read, understood, and agree 
                  to be bound by these terms. If you do not agree, please do not use our services.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#6b7280] to-gray-400 rounded-2xl blur opacity-25 group-hover:opacity-75 transition-opacity duration-300"></div>
            <div className="relative bg-[#05080a] border border-[#121e1a] rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Trade?
              </h3>
              <p className="text-[#94a3b8] mb-8 max-w-2xl mx-auto">
                By using Flip Finance, you agree to these Terms of Service. 
                Trade responsibly and understand the risks involved.
              </p>
              <a
                href="https://flipfin.fun/"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#6b7280] to-gray-400 text-black font-bold text-lg rounded-xl hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(107,114,128,0.3)]"
              >
                <span>Start Trading</span>
                <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center group-hover:bg-white transition-colors">
                  <Shield size={16} className="text-[#6b7280] group-hover:text-black transition-colors" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsOfService;