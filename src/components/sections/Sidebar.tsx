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

const sidebarLinks = [
  { name: "Explore", href: "/", icon: Search, active: true },
  { name: "Tokens", href: "/tokens", icon: Coins },
  { name: "Portfolio", href: "/portfolio", icon: LayoutGrid },
  { name: "Rewards", href: "/rewards", icon: Gift },
  { name: "Tracker", href: "/tracker", icon: Eye },
  { name: "Leaderboard", href: "/leaderboard", icon: Trophy },
  { name: "Docs", href: "/docs", icon: FileText },
  { name: "Wallet", href: "/wallet", icon: Wallet },
  { name: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col h-full border-r border-[#1e2329] bg-[#0b0e11] transition-all duration-200 w-[200px] shrink-0">
      {/* Brand Header */}
      <div className="flex items-center justify-between p-3 border-b border-[#1e2329]">
        <a href="/" className="flex items-center gap-2">
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

      {/* Navigation Links */}
      <nav className="flex-1 py-4 overflow-y-auto no-scrollbar">
        <ul className="space-y-1">
          {sidebarLinks.map((link) => (
            <li key={link.name} className="px-2">
              <a 
                href={link.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all group ${
                  link.active 
                    ? "bg-[#02c076]/10 text-[#02c076]" 
                    : "text-gray-400 hover:text-white hover:bg-[#1e2329]"
                }`}
              >
                <link.icon className={`w-5 h-5 flex-shrink-0 ${link.active ? "text-[#02c076]" : "text-gray-400 group-hover:text-white"}`} />
                <span className="text-sm font-medium">{link.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Live Data Status Indicator */}
      <div className="p-3 border-t border-[#1e2329]">
        <div className="flex items-center gap-2 px-2.5 py-1.5 bg-[#1e2329] rounded-lg">
          <div className="w-2 h-2 rounded-full bg-[#02c076] animate-pulse shadow-[0_0_8px_rgba(2,192,118,0.5)]"></div>
          <span className="text-[10px] font-medium text-gray-400 uppercase tracking-wider">Live Data</span>
        </div>
      </div>
    </aside>
  );
}
