import React, { useState } from "react";
import { Menu, X, Twitter, MessageSquare } from "lucide-react";

/**
 * Header component for the FlipFin Solana Trading Terminal.
 * Implements a sticky navigation with cyber-noir styling,
 * monospaced typography for terminal text, and high-contrast green accents.
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[100] w-full border-b border-[#121e1a] bg-[#0b0e11]/85 backdrop-blur-md">
      <div className="mx-auto flex h-[71px] max-w-[1280px] items-center justify-between px-5 md:px-[21px]">
        {/* Logo and Terminal Text Section */}
        <div className="flex items-center gap-3">
          <div className="relative h-[35px] w-[43.6px]">
            <img
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/72adb3de-1a58-45c8-82a3-8edac240bd60-c-users-ariel-desktop-flipfin-vercel-app/assets/icons/logo-1.png"
              alt="FlipFin Logo"
              width={44}
              height={35}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="logo-text text-[24.5px] font-bold italic tracking-tight text-[#10b981]">
              FlipFin
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#9ca3af]">
              Terminal
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#featured"
            className="text-[12.25px] font-medium uppercase tracking-wider text-[#9ca3af] transition-colors hover:text-[#10b981]"
          >
            Market
          </a>
          <a
            href="#why"
            className="text-[12.25px] font-medium uppercase tracking-wider text-[#9ca3af] transition-colors hover:text-[#10b981]"
          >
            Features
          </a>
          <a
            href="#how"
            className="text-[12.25px] font-medium uppercase tracking-wider text-[#9ca3af] transition-colors hover:text-[#10b981]"
          >
            How it works
          </a>
          <a
            href="#faq"
            className="text-[12.25px] font-medium uppercase tracking-wider text-[#9ca3af] transition-colors hover:text-[#10b981]"
          >
            FAQ
          </a>
        </nav>

        {/* Actions Section */}
        <div className="flex items-center gap-4">
          {/* Social Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="https://x.com/flipfindotfun"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 rounded-[3.5px] border border-[#121e1a] bg-transparent hover:border-[#10b981] transition-all hover:shadow-[0_0_10px_rgba(16,185,129,0.3)]"
            >
              <Twitter size={16} className="text-[#9ca3af] hover:text-[#10b981] transition-colors" />
            </a>
            <a
              href="https://t.me/flipfin"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 rounded-[3.5px] border border-[#121e1a] bg-transparent hover:border-[#10b981] transition-all hover:shadow-[0_0_10px_rgba(16,185,129,0.3)]"
            >
              <MessageSquare size={16} className="text-[#9ca3af] hover:text-[#10b981] transition-colors" />
            </a>
          </div>

          <a
            href="https://flipfin.fun/"
            className="group relative hidden md:flex h-[32px] items-center justify-center rounded-[3.5px] bg-[#10b981] px-[21px] text-[12.25px] font-bold uppercase transition-all hover:bg-[#0ea271] hover:shadow-[0_0_15px_rgba(16,185,129,0.4)]"
            style={{ color: "#000000" }}
          >
            <span className="absolute -inset-[1px] rounded-[4px] border border-[#10b981]/20 group-hover:border-[#10b981]/40"></span>
            <span className="relative z-10">Launch App</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            className="flex md:hidden text-white hover:text-[#10b981] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`fixed inset-0 z-[99] bg-[#05080a] pt-24 px-8 transition-transform duration-300 md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col gap-8 text-center">
          <a
            href="#featured"
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl font-bold uppercase italic tracking-widest text-[#9ca3af] hover:text-[#10b981]"
          >
            Market
          </a>
          <a
            href="#why"
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl font-bold uppercase italic tracking-widest text-[#9ca3af] hover:text-[#10b981]"
          >
            Features
          </a>
          <a
            href="#how"
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl font-bold uppercase italic tracking-widest text-[#9ca3af] hover:text-[#10b981]"
          >
            How it works
          </a>
          <a
            href="#faq"
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl font-bold uppercase italic tracking-widest text-[#9ca3af] hover:text-[#10b981]"
          >
            FAQ
          </a>
          <a
            href="https://flipfin.fun/"
            className="mt-8 flex h-[60px] items-center justify-center rounded-[4px] bg-[#10b981] text-lg font-black uppercase italic tracking-tighter text-[#05080a]"
          >
            Launch Terminal
          </a>
          
          {/* Mobile Social Buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <a
              href="https://x.com/flipfindotfun"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-[4px] border border-[#121e1a] bg-transparent hover:border-[#10b981] transition-all"
            >
              <Twitter size={20} className="text-[#9ca3af] hover:text-[#10b981] transition-colors" />
            </a>
            <a
              href="https://t.me/flipfin"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-[4px] border border-[#121e1a] bg-transparent hover:border-[#10b981] transition-all"
            >
              <MessageSquare size={20} className="text-[#9ca3af] hover:text-[#10b981] transition-colors" />
            </a>
          </div>
        </nav>
      </div>

      {/* Grid Scanline effect holder */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-[#10b981]/20 to-transparent"></div>
    </header>
  );
}
