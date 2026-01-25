import React from 'react';
import { Sparkles, Rocket, GraduationCap, Star, Clock, Filter } from 'lucide-react';

interface TokenData {
  id: string;
  name: string;
  symbol: string;
  priceChange: number;
  marketCap: string;
  volume: string;
  timeSince: string;
  image: string;
  chartColor: string;
}

const TokenRow = ({ token }: { token: TokenData }) => {
  const isPositive = token.priceChange >= 0;
  
  return (
    <div className="flex items-center px-3 py-2.5 hover:bg-[#1e2329] transition-colors cursor-pointer border-b border-[#1e2329]/50 group">
      <div className="relative w-8 h-8 mr-3 flex-shrink-0">
        <img
          src={token.image}
          alt={token.name}
          className="w-full h-full rounded-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/72adb3de-1a58-45c8-82a3-8edac240bd60-flipfin-fun/assets/images/images_1.png';
          }}
        />
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5 overflow-hidden">
          <span className="text-[12px] font-bold text-white truncate">{token.name}</span>
          <span className="text-[10px] text-gray-500 truncate hidden xl:inline">{token.symbol}</span>
        </div>
        <div className="flex items-center gap-2 mt-0.5">
          <span className={`text-[10px] font-bold ${isPositive ? 'text-[#02c076]' : 'text-[#f6465d]'}`}>
            {isPositive ? '+' : ''}{token.priceChange}%
          </span>
          <span className="text-[10px] text-gray-400 font-mono">
            MC <span className="text-gray-300">${token.marketCap}</span>
          </span>
        </div>
      </div>

      <div className="flex flex-col items-end gap-1 ml-2">
        <span className="text-[10px] text-gray-500 flex items-center gap-1">
          <Clock className="w-2.5 h-2.5" /> {token.timeSince}
        </span>
        <div className="w-16 h-4 opacity-70 group-hover:opacity-100 transition-opacity">
          {/* Sparkline simulation using SVG */}
          <svg viewBox="0 0 100 20" className="w-full h-full overflow-visible">
            <path
              d={isPositive ? "M0 15 Q 25 10, 50 12 T 100 2" : "M0 5 Q 25 15, 50 8 T 100 18"}
              fill="none"
              stroke={isPositive ? "#02c076" : "#f6465d"}
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <span className="text-[9px] font-mono text-gray-500 uppercase tracking-tighter">
          V ${token.volume}
        </span>
      </div>
    </div>
  );
};

const ColumnHeader = ({ 
  icon: Icon, 
  title, 
  count, 
  colorClasses 
}: { 
  icon: any, 
  title: string, 
  count: number, 
  colorClasses: string 
}) => (
  <div className="flex items-center justify-between px-3 py-2.5 border-b border-[#1e2329] bg-[#0d1117] sticky top-0 z-10">
    <div className="flex items-center gap-2">
      <Icon className={`w-4 h-4 ${colorClasses}`} />
      <span className="text-[12px] font-semibold text-white">{title}</span>
      <span className="text-[10px] px-1.5 py-0.5 bg-[#1e2329] text-gray-400 rounded-sm">{count}</span>
    </div>
    <div className="flex items-center gap-2">
      <div className="hidden sm:flex items-center gap-1.5">
        <div className="w-1 h-1 rounded-full bg-[#02c076] animate-pulse"></div>
        <span className="text-[9px] text-gray-500">Just now</span>
      </div>
      <button className="p-1 hover:bg-[#1e2329] rounded transition-colors text-gray-500 hover:text-gray-300">
        <Filter className="w-3 h-3" />
      </button>
    </div>
  </div>
);

const DashboardGrid = () => {
  const assets = [
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/72adb3de-1a58-45c8-82a3-8edac240bd60-flipfin-fun/assets/images/images_1.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/72adb3de-1a58-45c8-82a3-8edac240bd60-flipfin-fun/assets/images/images_2.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/72adb3de-1a58-45c8-82a3-8edac240bd60-flipfin-fun/assets/images/images_3.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/72adb3de-1a58-45c8-82a3-8edac240bd60-flipfin-fun/assets/images/images_4.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/72adb3de-1a58-45c8-82a3-8edac240bd60-flipfin-fun/assets/images/images_5.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/72adb3de-1a58-45c8-82a3-8edac240bd60-flipfin-fun/assets/images/images_10.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/72adb3de-1a58-45c8-82a3-8edac240bd60-flipfin-fun/assets/images/images_15.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/72adb3de-1a58-45c8-82a3-8edac240bd60-flipfin-fun/assets/images/images_20.png"
  ];

  const categories = [
    {
      id: 'new',
      title: 'New Creations',
      count: 21,
      icon: Sparkles,
      color: 'text-[#02c076]',
      tokens: [
        { id: '1', name: 'Narrator', symbol: 'The Narrator', priceChange: 157.0, marketCap: '121.39K', volume: '134.84K', timeSince: '3m ago', image: assets[0], chartColor: '#02c076' },
        { id: '2', name: 'SPIRIT', symbol: 'The Indomitable...', priceChange: -72.5, marketCap: '14.64K', volume: '57.05K', timeSince: '8m ago', image: assets[1], chartColor: '#f6465d' },
        { id: '3', name: 'egg', symbol: 'this can cook', priceChange: -36.2, marketCap: '4.81K', volume: '69.29K', timeSince: '12m ago', image: assets[2], chartColor: '#f6465d' },
        { id: '4', name: 'wernor', symbol: 'wernor herzog', priceChange: 53.7, marketCap: '80.04K', volume: '103.33K', timeSince: '13m ago', image: assets[3], chartColor: '#02c076' },
        { id: '5', name: 'Antarctica', symbol: 'Antarctica', priceChange: 233.0, marketCap: '171.20K', volume: '153.38K', timeSince: '19m ago', image: assets[4], chartColor: '#02c076' },
      ]
    },
    {
      id: 'graduating',
      title: 'About to Graduate',
      count: 17,
      icon: Rocket,
      color: 'text-orange-500',
      tokens: [
        { id: '6', name: 'ANGLERFISH', symbol: 'Nietzschean An...', priceChange: 10.3, marketCap: '4.36K', volume: '110.38K', timeSince: '1h ago', image: assets[5], chartColor: '#02c076' },
        { id: '7', name: 'OINK', symbol: 'OINK', priceChange: 13.3, marketCap: '60.05K', volume: '8.35K', timeSince: '1h ago', image: assets[6], chartColor: '#02c076' },
        { id: '8', name: 'ACTP', symbol: 'Act P: The Peng...', priceChange: -94.1, marketCap: '3.01K', volume: '785.25K', timeSince: '1h ago', image: assets[7], chartColor: '#f6465d' },
        { id: '9', name: 'one', symbol: 'the chosen one', priceChange: 2.5, marketCap: '4.13K', volume: '99.01K', timeSince: '1h ago', image: assets[0], chartColor: '#02c076' },
        { id: '10', name: 'DOVE', symbol: 'WHITE DOVE', priceChange: -74.0, marketCap: '13.60K', volume: '474.63K', timeSince: '1h ago', image: assets[1], chartColor: '#f6465d' },
      ]
    },
    {
      id: 'graduated',
      title: 'Graduated',
      count: 14,
      icon: GraduationCap,
      color: 'text-blue-400',
      tokens: [
        { id: '11', name: 'Narrator', symbol: 'The Narrator', priceChange: 157.0, marketCap: '121.39K', volume: '134.84K', timeSince: '3m ago', image: assets[2], chartColor: '#02c076' },
        { id: '12', name: 'Antarctica', symbol: 'Antarctica', priceChange: 233.0, marketCap: '171.20K', volume: '153.38K', timeSince: '19m ago', image: assets[3], chartColor: '#02c076' },
        { id: '13', name: 'UNKNOWN', symbol: 'Unknown', priceChange: 1589.0, marketCap: '1.09M', volume: '180.67K', timeSince: '24m ago', image: assets[4], chartColor: '#02c076' },
        { id: '14', name: 'UNKNOWN', symbol: 'Unknown', priceChange: 592.0, marketCap: '528.82K', volume: '219.82K', timeSince: '50m ago', image: assets[5], chartColor: '#02c076' },
        { id: '15', name: 'Eric', symbol: 'Flat Eric', priceChange: 158.0, marketCap: '122.08K', volume: '1.15M', timeSince: '1h ago', image: assets[6], chartColor: '#02c076' },
      ]
    }
  ];

  return (
    <div className="flex-1 flex overflow-hidden bg-[#0b0e11]">
      <div className="flex-1 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 h-full">
        {categories.map((cat) => (
          <div key={cat.id} className="flex flex-col border-r border-[#1e2329] min-w-0 h-full overflow-hidden">
            <ColumnHeader 
              icon={cat.icon} 
              title={cat.title} 
              count={cat.count} 
              colorClasses={cat.color} 
            />
            <div className="flex-1 overflow-y-auto no-scrollbar scroll-smooth">
              {cat.tokens.map((token) => (
                <TokenRow key={token.id} token={token} />
              ))}
              {/* Padding for end of list */}
              <div className="h-4"></div>
            </div>
          </div>
        ))}

        {/* Favorites Section (Hidden on smaller screens, shows as 4th col on large) */}
        <div className="hidden lg:flex flex-col min-w-0 h-full overflow-hidden">
          <ColumnHeader 
            icon={Star} 
            title="My Favorites" 
            count={0} 
            colorClasses="text-yellow-500" 
          />
          <div className="flex-1 flex items-center justify-center p-6 text-center">
            <span className="text-[11px] text-gray-600 font-medium">No tokens found</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardGrid;