"use client";

import React from "react";
import { 
  Search, 
  Activity, 
  BookOpen, 
  Shield, 
  Trophy, 
  Eye, 
  ChartPie, 
  Plus 
} from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-3 sm:px-4 h-12 border-b border-[#1e2329] bg-[#0d1117] w-full shrink-0">
      {/* Left Section: Logo & Search */}
      <div className="flex items-center gap-3 sm:gap-4 flex-1">
        <a className="flex items-center gap-2 flex-shrink-0" href="/">
          <img 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/72adb3de-1a58-45c8-82a3-8edac240bd60-flipfin-fun/assets/icons/logo-1.png" 
            alt="Flip Finance" 
            className="w-6 h-6 object-contain"
          />
          <span className="font-bold text-white text-sm tracking-tight hidden sm:block">Flip</span>
        </a>
        
        <div className="w-48 sm:w-64 md:w-80 relative">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input 
              type="text"
              placeholder="Search or paste CA..."
              className="bg-[#1e2329] border-[#2b3139] border pl-9 pr-8 h-8 text-xs text-white placeholder:text-gray-500 rounded-lg w-full outline-none focus:border-[#02c076]/50 transition-all font-sans"
            />
          </div>
        </div>
      </div>

      {/* Right Section: Navigation & Wallet */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        {/* Navigation Buttons - Desktop */}
        <a className="hidden lg:flex items-center gap-1.5 px-2.5 py-1.5 bg-gradient-to-r from-[#02c076]/10 to-[#8b5cf6]/10 border border-[#02c076]/20 rounded-lg hover:border-[#02c076]/40 transition-colors" href="/flow">
          <Activity className="w-3.5 h-3.5 text-[#02c076]" />
          <span className="text-xs font-semibold text-white">Flow</span>
        </a>

        <a className="hidden lg:flex items-center gap-1.5 px-2.5 py-1.5 bg-[#1e2329] rounded-lg hover:bg-[#2b3139] transition-colors" href="/narratives">
          <BookOpen className="w-3.5 h-3.5 text-blue-400" />
          <span className="text-xs font-semibold text-white">Narratives</span>
        </a>

        <a className="hidden lg:flex items-center gap-1.5 px-2.5 py-1.5 bg-[#1e2329] rounded-lg hover:bg-[#2b3139] transition-colors" href="/social">
          <Shield className="w-3.5 h-3.5 text-orange-400" />
          <span className="text-xs font-semibold text-white">Hype</span>
        </a>

        {/* Status Indicators */}
        <a className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 bg-[#1e2329] rounded-lg hover:bg-[#2b3139] transition-colors" href="/rewards">
          <Trophy className="w-3.5 h-3.5 text-yellow-500" />
          <span className="text-xs font-bold text-white tabular-nums">0</span>
        </a>

        <a className="hidden md:flex items-center gap-1.5 px-2.5 py-1.5 bg-[#1e2329] rounded-lg hover:bg-[#2b3139] transition-colors" href="/tracker">
          <Eye className="w-3.5 h-3.5 text-purple-400" />
          <span className="text-xs font-medium text-white">Track</span>
        </a>

        <a className="hidden md:flex items-center gap-1.5 px-2.5 py-1.5 bg-[#1e2329] rounded-lg hover:bg-[#2b3139] transition-colors" href="/portfolio">
          <ChartPie className="w-3.5 h-3.5 text-[#02c076]" />
          <span className="text-xs font-medium text-white">PnL</span>
        </a>

        {/* Mobile-Only Icons */}
        <div className="flex lg:hidden items-center gap-1">
          <a className="p-1.5 bg-[#1e2329] rounded-lg hover:bg-[#2b3139]" href="/flow"><Activity className="w-4 h-4 text-[#02c076]" /></a>
          <a className="p-1.5 bg-[#1e2329] rounded-lg hover:bg-[#2b3139]" href="/narratives"><BookOpen className="w-4 h-4 text-blue-400" /></a>
          <a className="p-1.5 bg-[#1e2329] rounded-lg hover:bg-[#2b3139]" href="/social"><Shield className="w-4 h-4 text-orange-400" /></a>
        </div>

        {/* SOL Price Display */}
        <div className="hidden sm:flex items-center gap-1.5 px-2 py-1 bg-[#1e2329] rounded-lg ml-1">
          <div className="w-1.5 h-1.5 rounded-full bg-[#02c076] animate-pulse"></div>
          <span className="text-[10px] text-gray-500 font-bold uppercase">SOL</span>
          <span className="text-xs font-bold text-white font-mono tracking-tight">$127</span>
        </div>

        {/* Wallet Connect Button */}
        <button className="bg-[#02c076] hover:bg-[#02a566] text-black font-black italic uppercase h-8 px-3 sm:px-4 rounded-md transition-all flex items-center justify-center gap-1 ml-1">
          <span className="hidden sm:inline text-[10px]">Connect</span>
          <Plus className="w-4 h-4 sm:hidden" />
        </button>
      </div>
    </header>
  );
}