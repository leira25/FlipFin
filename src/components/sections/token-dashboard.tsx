import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, DollarSign, Zap, Clock, Eye, Target } from 'lucide-react';

const TokenDashboard = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const hotTokens = [
    {
      name: "MOONBAG",
      symbol: "MOON",
      price: "$0.000456",
      change: "+124%",
      volume: "$2.1M",
      status: "HOT",
      color: "#10b981"
    },
    {
      name: "NEBULA",
      symbol: "NEB",
      price: "$0.000123",
      change: "-15%",
      volume: "$890K",
      status: "COOLING",
      color: "#f59e0b"
    },
    {
      name: "RAPTOR",
      symbol: "RAP",
      price: "$0.000789",
      change: "+340%",
      volume: "$5.2M",
      status: "EXPLOSIVE",
      color: "#ef4444"
    },
    {
      name: "AURORA",
      symbol: "AUR",
      price: "$0.000056",
      change: "+87%",
      volume: "$1.3M",
      status: "RISING",
      color: "#3b82f6"
    }
  ];

  const metrics = [
    {
      label: "Active Traders",
      value: "2,847",
      icon: <Zap size={20} />
    },
    {
      label: "24h Volume",
      value: "$47.2M",
      icon: <DollarSign size={20} />
    },
    {
      label: "Avg Latency",
      value: "42ms",
      icon: <Clock size={20} />
    }
  ];

  return (
    <section className="relative py-16 bg-gradient-to-b from-[#05080a] to-[#0a1510] overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} className="border-l border-[#121e1a] h-full"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold italic uppercase tracking-wider mb-4">
            Live <span className="text-[#10b981] cyber-glow">Market</span> Feed
          </h2>
          <p className="text-sm md:text-base text-[#94a3b8] font-mono uppercase tracking-widest">
            Real-time Solana token intelligence
          </p>
        </div>

        {/* Metrics Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {metrics.map((metric, index) => (
            <div key={index} className="cyber-card p-6 border border-[#121e1a]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="text-[#10b981]">{metric.icon}</div>
                  <div>
                    <div className="text-xs text-[#94a3b8] uppercase tracking-wider font-mono">
                      {metric.label}
                    </div>
                    <div className="text-2xl font-bold text-white font-mono">
                      {metric.value}
                    </div>
                  </div>
                </div>
                <div className="w-2 h-2 bg-[#10b981] rounded-full animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Token Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hotTokens.map((token, index) => (
            <div key={index} className="cyber-card p-6 border border-[#121e1a] group hover:border-[#10b981] transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-white font-mono">{token.name}</h3>
                  <p className="text-sm text-[#94a3b8] font-mono">{token.symbol}</p>
                </div>
                <div 
                  className="px-3 py-1 rounded-full text-xs font-bold font-mono"
                  style={{ backgroundColor: `${token.color}20`, color: token.color }}
                >
                  {token.status}
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#94a3b8] font-mono">Price</span>
                  <span className="text-white font-mono font-bold">{token.price}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#94a3b8] font-mono">24h Change</span>
                  <span className={`font-mono font-bold ${token.change.startsWith('+') ? 'text-[#10b981]' : 'text-[#ef4444]'}`}>
                    {token.change}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#94a3b8] font-mono">Volume</span>
                  <span className="text-white font-mono">{token.volume}</span>
                </div>
              </div>

              {/* Status Indicator */}
              <div className="mt-4 flex items-center justify-between">
                <div className="flex gap-2">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-[#121e1a] rounded-full group-hover:bg-[#10b981] transition-colors"></div>
                  ))}
                </div>
                <span className="text-xs text-[#94a3b8] font-mono">LIVE</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Status Bar */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#94a3b8] font-mono">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#10b981] rounded-full animate-pulse"></div>
              SYSTEM ONLINE
            </span>
            <span className="flex items-center gap-2">
              <Eye size={14} />
              MONITORING 24/7
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span>LAST UPDATE: {time.toLocaleTimeString()}</span>
            <span className="flex items-center gap-2">
              <Target size={14} />
              PRECISION MODE
            </span>
          </div>
        </div>
      </div>

      {/* Subtle Bottom Glow Overlay */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px]"
        style={{
          background:
            "radial-gradient(circle at 50% 100%, rgba(16, 185, 129, 0.05) 0%, transparent 60%)",
        }}
      />
    </section>
  );
};

export default TokenDashboard;