import React from 'react';

const FeaturesShowcase = () => {
  const features = [
    {
      title: "Token Explorer",
      desc: "Real-time trending tokens with volume, MC, and price changes",
      tag: "HOME",
      color: "from-emerald-500 to-teal-400"
    },
    {
      title: "Trading Terminal",
      desc: "Professional interface with security checks & holder analysis",
      tag: "TRADE",
      color: "from-blue-500 to-cyan-400"
    },
    {
      title: "Money Flow",
      desc: "Visualize capital movement between tokens in real-time",
      tag: "FLOW",
      color: "from-purple-500 to-pink-400"
    },
    {
      title: "Narrative Tracker",
      desc: "Track market narratives, momentum, and smart money moves",
      tag: "ALPHA",
      color: "from-orange-500 to-red-400"
    },
    {
      title: "Hype Feed",
      desc: "Live X sentiment analysis from BullX - catch the wave early",
      tag: "SOCIAL",
      color: "from-indigo-500 to-blue-400"
    },
    {
      title: "Wallet Tracker",
      desc: "Monitor whales, copy successful traders, get alerts",
      tag: "COPY",
      color: "from-green-500 to-emerald-400"
    },
    {
      title: "Portfolio PnL",
      desc: "Full holdings view with unrealized gains and CSV export",
      tag: "TRACK",
      color: "from-yellow-500 to-orange-400"
    },
    {
      title: "Points System",
      desc: "Earn rewards for trading volume and referrals",
      tag: "EARN",
      color: "from-pink-500 to-rose-400"
    }
  ];

  return (
    <section id="advanced-features" className="relative w-full py-24 md:py-32 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-[#10b981]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-gradient-to-br from-[#3b82f6]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-br from-[#8b5cf6]/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold italic tracking-tighter text-white mb-4">
            Advanced Trading
            <span className="text-neon-green"> Features</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-mono uppercase tracking-wider">
            Everything you need to trade like a pro
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-[#0b0e11] to-[#0a1218] border border-[#121e1a] rounded-[12px] p-6 hover:border-[#10b981]/50 transition-all duration-300 hover:shadow-[0_0_25px_rgba(16,185,129,0.15)]"
            >
              {/* Tag Badge */}
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-black mb-4 bg-gradient-to-r ${feature.color}`}>
                {feature.tag}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-green transition-colors">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed font-mono">
                {feature.desc}
              </p>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 rounded-[12px] bg-gradient-to-br from-transparent via-[#10b981]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-[#0b0e11] to-[#0a1218] border border-[#121e1a] rounded-full px-8 py-4">
            <span className="text-sm font-mono text-muted-foreground uppercase tracking-wider">
              Ready to level up your trading?
            </span>
              <a
              href="https://qa.flipfin.fun/"
              className="group relative flex h-[36px] items-center justify-center rounded-full bg-[#10b981] px-6 text-sm font-bold uppercase text-black transition-all hover:bg-[#0ea271] hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]"
            >
              <span className="relative z-10">Launch Terminal</span>
              <div className="absolute inset-0 rounded-full border border-[#10b981]/30 group-hover:border-[#10b981]/60 transition-colors"></div>
            </a>
          </div>
        </div>
      </div>

      {/* Scanline overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[repeating-linear-gradient(0deg,transparent,transparent_1px,#000_2px)]"></div>
    </section>
  );
};

export default FeaturesShowcase;
