import React from 'react';
import { Sparkles, Rocket, GraduationCap, Star, Clock, Filter, Globe } from 'lucide-react';

interface TokenData {
  id: string;
  name: string;
  symbol: string;
  image: string;
  priceChange: number;
  mc: string; // Market Cap
  volume: string;
  timeAgo: string;
  chartColor: 'bull' | 'bear';
}

const TokenCard = ({ token }: { token: TokenData }) => {
  const isPositive = token.priceChange >= 0;
  const trendColor = isPositive ? 'text-[#02c076]' : 'text-[#f6465d]';
  const strokeColor = isPositive ? '#02c076' : '#f6465d';

  return (
    <div className="flex items-center justify-between p-3 border-b border-[#1e2329] hover:bg-[#1e2329]/30 transition-colors group cursor-pointer">
      <div className="flex items-center gap-3">
        <div className="relative w-10 h-10 flex-shrink-0">
          <img
            src={token.image}
            alt={token.name}
            className="w-full h-full rounded-lg object-cover bg-[#14191f] border border-[#1e2329]"
          />
        </div>
        <div className="flex flex-col min-w-0">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="font-bold text-white text-[11px] truncate max-w-[100px]">{token.symbol}</span>
            <span className="text-gray-500 text-[10px] truncate max-w-[80px]">{token.name}</span>
          </div>
          <div className="flex items-center gap-2 mt-0.5">
            <span className={`text-[9px] font-bold ${trendColor}`}>
              {isPositive ? '+' : ''}{token.priceChange}%
            </span>
            <span className="text-[9px] font-medium text-gray-500 uppercase">
              MC ${token.mc}
            </span>
          </div>
          <div className="flex items-center mt-1">
             <Globe className="w-2.5 h-2.5 text-gray-600 hover:text-gray-400 transition-colors" />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-end gap-1">
        <div className="flex items-center gap-1 text-gray-500">
           <Clock className="w-2.5 h-2.5" />
           <span className="text-[9px] tabular-nums font-medium">{token.timeAgo}</span>
        </div>
        <div className="w-16 h-6 mt-1 overflow-hidden">
          <svg viewBox="0 0 100 40" className="w-full h-full preserve-3d">
            <path
              d={isPositive 
                ? "M0 35 L10 32 L25 38 L40 25 L55 28 L70 15 L85 20 L100 5" 
                : "M0 5 L15 12 L30 8 L45 25 L60 20 L75 35 L100 38"}
              fill="none"
              stroke={strokeColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="text-[9px] font-bold tabular-nums text-gray-400 mt-0.5">
          V ${token.volume}
        </div>
      </div>
    </div>
  );
};

const DashboardColumn = ({ 
  title, 
  icon: Icon, 
  count, 
  tokens, 
  accentColor = "text-[#02c076]",
  isEmpty = false
}: { 
  title: string; 
  icon: any; 
  count: number; 
  tokens: TokenData[]; 
  accentColor?: string;
  isEmpty?: boolean;
}) => {
  return (
    <div className="flex-1 flex flex-col border-r border-[#1e2329] min-w-0 h-full">
      <div className="flex items-center justify-between px-3 py-2.5 border-b border-[#1e2329] bg-[#0d1117] flex-shrink-0">
        <div className="flex items-center gap-2">
          <Icon className={`w-4 h-4 ${accentColor}`} />
          <span className="text-sm font-semibold text-white whitespace-nowrap">{title}</span>
          <span className="text-[10px] px-1.5 py-0.5 bg-[#1e2329] text-gray-400 rounded font-bold">{count}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden xl:flex items-center gap-1.5">
            <div className={`w-1.5 h-1.5 rounded-full ${accentColor.replace('text-', 'bg-')} animate-pulse`}></div>
            <span className="text-[10px] text-gray-500">Just now</span>
          </div>
          <button className="flex items-center gap-1 text-gray-500 hover:text-gray-300 transition-colors">
            <Filter className="w-3 h-3" />
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto custom-scrollbar bg-[#0b0e11]">
        {isEmpty ? (
          <div className="flex flex-col items-center justify-center h-48 text-gray-500 px-4 text-center">
            <span className="text-xs font-medium">No tokens found</span>
          </div>
        ) : (
          tokens.map((token) => (
            <TokenCard key={token.id} token={token} />
          ))
        )}
      </div>
    </div>
  );
};

export default function TokenDashboard() {
  const assets = [
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/72adb3de-1a58-45c8-82a3-8edac240bd60-flipfin-fun/assets/images/images_1.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/72adb3de-1a58-45c8-82a3-8edac240bd60-flipfin-fun/assets/images/images_2.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/72adb3de-1a58-45c8-82a3-8edac240bd60-flipfin-fun/assets/images/images_3.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/72adb3de-1a58-45c8-82a3-8edac240bd60-flipfin-fun/assets/images/images_4.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/72adb3de-1a58-45c8-82a3-8edac240bd60-flipfin-fun/assets/images/images_5.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/72adb3de-1a58-45c8-82a3-8edac240bd60-flipfin-fun/assets/images/images_6.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/72adb3de-1a58-45c8-82a3-8edac240bd60-flipfin-fun/assets/images/images_7.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/72adb3de-1a58-45c8-82a3-8edac240bd60-flipfin-fun/assets/images/images_8.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/72adb3de-1a58-45c8-82a3-8edac240bd60-flipfin-fun/assets/images/images_9.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/72adb3de-1a58-45c8-82a3-8edac240bd60-flipfin-fun/assets/images/images_10.png"
  ];

  const newCreations: TokenData[] = [
    { id: '1', symbol: 'Footsteps', name: 'The Footsteps', image: assets[7], priceChange: -72.0, mc: '14.65K', volume: '101.87K', timeAgo: '8m ago', chartColor: 'bear' },
    { id: '2', symbol: 'HoneyBooBoo', name: 'Honey Boo Boo', image: assets[1], priceChange: 286.0, mc: '14.07K', volume: '23.80K', timeAgo: '11m ago', chartColor: 'bull' },
    { id: '3', symbol: '.mp3', name: 'Mini Penguin', image: assets[2], priceChange: -21.6, mc: '40.99K', volume: '81.72K', timeAgo: '12m ago', chartColor: 'bear' },
    { id: '4', symbol: 'NEO', name: 'Penguin Neo', image: assets[8], priceChange: -8.3, mc: '3.71K', volume: '43.91K', timeAgo: '22m ago', chartColor: 'bear' },
    { id: '5', symbol: 'Shrimply', name: 'Shrimply Pibbles', image: assets[0], priceChange: 52.0, mc: '79.50K', volume: '568.55K', timeAgo: '23m ago', chartColor: 'bull' },
  ];

  const graduating: TokenData[] = [
    { id: '6', symbol: 'DOVE', name: 'WHITE DOVE', image: assets[9], priceChange: -62.3, mc: '19.69K', volume: '465.72K', timeAgo: '1h ago', chartColor: 'bear' },
    { id: '7', symbol: 'Emperor', name: 'The Emperor', image: assets[3], priceChange: -68.6, mc: '15.99K', volume: '217.70K', timeAgo: '1h ago', chartColor: 'bear' },
    { id: '8', symbol: 'Penguins', name: 'Only Penguins', image: assets[4], priceChange: 47.2, mc: '5.30K', volume: '6.93K', timeAgo: '1h ago', chartColor: 'bull' },
    { id: '9', symbol: 'DOG', name: 'Friedrich Nietzs...', image: assets[5], priceChange: 148.0, mc: '11.24K', volume: '15.74K', timeAgo: '3h ago', chartColor: 'bull' },
  ];

  const graduated: TokenData[] = [
    { id: '10', symbol: 'UNKNOWN', name: 'Unknown', image: assets[7], priceChange: 585.0, mc: '523.25K', volume: '166.81K', timeAgo: '30m ago', chartColor: 'bull' },
    { id: '11', symbol: 'CHICKEN', name: 'Retarded Chicken', image: assets[3], priceChange: 2860.0, mc: '1.58M', volume: '6.85M', timeAgo: '2h ago', chartColor: 'bull' },
    { id: '12', symbol: 'ARTEMIS', name: 'Artemis Moon ...', image: assets[1], priceChange: 241.0, mc: '731.13K', volume: '490.15K', timeAgo: '5d ago', chartColor: 'bull' },
  ];

  return (
    <div className="flex-1 flex overflow-hidden bg-[#0b0e11]">
      <div className="hidden md:flex flex-1 overflow-hidden h-full">
        {/* New Creations Column */}
        <DashboardColumn 
          title="New Creations" 
          icon={Sparkles} 
          count={20} 
          tokens={newCreations} 
          accentColor="text-[#02c076]" 
        />
        
        {/* About to Graduate Column */}
        <DashboardColumn 
          title="About to Graduate" 
          icon={Rocket} 
          count={16} 
          tokens={graduating} 
          accentColor="text-orange-500" 
        />
        
        {/* Graduated Column */}
        <DashboardColumn 
          title="Graduated" 
          icon={GraduationCap} 
          count={10} 
          tokens={graduated} 
          accentColor="text-[#02c076]" 
        />
        
        {/* My Favorites Column */}
        <DashboardColumn 
          title="My Favorites" 
          icon={Star} 
          count={0} 
          tokens={[]} 
          accentColor="text-yellow-500" 
          isEmpty={true}
        />
      </div>

      {/* Mobile Responsive Column Selection would typically handle visibility here */}
      <div className="flex md:hidden flex-1 overflow-hidden h-full">
         <DashboardColumn 
          title="New Creations" 
          icon={Sparkles} 
          count={20} 
          tokens={newCreations} 
        />
      </div>
    </div>
  );
}