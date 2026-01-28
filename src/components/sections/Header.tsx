import React, { useState } from "react";
import { Menu, X } from "lucide-react";

/**
 * Header component for the FlipFin Solana Trading Terminal.
 * Implements a sticky navigation with cyber-noir styling,
 * monospaced typography for terminal text, and high-contrast green accents.
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] w-full border-b border-[#121e1a] bg-[#0b0e11]/85 backdrop-blur-md shadow-lg">
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
            href="#market"
            className="text-[12.25px] font-medium uppercase tracking-wider text-[#9ca3af] transition-colors hover:text-[#10b981]"
          >
            Market
          </a>
          <a
            href="#advanced-features"
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
              href="https://qa.flipfin.fun/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[12.25px] font-medium uppercase tracking-wider text-[#9ca3af] transition-colors hover:text-[#10b981]"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm0 2v4h4v12H6V4h8z"/>
              </svg>
              Docs
            </a>
            <a
              href="https://x.com/flipfindotfun"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 rounded-[3.5px] border border-[#121e1a] bg-transparent hover:border-[#10b981] transition-all hover:shadow-[0_0_10px_rgba(16,185,129,0.3)]"
            >
              <X size={16} className="text-[#9ca3af] hover:text-[#10b981] transition-colors" />
            </a>
            <a
              href="https://discord.gg/UXUFzsbH"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 rounded-[3.5px] border border-[#121e1a] bg-transparent hover:border-[#10b981] transition-all hover:shadow-[0_0_10px_rgba(16,185,129,0.3)]"
            >
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#9ca3af" className="hover:fill-[#10b981] transition-colors" width="16" height="16">
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3853-.3969-.8748-.6083-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8851 1.515.0699.0699 0 00-.032.0277C.5336 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0775.0105c.1202.099.246.1981.372.2914a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6061 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
              </svg>
            </a>
          </div>

          <a
            href="https://qa.flipfin.fun/"
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
        className={`fixed inset-0 z-[99] bg-black bg-opacity-95 backdrop-blur-sm pt-24 px-8 transition-transform duration-300 md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-6 right-6 text-white hover:text-[#10b981] transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          <X size={24} />
        </button>
        
        <nav className="flex flex-col gap-8 text-center">
          <a
            href="#featured"
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl font-bold uppercase italic tracking-widest text-[#9ca3af] hover:text-[#10b981]"
          >
            Market
          </a>
          <a
            href="#advanced-features"
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
            href="https://qa.flipfin.fun/docs"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl font-bold uppercase italic tracking-widest text-[#9ca3af] hover:text-[#10b981]"
          >
            Docs
          </a>
          <a
            href="https://qa.flipfin.fun/"
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
              <X size={24} className="text-[#9ca3af] hover:text-[#10b981] transition-colors" />
            </a>
            <a
              href="https://discord.gg/UXUFzsbH"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-[4px] border border-[#121e1a] bg-transparent hover:border-[#10b981] transition-all"
            >
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#9ca3af" className="hover:fill-[#10b981] transition-colors" width="24" height="24">
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3853-.3969-.8748-.6083-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8851 1.515.0699.0699 0 00-.032.0277C.5336 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0775.0105c.1202.099.246.1981.372.2914a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6061 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
              </svg>
            </a>
          </div>
        </nav>
      </div>

      {/* Grid Scanline effect holder */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-[#10b981]/20 to-transparent"></div>
    </header>
  );
}
