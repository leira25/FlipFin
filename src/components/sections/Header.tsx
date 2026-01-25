import React from 'react';
import { Search, Activity, BookOpen, Shield, Trophy, Eye, ChartPie, Plus } from 'lucide-react';

const Header = () => {
  return (
    <header className="flex items-center justify-between px-3 sm:px-4 h-12 border-b border-[#1e2329] bg-[#0d1117]">
      <div className="flex items-center gap-3 sm:gap-4">
        {/* Logo Section */}
        <a className="flex items-center gap-2 flex-shrink-0" href="/">
          <img 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/72adb3de-1a58-45c8-82a3-8edac240bd60-flipfin-fun/assets/icons/logo-1.png" 
            alt="Flip Finance" 
            className="w-6 h-6 object-contain"
          />
          <span className="font-bold text-white text-sm tracking-tight hidden sm:block">Flip</span>
        </a>

        {/* Search Bar */}
        <div className="w-48 sm:w-64 md:w-80 relative">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input 
              type="text"
              placeholder="Search or paste CA..."
              className="bg-[#1e2329] border border-[#2b3139] pl-9 pr-4 h-8 text-xs text-white placeholder:text-gray-500 focus:outline-none focus:border-[#02c076]/50 rounded-lg w-full transition-colors"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-1.5 sm:gap-2">
        {/* Navigation Shortcuts - Desktop */}
        <a 
          className="hidden lg:flex items-center gap-1.5 px-2.5 py-1.5 bg-gradient-to-r from-[#02c076]/20 to-[#8b5cf6]/20 border border-[#02c076]/30 rounded-lg hover:border-[#02c076]/50 transition-colors" 
          href="/flow"
        >
          <Activity className="w-3.5 h-3.5 text-[#02c076]" />
          <span className="text-xs font-medium text-white">Flow</span>
        </a>

        <a 
          className="hidden lg:flex items-center gap-1.5 px-2.5 py-1.5 bg-[#1e2329] rounded-lg hover:bg-[#2b3139] transition-colors" 
          href="/narratives"
        >
          <BookOpen className="w-3.5 h-3.5 text-blue-400" />
          <span className="text-xs font-medium text-white">Narratives</span>
        </a>

        <a 
          className="hidden lg:flex items-center gap-1.5 px-2.5 py-1.5 bg-[#1e2329] rounded-lg hover:bg-[#2b3139] transition-colors" 
          href="/social"
        >
          <Shield className="w-3.5 h-3.5 text-orange-400" />
          <span className="text-xs font-medium text-white">Hype</span>
        </a>

        {/* Points/Trophy */}
        <a 
          className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 bg-[#1e2329] rounded-lg hover:bg-[#2b3139] transition-colors" 
          href="/rewards"
        >
          <Trophy className="w-3.5 h-3.5 text-yellow-500" />
          <span className="text-xs font-bold text-white tabular-nums">0</span>
        </a>

        {/* Tracker & PnL - Tablet/Desktop */}
        <a 
          className="hidden md:flex items-center gap-1.5 px-2.5 py-1.5 bg-[#1e2329] rounded-lg hover:bg-[#2b3139] transition-colors" 
          href="/tracker"
        >
          <Eye className="w-3.5 h-3.5 text-purple-400" />
          <span className="text-xs font-medium text-white">Track</span>
        </a>

        <a 
          className="hidden md:flex items-center gap-1.5 px-2.5 py-1.5 bg-[#1e2329] rounded-lg hover:bg-[#2b3139] transition-colors" 
          href="/portfolio"
        >
          <ChartPie className="w-3.5 h-3.5 text-[#02c076]" />
          <span className="text-xs font-medium text-white">PnL</span>
        </a>

        {/* SOL Price Display */}
        <div className="hidden sm:flex items-center gap-1.5 px-2 py-1 bg-[#1e2329] rounded-lg border border-transparent">
          <div className="w-1.5 h-1.5 rounded-full bg-[#02c076] animate-pulse"></div>
          <span className="text-[10px] text-gray-500 font-semibold tracking-wider">SOL</span>
          <span className="text-xs font-bold text-white font-mono">$127</span>
        </div>

        {/* Connect Button */}
        <a 
          href="https://flipfin.fun/"
          className="connect-button inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-[#02c076]/50 rounded-md gap-1.5 bg-[#02c076] hover:bg-[#02a566] text-black font-black italic uppercase h-8 px-3 sm:px-4 text-[10px] sm:text-xs"
        >
          <span className="hidden sm:inline">Launch App</span>
          <Plus className="w-4 h-4 sm:hidden" />
        </a>
      </div>
    </header>
  );
};

export default Header;