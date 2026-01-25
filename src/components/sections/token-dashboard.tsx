import React from 'react';
import { Terminal, Activity, Zap, BarChart3, Search, Filter, ShieldCheck, Cpu } from 'lucide-react';

const TokenRow = ({ label, command, action, colorClass }: { label: string, command: string, action: string, colorClass: string }) => (
  <div className="token-row">
    <div className={`p-2 rounded bg-opacity-10 ${colorClass.replace('text-', 'bg-')} bg-opacity-10`}>
      <Terminal className={`w-3 h-3 ${colorClass}`} />
    </div>
    <div className="flex-1 min-w-0">
      <div className="flex items-center justify-between">
        <span className="font-bold text-white uppercase">{label}</span>
        <span className="text-[10px] text-muted font-mono">{command}</span>
      </div>
      <div className="flex items-center justify-between mt-1">
        <span className={`text-[10px] font-mono ${colorClass}`}>{action}</span>
        <div className="flex items-center gap-1">
          <div className={`w-1 h-1 rounded-full ${colorClass.replace('text-', 'bg-')} animate-pulse`} />
          <span className="text-[9px] text-muted">ONLINE</span>
        </div>
      </div>
    </div>
  </div>
);

const ColumnHeader = ({ title, subtitle, icon: Icon, colorClass }: { title: string, subtitle: string, icon: any, colorClass: string }) => (
  <div className="column-header">
    <div className="flex items-center gap-2">
      <Icon className={`w-4 h-4 ${colorClass}`} />
      <div>
        <h3 className="text-[13px] text-white font-bold">{title}</h3>
        <p className="text-[10px] text-muted font-mono">{subtitle}</p>
      </div>
    </div>
    <div className="flex items-center gap-2">
      <button className="p-1 text-muted hover:text-white transition-colors">
        <Search className="w-3 h-3" />
      </button>
      <button className="p-1 text-muted hover:text-white transition-colors">
        <Filter className="w-3 h-3" />
      </button>
    </div>
  </div>
);

const TokenDashboard = () => {
  const sections = [
    {
      title: "Intelligence_Feed.log",
      subtitle: "Data Streams",
      icon: Activity,
      colorClass: "text-primary",
      items: [
        { label: "/flow", command: "Real-time Feed", action: "Streaming..." },
        { label: "/narratives", command: "Trend Analysis", action: "Analyzing Patterns" },
        { label: "/hype", command: "Social Pulse", action: "Calculating Velocity" },
        { label: "/graduation", command: "Raydium Radar", action: "Monitoring Pools" },
      ]
    },
    {
      title: "Trading_Module.sh",
      subtitle: "Instant Execution",
      icon: Zap,
      colorClass: "text-primary",
      items: [
        { label: "/buy [token]", command: "Execute Buy", action: "Standby" },
        { label: "/sell [token]", command: "Execute Sell", action: "Standby" },
        { label: "/alert buy", command: "Set Buy Trigger", action: "Active" },
        { label: "/pnl", command: "Fetch ROI", action: "Ready" },
      ]
    },
    {
      title: "Security_Protocols.sys",
      subtitle: "Risk Management",
      icon: ShieldCheck,
      colorClass: "text-primary",
      items: [
        { label: "/audit", command: "Contract Scan", action: "No Threats" },
        { label: "/honeypot", command: "Check Liquidity", action: "Verified" },
        { label: "/whale", command: "Monitor Large Moves", action: "Quiet" },
        { label: "/sniff", command: "Verify Mint", action: "Secure" },
      ]
    },
    {
      title: "Neural_Compute.bin",
      subtitle: "AI Predictions",
      icon: Cpu,
      colorClass: "text-primary",
      items: [
        { label: "/predict", command: "Model Output", action: "Bullish 84%" },
        { label: "/sentiment", command: "Market Mood", action: "Greedy" },
        { label: "/volatility", command: "Std Deviation", action: "Low" },
        { label: "/alpha", command: "Early Signals", action: "Searching..." },
      ]
    }
  ];

  return (
    <div className="dashboard-grid no-scrollbar">
      {sections.map((section, idx) => (
        <div key={idx} className="dashboard-column">
          <ColumnHeader 
            title={section.title}
            subtitle={section.subtitle}
            icon={section.icon}
            colorClass={section.colorClass}
          />
          <div className="flex-1 overflow-y-auto no-scrollbar">
            {section.items.map((item, i) => (
              <TokenRow 
                key={i}
                label={item.label}
                command={item.command}
                action={item.action}
                colorClass={section.colorClass}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TokenDashboard;
