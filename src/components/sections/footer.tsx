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
              href="https://x.com/flipfindotfun" 
              className="flex items-center gap-2 text-[12px] font-mono text-muted-foreground hover:text-neon-green transition-colors uppercase tracking-widest"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#9ca3af" className="hover:fill-[#10b981] transition-colors" width="16" height="16">
                <path d="M23.146 20.146a1 1 0 0 1-1.414 1.414L12 11.414 2.268 21.56a1 1 0 1 1-1.536-1.28l9.732-10.146L.732 0.854A1 1 0 1 1 2.146-.56L12 9.586 21.732-.146a1 1 0 1 1 1.414 1.414L13.414 12l9.732 8.146z"/>
              </svg>
              X
            </a>
            <a 
              href="https://discord.gg/flipfin" 
              className="flex items-center gap-2 text-[12px] font-mono text-muted-foreground hover:text-neon-green transition-colors uppercase tracking-widest"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#9ca3af" className="hover:fill-[#10b981] transition-colors" width="16" height="16">
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3853-.3969-.8748-.6083-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8851 1.515.0699.0699 0 00-.032.0277C.5336 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0775.0105c.1202.099.246.1981.372.2914a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6061 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
              </svg>
              Discord
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
              href="mailto:contact@flipfin.fun" 
              className="text-[12px] font-mono text-muted-foreground hover:text-neon-green transition-colors uppercase tracking-widest"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
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