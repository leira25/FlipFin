import React from "react";
import { Search, Activity, BookOpen, Shield } from "lucide-react";

const Header = () => {
  return (
    <header className="terminal-header">
      <div className="flex items-center gap-4 flex-1">
        <a className="flex items-center gap-2" href="/">
          <img 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/72adb3de-1a58-45c8-82a3-8edac240bd60-flipfin-fun/assets/icons/logo-1.png" 
            alt="Flip Finance" 
            className="w-6 h-6 object-contain"
          />
          <span className="font-bold text-white text-sm tracking-tight hidden sm:block">Flip</span>
        </a>
        
        <div className="flex-1 max-w-md relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
          <input 
            type="text"
            placeholder="Search or paste CA..."
            className="terminal-input"
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <nav className="hidden lg:flex items-center gap-2">
          <a className="flex items-center gap-1.5 px-3 py-1.5 bg-opacity-10 bg-primary rounded hover:bg-opacity-20 transition-all" href="/flow">
            <Activity className="w-3.5 h-3.5 text-primary" />
            <span className="text-[11px] font-bold">Flow</span>
          </a>
          <a className="flex items-center gap-1.5 px-3 py-1.5 hover:bg-popover rounded transition-all" href="/narratives">
            <BookOpen className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-[11px] font-bold">Narratives</span>
          </a>
          <a className="flex items-center gap-1.5 px-3 py-1.5 hover:bg-popover rounded transition-all" href="/social">
            <Shield className="w-3.5 h-3.5 text-orange-400" />
            <span className="text-[11px] font-bold">Hype</span>
          </a>
        </nav>

        <div className="h-8 w-[1px] bg-border mx-2 hidden sm:block" style={{ backgroundColor: 'var(--border-color)' }}></div>

        <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded" style={{ backgroundColor: 'var(--bg-popover)' }}>
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
          <span className="text-[10px] text-muted font-bold uppercase">SOL</span>
          <span className="text-xs font-bold text-white font-mono">$127.42</span>
        </div>

        <button className="connect-btn">
          Connect
        </button>
      </div>
    </header>
  );
};

export default Header;
