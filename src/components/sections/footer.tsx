import React from 'react';

const Footer = () => {
  return (
    <footer className="relative w-full border-t border-[#121e1a] bg-[#05080a] py-16 md:py-24 overflow-hidden">
      {/* Decorative radial glow behind logo area */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(circle,rgba(16,185,129,0.08)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Logo Section */}
          <div className="mb-8">
            <h2 className="text-[32px] font-bold italic tracking-wider text-neon-green cyber-glow">
              FLIPFIN
            </h2>
          </div>

          {/* Legal/Info Text */}
          <div className="max-w-2xl mb-12">
            <p className="text-[11px] md:text-[13px] font-mono text-muted-foreground uppercase leading-relaxed tracking-[0.1em]">
              FLIPFIN © 2026 • FASTEST SOLANA LAUNCH & GRADUATION TRACKER • NOT FINANCIAL ADVICE • ALWAYS DYOR • ENGINEERED FOR SPEED
            </p>
          </div>

          {/* Social & Doc Links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-16">
            <a 
              href="https://twitter.com/i/communities/2013802185507889401" 
              className="text-[12px] font-mono text-muted-foreground hover:text-neon-green transition-colors uppercase tracking-widest"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a 
              href="https://t.me/flipfin" 
              className="text-[12px] font-mono text-muted-foreground hover:text-neon-green transition-colors uppercase tracking-widest"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram
            </a>
            <a 
              href="https://flipfin.fun/docs" 
              className="text-[12px] font-mono text-muted-foreground hover:text-neon-green transition-colors uppercase tracking-widest"
              target="_blank"
              rel="noopener noreferrer"
            >
              Documentation
            </a>
            <a 
              href="#" 
              className="text-[12px] font-mono text-muted-foreground hover:text-neon-green transition-colors uppercase tracking-widest"
            >
              Terms of Service
            </a>
          </div>
        </div>

        {/* Bottom Status Bar */}
        <div className="pt-8 border-t border-[#121e1a] flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-neon-green shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse" />
              <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
                Mainnet-Beta
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-neon-green shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
              <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
                Latency: 42ms
              </span>
            </div>
          </div>

          <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
            Built with <span className="text-neon-green italic">Solana</span> performance in mind
          </div>
        </div>
      </div>

      {/* Background Scanlines Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-5 bg-[repeating-linear-gradient(0deg,transparent,transparent_1px,#000_2px)]" />
    </footer>
  );
};

export default Footer;