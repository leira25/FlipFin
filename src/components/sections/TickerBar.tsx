import React from 'react';
import { Flame, TrendingUp } from 'lucide-react';

interface TickerAsset {
  name: string;
  symbol?: string;
  change?: string;
  isPositive?: boolean;
  image: string;
  href: string;
}

const featuredToken: TickerAsset = {
  name: "Fapcoin",
  image: "https://cdn.dexscreener.com/cms/images/55f7d2389c44ed3bd38b72685c358db616d5d90fb4363e595631fa7cebc524e4?width=800&height=800&quality=90",
  href: "/trade/8vGr1eX9vfpootWiUPYa5kYoGx9bTuRy2Xc4dNMrpump"
};

const trendingTokens: TickerAsset[] = [
  {
    name: "CHILLGUY",
    change: "-22.7%",
    isPositive: false,
    image: "https://cdn.dexscreener.com/cms/images/8dc30a38890d9443576009d4bb926d72088ef2b3a01837b288e1e54b2b2839af?width=800&height=800&quality=90",
    href: "/trade/CNzLC854cx86zsAGYLVmtAqzwfhSKEn8jtgogZX6pump"
  },
  {
    name: "wernor",
    change: "+53.7%",
    isPositive: true,
    image: "https://cdn.dexscreener.com/cms/images/60e18e9cf8f05b42a41b60bdba5b34b16cf8db879c580cd9824e8cb00fb4a533?width=800&height=800&quality=90",
    href: "/trade/8oDgyRVYWrqxfgyjxsPprYFFdH5ds9U2HvuCVsj4pump"
  },
  {
    name: "Narrator",
    change: "+157.0%",
    isPositive: true,
    image: "https://cdn.dexscreener.com/cms/images/98d47282ce5c40ffe0a08f167bd12c217860b81893eff706b818cd11188a3042?width=800&height=800&quality=90",
    href: "/trade/G3orAqtqz6JbWKhktuYyuc9z34t3HCgBEkpJhxxWpump"
  },
  {
    name: "egg",
    change: "-36.2%",
    isPositive: false,
    image: "https://cdn.dexscreener.com/cms/images/f37ce09e85bd7b4139c131bb89cff2d360baf61ba8d799f2e1d0920167faf81d?width=800&height=800&quality=90",
    href: "/trade/FTUK5nNL9iWmajg73ngxdBgmp8WCkbkTjBi9xdBHpump"
  },
  {
    name: "Itai",
    change: "-65.8%",
    isPositive: false,
    image: "https://cdn.dexscreener.com/cms/images/d5c18c1548bd9c8cce3817e47e7ba1f57de9508a343322444c6c242fc38c0314?width=800&height=800&quality=90",
    href: "/trade/BuB3kgCbMrzrfmC8gsHUsXhYD392B2Pcw574uFnqpump"
  },
  {
    name: "GRIZZLY",
    change: "+482.0%",
    isPositive: true,
    image: "https://cdn.dexscreener.com/cms/images/8590fdbcf6b2332df0e9daa8eb0051c184288aa6c186b84fba7bfab78d16f2d3?width=800&height=800&quality=90",
    href: "/trade/8XHqoET7eCL3VaYYqcs5wLWYKKzSk4RZ1A1TjN1Gpump"
  },
  {
    name: "afk",
    change: "+156.0%",
    isPositive: true,
    image: "https://cdn.dexscreener.com/cms/images/da65c708271daaaa683eaa5e0589d306960159bc7093b898674984345845a059?width=800&height=800&quality=90",
    href: "/trade/kMKX8hBaj3BTRBbeYix9c16EieBP5dih8DTSSwCpump"
  },
  {
    name: "LeoSeal",
    change: "+215.0%",
    isPositive: true,
    image: "https://cdn.dexscreener.com/cms/images/f9d106235ac48a432eeec9711417a46279ef56e0b739d6773b67ac2f85cc4372?width=800&height=800&quality=90",
    href: "/trade/EZv56ojkJBu3WUyLcfvhuDFTTFkUdvZJM9ZqL6tppump"
  },
  {
    name: "SPIRIT",
    change: "-72.5%",
    isPositive: false,
    image: "https://cdn.dexscreener.com/cms/images/c8e9162f302070bb9147de9bf0b8a215627f8888d9a05a97fe0a11a47770013a?width=800&height=800&quality=90",
    href: "/trade/Gm3aA8DzipmrqRAjAA2krJUpoGiNBf6Ho3AqFbigpump"
  },
  {
    name: "UNKNOWN",
    change: "+1589.0%",
    isPositive: true,
    image: "https://cdn.dexscreener.com/cms/images/f73a7ada2ecda66606b989736802ed93fe9b860c77adbffef3c04fa02e800b77?width=800&height=800&quality=90",
    href: "/trade/HUVq9KHbkUycsduvW2eMNvfYBiwzjjmJRrTdzzn1pump"
  }
];

export default function TickerBar() {
  return (
    <div className="bg-[#14191f] border-b border-[#1e2329] overflow-hidden select-none">
      <div className="max-w-[2000px] mx-auto flex items-center h-10 px-4 gap-4">
        {/* Featured Section */}
        <div className="flex items-center flex-shrink-0 border-r border-[#1e2329] pr-4 mr-2 h-full">
          <div className="flex items-center gap-2 mr-2 md:mr-4 text-[#f59e0b] whitespace-nowrap animate-pulse">
            <Flame className="w-4 h-4 fill-current" />
            <span className="text-[10px] font-bold uppercase tracking-wider hidden md:inline">
              Featured
            </span>
          </div>
          <div className="flex items-center">
            <a 
              href={featuredToken.href}
              className="flex items-center gap-2 hover:bg-[#1e2329] px-2 py-1 rounded-md transition-colors whitespace-nowrap group"
            >
              <img 
                alt={featuredToken.name} 
                className="w-4 h-4 rounded-full ring-1 ring-orange-500/50 object-cover" 
                src={featuredToken.image} 
              />
              <span className="text-[11px] font-bold text-white group-hover:text-orange-500">
                {featuredToken.name}
              </span>
            </a>
          </div>
        </div>

        {/* Trending Section */}
        <div className="flex items-center overflow-hidden flex-1 h-full">
          <div className="flex items-center gap-2 mr-2 md:mr-4 text-[#02c076] whitespace-nowrap flex-shrink-0">
            <TrendingUp className="w-4 h-4" />
            <span className="text-[10px] font-bold uppercase tracking-wider hidden md:inline">
              Trending
            </span>
          </div>
          
          <div className="flex items-center gap-4 overflow-x-auto no-scrollbar scroll-smooth flex-1">
            {trendingTokens.map((token, index) => (
              <a 
                key={index}
                href={token.href}
                className="flex items-center gap-2 hover:bg-[#1e2329] px-2 py-1 rounded-md transition-colors whitespace-nowrap group"
              >
                <img 
                  alt={token.name} 
                  className="w-4 h-4 rounded-full object-cover" 
                  src={token.image} 
                />
                <span className="text-[11px] font-bold text-gray-400 group-hover:text-[#02c076]">
                  {token.name}
                </span>
                <span className={`text-[9px] font-medium font-mono ${token.isPositive ? 'text-[#02c076]' : 'text-[#f6465d]'}`}>
                  {token.change}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}