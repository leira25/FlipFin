import React from 'react';
import { Flame, TrendingUp } from 'lucide-react';

interface TickerToken {
  name: string;
  symbol?: string;
  image: string;
  change?: string;
  isPositive?: boolean;
  href: string;
  featured?: boolean;
}

const featuredTokens: TickerToken[] = [
  {
    name: "Fapcoin",
    image: "https://cdn.dexscreener.com/cms/images/55f7d2389c44ed3bd38b72685c358db616d5d90fb4363e595631fa7cebc524e4?width=800&height=800&quality=90",
    href: "/trade/8vGr1eX9vfpootWiUPYa5kYoGx9bTuRy2Xc4dNMrpump",
    featured: true
  }
];

const trendingTokens: TickerToken[] = [
  {
    name: "Shrimply",
    image: "https://cdn.dexscreener.com/cms/images/2d7bf68558e8adb6219e3af003648208ab62156e2b0390cda95654aeefd8e6cd?width=800&height=800&quality=90",
    change: "+61.1%",
    isPositive: true,
    href: "/trade/FGFBvpyy2A3mBjnN1AEY18GzMVm8FEnXHToX8T87pump"
  },
  {
    name: "TURTLE",
    image: "https://cdn.dexscreener.com/cms/images/3fa636cc96000c38468b0d92f17f6cedfd4e9a579dac85bd62672265c4bc8248?width=800&height=800&quality=90",
    change: "+511.0%",
    isPositive: true,
    href: "/trade/J5KXBRvVXDvdT9ARJSCkyZDPp3Cmu2QpidgFsKk5pump"
  },
  {
    name: "NEKO",
    image: "https://cdn.dexscreener.com/cms/images/d1ed2b5810f42c35ebc6c2eefce07d15e2a6e75cddcc6f13b5b82436d9c562f6?width=800&height=800&quality=90",
    change: "-72.2%",
    isPositive: false,
    href: "/trade/7MbA6M8hutFANMBoHNxZ61VN7Y2gVoB3R45uEd7b7AW3"
  },
  {
    name: "CHICKEN",
    image: "https://cdn.dexscreener.com/cms/images/c1d63b2023ed8789d7edd2998f8c57fcb6c8882985df7736a52ac392f771f4f3?width=800&height=800&quality=90",
    change: "+124.0%",
    isPositive: true,
    href: "/trade/8wRK5QkkRfSepzr84vszhHirn3jK3CducVC8WtpXpump"
  },
  {
    name: "The Bear",
    image: "https://cdn.dexscreener.com/cms/images/55f7d2389c44ed3bd38b72685c358db616d5d90fb4363e595631fa7cebc524e4?width=800&height=800&quality=90", // Fallback from list
    change: "+29.8%",
    isPositive: true,
    href: "/trade/AGcmA6K7BWyaiB3y6FJJFeEY6b2Z6t1Sgj6ZbQyypump"
  },
  {
    name: "RAZORBILL",
    image: "https://cdn.dexscreener.com/cms/images/3fa636cc96000c38468b0d92f17f6cedfd4e9a579dac85bd62672265c4bc8248?width=800&height=800&quality=90",
    change: "+68.5%",
    isPositive: true,
    href: "/trade/Bs5qiWi8rwuCac9CRDzcZbFfKq5xU6gM85xh2viLpump"
  },
  {
    name: "Footsteps",
    image: "https://cdn.dexscreener.com/cms/images/d1ed2b5810f42c35ebc6c2eefce07d15e2a6e75cddcc6f13b5b82436d9c562f6?width=800&height=800&quality=90",
    change: "-70.6%",
    isPositive: false,
    href: "/trade/5JU8JfVBUBa3BzwMEEPffsnyeWj8gbtNyGwnqrePpump"
  },
  {
    name: "Penguins",
    image: "https://cdn.dexscreener.com/cms/images/2d7bf68558e8adb6219e3af003648208ab62156e2b0390cda95654aeefd8e6cd?width=800&height=800&quality=90",
    change: "+47.2%",
    isPositive: true,
    href: "/trade/BFPr3BWR1PgFuJTrjrZBEnkFrV8sGNeQvtFqmuZWpump"
  },
  {
    name: "NEO",
    image: "https://cdn.dexscreener.com/cms/images/c1d63b2023ed8789d7edd2998f8c57fcb6c8882985df7736a52ac392f771f4f3?width=800&height=800&quality=90",
    change: "-8.3%",
    isPositive: false,
    href: "/trade/G9uC5Q6Np9aXz6RsQ4oZQPsLfSmkvW8JtNpR7fuDpump"
  },
  {
    name: "ANGLERFISH",
    image: "https://cdn.dexscreener.com/cms/images/2d7bf68558e8adb6219e3af003648208ab62156e2b0390cda95654aeefd8e6cd?width=800&height=800&quality=90",
    change: "+306.0%",
    isPositive: true,
    href: "/trade/FNmaCuMGX2gYiEaWBKmRUvTvugj1t4DhyEVdy2qEpump"
  }
];

export default function TickerBar() {
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
          <div className="flex items-center gap-4 overflow-x-auto no-scrollbar scroll-smooth">
            {featuredTokens.map((token, idx) => (
              <a
                key={idx}
                href={token.href}
                className="flex items-center gap-2 hover:bg-[#1e2329] px-2 py-1 rounded-md transition-colors whitespace-nowrap group"
              >
                <img
                  src={token.image}
                  alt={token.name}
                  className="w-4 h-4 rounded-full ring-1 ring-orange-500/50"
                />
                <span className="text-[11px] font-bold text-white group-hover:text-orange-500">
                  {token.name}
                </span>
              </a>
            ))}
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
            {trendingTokens.map((token, idx) => (
              <a
                key={idx}
                href={token.href}
                className="flex items-center gap-2 hover:bg-[#1e2329] px-2 py-1 rounded-md transition-colors whitespace-nowrap group"
              >
                <img
                  src={token.image}
                  alt={token.name}
                  className="w-4 h-4 rounded-full"
                />
                <span className="text-[11px] font-bold text-gray-400 group-hover:text-[#02c076]">
                  {token.name}
                </span>
                <span 
                  className={`text-[9px] font-medium ${
                    token.isPositive ? 'text-[#02c076]' : 'text-[#f6465d]'
                  }`}
                >
                  {token.change}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}