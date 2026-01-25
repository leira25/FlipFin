import React from "react";
import { Search, Coins, LayoutGrid, Gift, Eye, Trophy, FileText, Wallet, Settings, Terminal, Shield, Zap } from "lucide-react";

const sidebarLinks = [
  { name: "Terminal", href: "/", icon: Terminal, active: true },
  { name: "Intelligence", href: "/intel", icon: Shield },
  { name: "Execution", href: "/trade", icon: Zap },
  { name: "Portfolio", href: "/portfolio", icon: LayoutGrid },
  { name: "Rewards", href: "/rewards", icon: Gift },
  { name: "Tracker", href: "/tracker", icon: Eye },
  { name: "Leaderboard", href: "/leaderboard", icon: Trophy },
  { name: "Settings", href: "/settings", icon: Settings },
];

const Sidebar = () => {
  return (
    <aside className="terminal-sidebar">
      <nav className="flex-1 py-4 overflow-y-auto no-scrollbar">
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {sidebarLinks.map((link) => (
            <li key={link.name} style={{ padding: '0 0.5rem' }}>
              <a 
                href={link.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem 1rem',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontSize: '11px',
                  fontWeight: '600',
                  transition: 'all 0.15s ease',
                  backgroundColor: link.active ? 'rgba(2, 192, 118, 0.1)' : 'transparent',
                  color: link.active ? 'var(--primary-green)' : 'var(--text-muted)'
                }}
                className="sidebar-link"
              >
                <link.icon className="w-4 h-4" />
                <span>{link.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div style={{ padding: '1rem', borderTop: '1px solid var(--border-color)' }}>
        <div style={{
          padding: '0.75rem',
          backgroundColor: 'var(--bg-popover)',
          borderRadius: '6px',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--primary-green)' }} className="animate-pulse"></div>
          <span style={{ fontSize: '9px', fontWeight: 'bold', color: 'var(--text-muted)', textTransform: 'uppercase' }}>System Status: Normal</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
