import React from 'react';
import { Shield, Zap, Target } from 'lucide-react';

const EliteSpecs = () => {
  const specs = [
    {
      icon: <Shield className="w-8 h-8 text-[#10b981]" />,
      titleLine1: "REINFORCED",
      titleLine2: "SECURITY",
      description: "Connect your wallet with military-grade encryption. Every transaction is verified through our secure node infrastructure to ensure your assets are protected while you flip.",
      statusLabel: "STATUS:",
      statusValue: "VERIFIED"
    },
    {
      icon: <Zap className="w-8 h-8 text-[#10b981]" />,
      titleLine1: "PULSE",
      titleLine2: "EXECUTION",
      description: "Sub-second token detection and instant execution. Our optimized routing engine ensures you get the best entries on trending Solana launches before the crowd even sees them.",
      statusLabel: "LATENCY:",
      statusValue: "42MS"
    },
    {
      icon: <Target className="w-8 h-8 text-[#10b981]" />,
      titleLine1: "PRECISION",
      titleLine2: "SIGNALS",
      description: "Advanced data-dense interface with real-time narratives and hype tracking. Identify high-conviction plays using our proprietary graduation metrics and bonding curve analysis.",
      statusLabel: "ACCURACY:",
      statusValue: "OPTIMAL"
    }
  ];

  return (
    <section id="elite-specs" className="relative py-[120px] bg-[#05080a] overflow-hidden">
      <div className="container mx-auto px-4 md:px-[21px] max-w-[1280px]">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[2.5rem] md:text-[40px] font-bold italic uppercase tracking-[0.05em] leading-tight mb-4">
            ELITE <span className="text-[#10b981] cyber-glow">SPECS</span>
          </h2>
          <p className="text-[0.8rem] md:text-[13px] font-mono uppercase tracking-[0.1em] text-[#94a3b8]">
            ENGINEERED FOR PROFESSIONAL SOLANA TRADERS
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {specs.map((spec, index) => (
            <div 
              key={index} 
              className="cyber-card relative flex flex-col p-8 rounded-lg bg-[#0a1510] border border-[#121e1a] transition-all duration-300 group hover:border-[#10b981] hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]"
            >
              {/* Icon Container */}
              <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-[#121e1a] border border-[#121e1a] mb-8 group-hover:border-[#10b981]/30 transition-colors">
                {spec.icon}
              </div>

              {/* Title */}
              <h3 className="text-[1.25rem] md:text-[20px] font-bold italic uppercase tracking-[0.05em] mb-4 flex flex-wrap gap-x-2">
                <span>{spec.titleLine1}</span>
                <span className="text-[#10b981]">{spec.titleLine2}</span>
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base leading-relaxed text-[#94a3b8] mb-12 flex-grow">
                {spec.description}
              </p>

              {/* Status Indicator */}
              <div className="mt-auto pt-6 border-t border-[#121e1a] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] md:text-[11px] font-mono uppercase tracking-wider text-[#94a3b8]">
                    {spec.statusLabel} <span className="text-[#10b981] font-bold">{spec.statusValue}</span>
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#10b981] shadow-[0_0_8px_#10b981] animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#10b981]/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
    </section>
  );
};

export default EliteSpecs;