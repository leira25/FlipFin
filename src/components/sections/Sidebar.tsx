import React from "react";
import { 
  Search, 
  Coins, 
  LayoutGrid, 
  Gift, 
  Eye, 
  Trophy, 
  FileText, 
  Wallet, 
  Settings, 
  ChevronLeft 
} from "lucide-react";

const navItems = [
  { name: "Explore", icon: Search, href: "/", active: true },
  { name: "Tokens", icon: Coins, href: "/tokens" },
  { name: "Portfolio", icon: LayoutGrid, href: "/portfolio" },
  { name: "Rewards", icon: Gift, href: "/rewards" },
  { name: "Tracker", icon: Eye, href: "/tracker" },
  { name: "Leaderboard", icon: Trophy, href: "/leaderboard" },
  { name: "Docs", icon: FileText, href: "/docs" },
  { name: "Wallet", icon: Wallet, href: "/wallet" },
  { name: "Settings", icon: Settings, href: "/settings" },
];

export default function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col h-full border-r border-[#1e2329] bg-[#0b0e11] transition-all duration-200 w-[200px] flex-shrink-0">
      {/* Brand Logo Section */}
      <div className="flex items-center justify-between p-3 border-b border-[#1e2329] h-[61px]">
        <a className="flex items-center gap-2 overflow-hidden" href="/">
          <div className="w-9 h-9 flex items-center justify-center flex-shrink-0">
            <img
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/72adb3de-1a58-45c8-82a3-8edac240bd60-flipfin-fun/assets/icons/logo-1.png"
              alt="Flip Finance"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="font-bold text-white text-[18px] tracking-tight whitespace-nowrap">
            Flip Finance
          </span>
        </a>
        <button className="p-1 hover:bg-[#1e2329] rounded text-gray-500 hover:text-white transition-colors">
          <ChevronLeft className="w-4 h-4" />
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 py-2 overflow-y-auto no-scrollbar">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={`flex items-center gap-3 px-3 py-2.5 mx-2 rounded-lg transition-all ${
              item.active
                ? "bg-[#02c076]/10 text-[#02c076]"
                : "text-gray-400 hover:text-white hover:bg-[#1e2329]"
            }`}
          >
            <item.icon className="w-5 h-5 flex-shrink-0" />
            <span className="text-sm font-medium">{item.name}</span>
          </a>
        ))}
      </nav>

      {/* Footer Status Indicator */}
      <div className="p-3 border-t border-[#1e2329]">
        <div className="flex items-center gap-2 px-2 py-1.5 bg-[#1e2329] rounded-lg">
          <div className="relative flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-[#02c076]"></div>
            <div className="absolute w-2 h-2 rounded-full bg-[#02c076] animate-pulse opacity-75"></div>
          </div>
          <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
            Live Data
          </span>
        </div>
      </div>
    </aside>
  );
}