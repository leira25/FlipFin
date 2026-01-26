import React from 'react';
import { 
  Rocket, 
  Shield, 
  BarChart3, 
  Users, 
  Zap, 
  Globe, 
  Target, 
  TrendingUp 
} from 'lucide-react';

const FeaturesShowcase = () => {
  const features = [
    {
      icon: <Rocket size={32} />,
      title: "Lightning Execution",
      description: "Sub-40ms latency trading with optimized routing through Jupiter aggregator for best rates and fastest fills.",
      color: "#10b981",
      gradient: "from-[#10b981] to-emerald-400"
    },
    {
      icon: <Shield size={32} />,
      title: "Military-Grade Security",
      description: "Your private keys never leave your browser. Direct wallet integration with zero custodial risk.",
      color: "#3b82f6",
      gradient: "from-blue-500 to-cyan-400"
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Real-time Analytics",
      description: "Live price feeds, P&L tracking, and advanced charting tools built for professional traders.",
      color: "#f59e0b",
      gradient: "from-amber-500 to-orange-400"
    },
    {
      icon: <Users size={32} />,
      title: "Social Alpha",
      description: "Copy successful traders, track whale movements, and catch market sentiment from X in real-time.",
      color: "#8b5cf6",
      gradient: "from-purple-500 to-pink-400"
    },
    {
      icon: <Zap size={32} />,
      title: "Smart Money Tracking",
      description: "Identify high-conviction plays using our proprietary graduation metrics and bonding curve analysis.",
      color: "#ef4444",
      gradient: "from-red-500 to-rose-400"
    },
    {
      icon: <Globe size={32} />,
      title: "Multi-Chain Ready",
      description: "Built on Solana but designed for the future. Support for multiple blockchain ecosystems coming soon.",
      color: "#14b8a6",
      gradient: "from-teal-500 to-cyan-400"
    }
  ];

  const stats = [
    { label: "Active Users", value: "10K+", icon: <Users size={16} /> },
    { label: "Daily Volume", value: "$50M+", icon: <TrendingUp size={16} /> },
    { label: "Avg Latency", value: "<50ms", icon: <Target size={16} /> },
    { label: "Uptime", value: "99.9%", icon: <Zap size={16} /> }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#0a1510] to-[#05080a] overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#10b981] rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold italic uppercase tracking-wider mb-6">
            Professional <span className="text-[#10b981] cyber-glow">Trading</span> Arsenal
          </h2>
          <p className="text-lg md:text-xl text-[#94a3b8] font-mono uppercase tracking-widest max-w-3xl mx-auto">
            Everything you need to trade Solana like a pro. Built for speed, designed for success.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="cyber-card p-6 border border-[#121e1a] text-center group hover:border-[#10b981] transition-all duration-300">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="text-[#10b981]">{stat.icon}</div>
                <div className="w-2 h-2 bg-[#10b981] rounded-full animate-pulse"></div>
              </div>
              <div className="text-2xl font-bold text-white font-mono mb-1">{stat.value}</div>
              <div className="text-xs text-[#94a3b8] font-mono uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="cyber-card relative p-8 border border-[#121e1a] group hover:border-[#10b981] transition-all duration-300 overflow-hidden"
            >
              {/* Animated gradient border */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-[#121e1a] border border-[#121e1a] mb-6 group-hover:border-[#10b981]/30 transition-colors">
                  <div className="text-[#10b981] group-hover:text-white transition-colors">
                    {feature.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 font-mono">
                  {feature.title}
                </h3>
                
                <p className="text-[#94a3b8] leading-relaxed text-sm">
                  {feature.description}
                </p>
                
                {/* Feature tag */}
                <div className="mt-6 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#10b981]/10 text-[#10b981] font-mono">
                    PRO FEATURE
                  </span>
                  <div className="flex gap-1">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-[#121e1a] rounded-full group-hover:bg-[#10b981] transition-colors"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
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

export default FeaturesShowcase;