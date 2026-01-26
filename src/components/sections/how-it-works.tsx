import React from 'react';
import { Globe, Shield, Zap, Cpu, Book } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section id="how" className="py-[112px] bg-background relative overflow-hidden">
      <div className="container mx-auto px-5 lg:px-[21px] max-w-[1280px]">
        {/* Section Header */}
        <div className="mb-14 text-left">
          <h2 className="text-[14px] font-bold tracking-[0.1em] uppercase italic mb-1 flex items-center gap-1">
            Terminal <span className="text-primary cyber-glow">How It Works</span>
          </h2>
          <p className="text-[12px] text-muted-foreground uppercase font-mono tracking-wider">
            The lifecycle of a high-frequency Solana trade
          </p>
        </div>

        {/* Workflow Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Step 1 */}
          <div className="cyber-card p-8 group">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-10 h-10 border border-cyber-border rounded flex items-center justify-center bg-secondary transition-colors group-hover:border-primary">
                <Globe className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-[15px] font-bold italic uppercase tracking-wider">
                1. Liquidity Scouting
              </h3>
            </div>
            <p className="text-muted-foreground text-[14px] leading-relaxed font-sans">
              FlipFin scans every new pool on Raydium, Meteora, and Orca in real-time. Our algorithms filter for verified social metadata, high initial liquidity, and volume-to-market-cap efficiency.
            </p>
          </div>

          {/* Step 2 */}
          <div className="cyber-card p-8 group">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-10 h-10 border border-cyber-border rounded flex items-center justify-center bg-secondary transition-colors group-hover:border-primary">
                <Shield className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-[15px] font-bold italic uppercase tracking-wider">
                2. Risk Assessment
              </h3>
            </div>
            <p className="text-muted-foreground text-[14px] leading-relaxed font-sans">
              Automated rug-check protocols analyze contract mint authority, freeze authority, and top holder concentration. We only present opportunities that meet our strict "Safe-Entry" criteria.
            </p>
          </div>

          {/* Step 3 */}
          <div className="cyber-card p-8 group">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-10 h-10 border border-cyber-border rounded flex items-center justify-center bg-secondary transition-colors group-hover:border-primary">
                <Zap className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-[15px] font-bold italic uppercase tracking-wider">
                3. Tactical Entry
              </h3>
            </div>
            <p className="text-muted-foreground text-[14px] leading-relaxed font-sans">
              Execute trades with sub-40ms latency. Our private RPC nodes and Jito-integration bypass public congestion to ensure your transaction lands first in the block.
            </p>
          </div>

          {/* Step 4 */}
          <div className="cyber-card p-8 group">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-10 h-10 border border-cyber-border rounded flex items-center justify-center bg-secondary transition-colors group-hover:border-primary">
                <Cpu className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-[15px] font-bold italic uppercase tracking-wider">
                4. Advanced Automation
              </h3>
            </div>
            <p className="text-muted-foreground text-[14px] leading-relaxed font-sans">
              Go beyond manual trading with Copy Trading and AI-powered Sniper Bots. Follow alpha-wallets automatically or capture new launches the moment liquidity is added.
            </p>
          </div>
        </div>

        {/* Infrastructure Details Bar */}
        <div className="cyber-card p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded border border-cyber-border flex items-center justify-center bg-secondary">
              <Book className="w-4 h-4 text-primary" />
            </div>
            <h3 className="text-[14px] font-bold italic uppercase tracking-[0.1em]">
              Professional Solana Infrastructure
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <h4 className="text-[12px] font-bold uppercase italic text-foreground mb-2">Institutional Analytics</h4>
              <p className="text-[13px] text-muted-foreground font-sans leading-relaxed">
                Real-time OHLCV data via Birdeye, detailed holder distribution maps, and smart money tracking.
              </p>
            </div>
            <div>
              <h4 className="text-[12px] font-bold uppercase italic text-foreground mb-2">X Post Generator</h4>
              <p className="text-[13px] text-muted-foreground font-sans leading-relaxed">
                Professional marketing tools for token creators and alpha seekers to generate instant hype on X.
              </p>
            </div>
            <div>
              <h4 className="text-[12px] font-bold uppercase italic text-foreground mb-2">Points & Rewards</h4>
              <p className="text-[13px] text-muted-foreground font-sans leading-relaxed">
                Gamified trading experience—earn points for every swap and climb the global leaderboard.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;