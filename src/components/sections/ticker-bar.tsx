import React from 'react';
import { Flame, TrendingUp } from 'lucide-react';

interface TokenTickerProps {
  name: string;
  icon: string;
  change?: string;
  isPositive?: boolean;
  isFeatured?: boolean;
  href: string;
}

const TokenItem = ({ name, icon, change, isPositive, isFeatured, href }: TokenTickerProps) => (
  <a
    href={href}
    className="flex items-center gap-2 hover:bg-[#1e2329] px-2 py-1 rounded-md transition-colors whitespace-nowrap group"
  >
    <img
      alt={name}
      className={`w-4 h-4 rounded-full ${isFeatured ? 'ring-1 ring-orange-500/50' : ''}`}
      src={icon}
    />
    <span
      className={`text-[11px] font-bold ${
        isFeatured
          ? 'text-white group-hover:text-orange-500'
          : 'text-gray-400 group-hover:text-[#02c076]'
      }`}
    >
      {name}
    </span>
    {change && (
      <span
        className={`text-[9px] font-medium ${
          isPositive ? 'text-[#02c076]' : 'text-[#f6465d]'
        }`}
      >
        {change}
      </span>
    )}
  </a>
);

export default function TickerBar() {
  const trendingTokens = [
    { 
      name: 'Artemis II', 
      icon: 'https://cdn.dexscreener.com/cms/images/284974269c2c19e11f9aa4b074556fa12802d17ec71ee0975657fce214079744?width=800&height=800&quality=90', 
      change: '-54.6%', 
      isPositive: false,
      href: '/trade/EJzqpRPxgZZVoVVuCXuQBNXp7mQzeH6FENMfuLRbpump'
    },
    { 
      name: 'ORCA', 
      icon: 'https://cdn.dexscreener.com/cms/images/8c7c8225f2ff01af33b128012deed6bae8285c93f8f9b703619f6f0a256b1402?width=800&height=800&quality=90', 
      change: '+161.0%', 
      isPositive: true,
      href: '/trade/EojFTk19EbBt5Y7DfQA9nubfrnshNJo8ivUA5cKdpump'
    },
    { 
      name: 'CHILLGUY', 
      icon: 'https://cdn.dexscreener.com/cms/images/8dc30a38890d9443576009d4bb926d72088ef2b3a01837b288e1e54b2b2839af?width=800&height=800&quality=90', 
      change: '-46.4%', 
      isPositive: false,
      href: '/trade/CNzLC854cx86zsAGYLVmtAqzwfhSKEn8jtgogZX6pump'
    },
    { 
      name: 'wernor', 
      icon: 'https://cdn.dexscreener.com/cms/images/60e18e9cf8f05b42a41b60bdba5b34b16cf8db879c580cd9824e8cb00fb4a533?width=800&height=800&quality=90', 
      change: '+13.0%', 
      isPositive: true,
      href: '/trade/8oDgyRVYWrqxfgyjxsPprYFFdH5ds9U2HvuCVsj4pump'
    },
    { 
      name: 'Narrator', 
      icon: 'https://cdn.dexscreener.com/cms/images/98d47282ce5c40ffe0a08f167bd12c217860b81893eff706b818cd11188a3042?width=800&height=800&quality=90', 
      change: '+176.0%', 
      isPositive: true,
      href: '/trade/G3orAqtqz6JbWKhktuYyuc9z34t3HCgBEkpJhxxWpump'
    },
    { 
      name: 'egg', 
      icon: 'https://cdn.dexscreener.com/cms/images/f37ce09e85bd7b4139c131bb89cff2d360baf61ba8d799f2e1d0920167faf81d?width=800&height=800&quality=90', 
      change: '-47.1%', 
      isPositive: false,
      href: '/trade/FTUK5nNL9iWmajg73ngxdBgmp8WCkbkTjBi9xdBHpump'
    },
    { 
      name: 'Itai', 
      icon: 'https://cdn.dexscreener.com/cms/images/d5c18c1548bd9c8cce3817e47e7ba1f57de9508a343322444c6c242fc38c0314?width=800&height=800&quality=90', 
      change: '-86.1%', 
      isPositive: false,
      href: '/trade/BuB3kgCbMrzrfmC8gsHUsXhYD392B2Pcw574uFnqpump'
    },
    { 
      name: 'GRIZZLY', 
      icon: 'https://cdn.dexscreener.com/cms/images/8590fdbcf6b2332df0e9daa8eb0051c184288aa6c186b84fba7bfab78d16f2d3?width=800&height=800&quality=90', 
      change: '+349.0%', 
      isPositive: true,
      href: '/trade/8XHqoET7eCL3VaYYqcs5wLWYKKzSk4RZ1A1TjN1Gpump'
    },
    { 
      name: 'afk', 
      icon: 'https://cdn.dexscreener.com/cms/images/da65c708271daaaa683eaa5e0589d306960159bc7093b898674984345845a059?width=800&height=800&quality=90', 
      change: '+148.0%', 
      isPositive: true,
      href: '/trade/kMKX8hBaj3BTRBbeYix9c16EieBP5dih8DTSSwCpump'
    },
    { 
      name: 'LeoSeal', 
      icon: 'https://cdn.dexscreener.com/cms/images/f9d106235ac48a432eeec9711417a46279ef56e0b739d6773b67ac2f85cc4372?width=800&height=800&quality=90', 
      change: '+95.6%', 
      isPositive: true,
      href: '/trade/EZv56ojkJBu3WUyLcfvhuDFTTFkUdvZJM9ZqL6tppump'
    }
  ];

  return (
    <div className="bg-[#14191f] border-b border-[#1e2329] overflow-hidden">
      <div className="max-w-[2000px] mx-auto flex items-center h-10 px-4 gap-4">
        {/* Featured Section */}
        <div className="flex items-center flex-shrink-0 border-r border-[#1e2329] pr-4 mr-2">
          <div className="flex items-center gap-2 mr-2 md:mr-4 text-orange-500 whitespace-nowrap animate-pulse">
            <Flame className="w-4 h-4 fill-current" />
            <span className="text-[10px] font-bold uppercase tracking-wider hidden md:inline">
              Featured
            </span>
          </div>
          <div className="flex items-center gap-4">
            <TokenItem
              name="Fapcoin"
              icon="https://cdn.dexscreener.com/cms/images/55f7d2389c44ed3bd38b72685c358db616d5d90fb4363e595631fa7cebc524e4?width=800&height=800&quality=90"
              isFeatured
              href="/trade/8vGr1eX9vfpootWiUPYa5kYoGx9bTuRy2Xc4dNMrpump"
            />
          </div>
        </div>

        {/* Trending Section */}
        <div className="flex items-center overflow-hidden">
          <div className="flex items-center gap-2 mr-2 md:mr-4 text-[#02c076] whitespace-nowrap flex-shrink-0">
            <TrendingUp className="w-4 h-4" />
            <span className="text-[10px] font-bold uppercase tracking-wider hidden md:inline">
              Trending
            </span>
          </div>
          <div className="flex items-center gap-4 overflow-x-auto no-scrollbar scroll-smooth">
            {trendingTokens.map((token, index) => (
              <TokenItem key={index} {...token} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}