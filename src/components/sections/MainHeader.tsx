import React from 'react';
import { Search, Activity, BookOpen, Shield, Trophy, Eye, ChartPie, Plus } from 'lucide-react';

const MainHeader = () => {
  return (
    <header className="flex items-center justify-between px-3 sm:px-4 h-12 border-b border-[#1e2329] bg-[#0d1117]">
      {/* Search and Logo Section */}
      <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
        <a className="flex items-center gap-2 flex-shrink-0" href="/">
          <img 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/72adb3de-1a58-45c8-82a3-8edac240bd60-flipfin-fun/assets/icons/logo-1.png" 
            alt="Flip Finance" 
            className="w-6 h-6 object-contain"
          />
          <span className="font-bold text-white text-sm tracking-tight hidden sm:block">Flip</span>
        </a>
        
        <div className="w-48 sm:w-64 md:w-80 relative flex-shrink-1">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-[#02c076] transition-colors" />
            <input 
              type="text"
              placeholder="Search or paste CA..."
              className="bg-[#1e2329] border border-[#2b3139] pl-9 pr-8 h-8 text-xs text-white placeholder:text-muted-foreground focus:outline-none focus:border-[#02c076]/50 rounded-lg w-full transition-all focus:ring-1 focus:ring-[#02c076]/30"
            />
          </div>
        </div>
      </div>

      {/* Navigation and Action Section */}
      <div className="flex items-center gap-1.5 sm:gap-2 ml-auto">
        {/* Desktop Buttons */}
        <a 
          className="hidden lg:flex items-center gap-1.5 px-2.5 py-1.5 bg-gradient-to-r from-[#02c076]/10 to-[#8b5cf6]/10 border border-[#02c076]/20 rounded-lg hover:border-[#02c076]/50 transition-colors" 
          href="/flow"
        >
          <Activity className="w-3.5 h-3.5 text-[#02c076]" />
          <span className="text-xs font-medium text-white">Flow</span>
        </a>

        <a 
          className="hidden lg:flex items-center gap-1.5 px-2.5 py-1.5 bg-[#1e2329] rounded-lg hover:bg-[#2b3139] border border-transparent transition-colors" 
          href="/narratives"
        >
          <BookOpen className="w-3.5 h-3.5 text-blue-400" />
          <span className="text-xs font-medium text-white">Narratives</span>
        </a>

        <a 
          className="hidden lg:flex items-center gap-1.5 px-2.5 py-1.5 bg-[#1e2329] rounded-lg hover:bg-[#2b3139] border border-transparent transition-colors" 
          href="/social"
        >
          <Shield className="w-3.5 h-3.5 text-orange-400" />
          <span className="text-xs font-medium text-white">Hype</span>
        </a>

        <a 
          className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 bg-[#1e2329] rounded-lg hover:bg-[#2b3139] border border-transparent transition-colors" 
          href="/rewards"
        >
          <Trophy className="w-3.5 h-3.5 text-yellow-500" />
          <span className="text-xs font-bold text-white tabular-nums">0</span>
        </a>

        <a 
          className="hidden md:flex items-center gap-1.5 px-2.5 py-1.5 bg-[#1e2329] rounded-lg hover:bg-[#2b3139] border border-transparent transition-colors" 
          href="/tracker"
        >
          <Eye className="w-3.5 h-3.5 text-purple-400" />
          <span className="text-xs font-medium text-white">Track</span>
        </a>

        <a 
          className="hidden md:flex items-center gap-1.5 px-2.5 py-1.5 bg-[#1e2329] rounded-lg hover:bg-[#2b3139] border border-transparent transition-colors" 
          href="/portfolio"
        >
          <ChartPie className="w-3.5 h-3.5 text-[#02c076]" />
          <span className="text-xs font-medium text-white">PnL</span>
        </a>

        {/* Mobile Icons Only */}
        <div className="flex lg:hidden items-center gap-1">
          <a className="p-1.5 bg-[#1e2329] rounded-lg hover:bg-[#2b3139]" href="/flow"><Activity className="w-4 h-4 text-[#02c076]" /></a>
          <a className="p-1.5 bg-[#1e2329] rounded-lg hover:bg-[#2b3139]" href="/narratives"><BookOpen className="w-4 h-4 text-blue-400" /></a>
          <a className="p-1.5 bg-[#1e2329] rounded-lg hover:bg-[#2b3139]" href="/social"><Shield className="w-4 h-4 text-orange-400" /></a>
        </div>

        {/* Status Tracker */}
        <div className="hidden sm:flex items-center gap-1.5 px-2 py-1 bg-[#1e2329] border border-[#2b3139] rounded-lg ml-1">
          <div className="w-1.5 h-1.5 rounded-full bg-[#02c076] animate-pulse"></div>
          <span className="text-[10px] text-gray-500 font-medium">SOL</span>
          <span className="text-xs font-bold text-white font-mono">$127</span>
        </div>

        {/* Connect Button */}
        <button className="inline-flex items-center justify-center whitespace-nowrap bg-[#02c076] hover:bg-[#02a566] text-black font-black italic uppercase transition-all rounded-md h-8 px-3 sm:px-4 text-[10px] sm:text-xs">
          <span className="hidden sm:inline">Connect</span>
          <Plus className="w-4 h-4 sm:hidden" />
        </button>
      </div>
    </header>
  );
};

export default MainHeader;