import React from 'react';
import { Sparkles, Rocket, GraduationCap, Star, Clock, Filter } from 'lucide-react';

interface TokenData {
  id: string;
  name: string;
  symbol: string;
  priceChange: number;
  marketCap: string;
  timestamp: string;
  volume: string;
  image: string;
  isPositive: boolean;
}

const TokenRow = ({ token }: { token: TokenData }) => {
  return (
    <div className="flex items-center gap-3 p-3 border-b border-[#1e2329] hover:bg-[#1e2329] transition-colors cursor-pointer group">
      <div className="relative w-8 h-8 flex-shrink-0">
        <img
          src={token.image}
          alt={token.name}
          className="w-full h-full rounded-lg object-cover"
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 min-w-0">
            <span className="text-[11px] font-bold text-white truncate uppercase">{token.symbol}</span>
            <span className="text-[10px] text-gray-500 truncate hidden xl:inline">{token.name}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-500 text-[10px] whitespace-nowrap">
            <Clock className="w-2.5 h-2.5" />
            {token.timestamp}
          </div>
        </div>
        <div className="flex items-center justify-between mt-0.5">
          <div className="flex items-center gap-2">
            <span 
              className={`text-[9px] font-bold px-1 rounded ${
                token.isPositive ? 'text-[#02c076] bg-[#02c076]/10' : 'text-[#f6465d] bg-[#f6465d]/10'
              }`}
            >
              {token.isPositive ? '+' : ''}{token.priceChange}%
            </span>
            <span className="text-[9px] text-gray-500 uppercase">MC {token.marketCap}</span>
          </div>
          <div className="flex flex-col items-end">
            <svg width="40" height="12" className="overflow-visible">
              <path
                d={token.isPositive ? "M0 10 L8 8 L16 9 L24 4 L32 6 L40 0" : "M0 0 L8 4 L16 3 L24 8 L32 7 L40 12"}
                fill="none"
                stroke={token.isPositive ? "#02c076" : "#f6465d"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-[9px] text-gray-500 mt-1 uppercase">V {token.volume}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ColumnHeader = ({ 
  icon: Icon, 
  title, 
  count, 
  iconColor, 
  showPulse = true 
}: { 
  icon: any, 
  title: string, 
  count: number, 
  iconColor: string,
  showPulse?: boolean
}) => (
  <div className="flex items-center justify-between px-3 py-2.5 border-b border-[#1e2329] bg-[#0d1117] sticky top-0 z-10">
    <div className="flex items-center gap-2">
      <Icon className={`w-4 h-4 ${iconColor}`} />
      <span className="text-[13px] font-semibold text-white whitespace-nowrap">{title}</span>
      <span className="text-[10px] px-1.5 py-0.5 bg-[#1e2329] text-gray-400 rounded-sm font-medium">{count}</span>
    </div>
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1.5">
        {showPulse && <div className="w-1 h-1 rounded-full bg-[#02c076] animate-pulse" />}
        <span className="text-[10px] text-gray-500 whitespace-nowrap">Just now</span>
      </div>
      <button className="p-1 text-gray-500 hover:text-gray-300 transition-colors">
        <Filter className="w-3 h-3" />
      </button>
    </div>
  </div>
);

const TokenDashboard = () => {
  const categories = [
    {
      title: "New Creations",
      icon: Sparkles,
      iconColor: "text-[#02c076]",
      count: 16,
      tokens: [
        { id: '1', symbol: 'Artemis II', name: 'Artemis Moon', priceChange: -53.5, marketCap: '$24.28K', timestamp: '12m ago', volume: '$154.72K', image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/72adb3de-1a58-45c8-82a3-8edac240bd60-flipfin-fun/assets/images/images_1.png', isPositive: false },
        { id: '2', symbol: 'Narrator', name: 'The Narrator', priceChange: 150.0, marketCap: '$117.91K', timestamp: '19m ago', volume: '$461.35K', image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/72adb3de-1a58-45c8-82a3-8edac240bd60-flipfin-fun/assets/images/images_2.png', isPositive: true },
        { id: '3', symbol: 'SPIRIT', name: 'The Indomitable', priceChange: -81.3, marketCap: '$9.95K', timestamp: '24m ago', volume: '$71.68K', image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/72adb3de-1a58-45c8-82a3-8edac240bd60-flipfin-fun/assets/images/images_3.png', isPositive: false },
        { id: '4', symbol: 'egg', name: 'this can cook', priceChange: -47.1, marketCap: '$3.99K', timestamp: '28m ago', volume: '$69.73K', image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/72adb3de-1a58-45c8-82a3-8edac240bd60-flipfin-fun/assets/images/images_4.png', isPositive: false },
        { id: '5', symbol: 'wernor', name: 'wernor herzog', priceChange: 23.6, marketCap: '$64.40K', timestamp: '29m ago', volume: '$188.27K', image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/72adb3de-1a58-45c8-82a3-8edac240bd60-flipfin-fun/assets/images/images_5.png', isPositive: true },
      ]
    },
    {
      title: "About to Graduate",
      icon: Rocket,
      iconColor: "text-amber-500",
      count: 21,
      tokens: [
        { id: '11', symbol: 'CHILLGUY', name: 'Chill Guy Nietzs', priceChange: -46.4, marketCap: '$4.34K', timestamp: '1h ago', volume: '$16.79K', image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/72adb3de-1a58-45c8-82a3-8edac240bd60-flipfin-fun/assets/images/images_6.png', isPositive: false },
        { id: '12', symbol: 'Shrimply', name: 'Shrimply Pibbles', priceChange: -57.2, marketCap: '$22.39K', timestamp: '1h ago', volume: '$641.39K', image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/72adb3de-1a58-45c8-82a3-8edac240bd60-flipfin-fun/assets/images/images_7.png', isPositive: false },
        { id: '13', symbol: 'RAZORBILL', name: 'Aura Bird', priceChange: -8.8, marketCap: '$3.92K', timestamp: '1h ago', volume: '$57.35K', image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/72adb3de-1a58-45c8-82a3-8edac240bd60-flipfin-fun/assets/images/images_1.png', isPositive: false },
        { id: '14', symbol: 'Thorfinn', name: 'I have no enemies', priceChange: -88.3, marketCap: '$6.14K', timestamp: '1h ago', volume: '$218.83K', image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/72adb3de-1a58-45c8-82a3-8edac240bd60-flipfin-fun/assets/images/images_2.png', isPositive: false },
      ]
    },
    {
      title: "Graduated",
      icon: GraduationCap,
      iconColor: "text-blue-500",
      count: 13,
      tokens: [
        { id: '21', symbol: 'Narrator', name: 'The Narrator', priceChange: 150.0, marketCap: '$117.91K', timestamp: '19m ago', volume: '$461.35K', image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/72adb3de-1a58-45c8-82a3-8edac240bd60-flipfin-fun/assets/images/images_3.png', isPositive: true },
        { id: '22', symbol: 'Antarctica', name: 'Antarctica', priceChange: 271.0, marketCap: '$190.48K', timestamp: '35m ago', volume: '$275.00K', image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/72adb3de-1a58-45c8-82a3-8edac240bd60-flipfin-fun/assets/images/images_4.png', isPositive: true },
        { id: '23', symbol: 'UNKNOWN', name: 'Unknown', priceChange: 1751.0, marketCap: '$1.20M', timestamp: '40m ago', volume: '$234.94K', image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/72adb3de-1a58-45c8-82a3-8edac240bd60-flipfin-fun/assets/images/images_5.png', isPositive: true },
      ]
    },
    {
      title: "My Favorites",
      icon: Star,
      iconColor: "text-yellow-500",
      count: 0,
      tokens: []
    }
  ];

  return (
    <div className="flex w-full h-full bg-[#0b0e11] overflow-hidden">
      <div className="flex w-full overflow-x-auto no-scrollbar scroll-smooth">
        {categories.map((category, idx) => (
          <div 
            key={category.title} 
            className={`flex-1 min-w-[300px] sm:min-w-[340px] border-r border-[#1e2329] flex flex-col h-full bg-[#0b0e11] ${idx === categories.length - 1 ? 'border-r-0' : ''}`}
          >
            <ColumnHeader 
              icon={category.icon} 
              title={category.title} 
              count={category.count} 
              iconColor={category.iconColor}
              showPulse={category.title !== "My Favorites"}
            />
            <div className="flex-1 overflow-y-auto no-scrollbar pb-10">
              {category.tokens.length > 0 ? (
                category.tokens.map((token) => (
                  <TokenRow key={token.id} token={token} />
                ))
              ) : (
                <div className="flex flex-col items-center justify-center h-40 text-gray-600">
                  <span className="text-[11px] font-medium">No tokens found</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TokenDashboard;