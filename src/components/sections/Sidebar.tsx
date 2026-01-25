import React from 'react';
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
} from 'lucide-react';

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  href: string;
  isActive?: boolean;
}

const NavItem = ({ icon: Icon, label, href, isActive = false }: NavItemProps) => {
  return (
    <a
      href={href}
      className={`flex items-center gap-3 px-3 py-2.5 mx-2 rounded-lg transition-all ${
        isActive 
          ? 'bg-[#02c076]/10 text-[#02c076]' 
          : 'text-gray-400 hover:text-white hover:bg-[#1e2329]'
      }`}
    >
      <Icon className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-[#02c076]' : ''}`} />
      <span className="text-sm font-medium tracking-tight">{label}</span>
    </a>
  );
};

const Sidebar = () => {
  const navItems = [
    { icon: Search, label: 'Explore', href: '/', isActive: true },
    { icon: Coins, label: 'Tokens', href: '/tokens' },
    { icon: LayoutGrid, label: 'Portfolio', href: '/portfolio' },
    { icon: Gift, label: 'Rewards', href: '/rewards' },
    { icon: Eye, label: 'Tracker', href: '/tracker' },
    { icon: Trophy, label: 'Leaderboard', href: '/leaderboard' },
    { icon: FileText, label: 'Docs', href: '/docs' },
    { icon: Wallet, label: 'Wallet', href: '/wallet' },
    { icon: Settings, label: 'Settings', href: '/settings' },
  ];

  const logoUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/72adb3de-1a58-45c8-82a3-8edac240bd60-flipfin-fun/assets/icons/logo-1.png";

  return (
    <aside className="hidden md:flex flex-col h-full border-r border-[#1e2329] bg-[#0b0e11] transition-all duration-200 w-[200px] flex-shrink-0">
      {/* Brand Header */}
      <div className="flex items-center justify-between p-3 border-b border-[#1e2329] h-[61px]">
        <a className="flex items-center gap-2" href="/">
          <div className="w-9 h-9 flex items-center justify-center flex-shrink-0">
            <img 
              src={logoUrl} 
              alt="Flip Finance" 
              className="w-full h-full object-contain"
            />
          </div>
          <span className="font-bold text-white text-lg tracking-tight">
            Flip Finance
          </span>
        </a>
        <button className="p-1 hover:bg-[#1e2329] rounded text-gray-500 hover:text-white transition-colors">
          <ChevronLeft className="w-4 h-4" />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 py-2 overflow-y-auto no-scrollbar">
        {navItems.map((item, index) => (
          <NavItem
            key={index}
            icon={item.icon}
            label={item.label}
            href={item.href}
            isActive={item.isActive}
          />
        ))}
      </nav>

      {/* Footer Status */}
      <div className="p-3 border-t border-[#1e2329]">
        <div className="flex items-center gap-2 px-2 py-1.5 bg-[#1e2329] rounded-lg">
          <div className="relative flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-[#02c076]" />
            <div className="absolute w-2 h-2 rounded-full bg-[#02c076] animate-pulse" />
          </div>
          <span className="text-[10px] font-medium text-gray-400 uppercase tracking-wider">
            Live Data
          </span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;