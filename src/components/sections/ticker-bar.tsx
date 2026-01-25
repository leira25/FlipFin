import React from 'react';

const TickerBar = () => {
  const tickerData = [
    { symbol: 'BTC', price: '$98,432.21', change: '+2.4%' },
    { symbol: 'ETH', price: '$3,124.54', change: '+1.8%' },
    { symbol: 'SOL', price: '$241.12', change: '+5.7%' },
    { symbol: 'BNB', price: '$612.43', change: '-0.3%' },
    { symbol: 'XRP', price: '$1.12', change: '+12.4%' },
    { symbol: 'ADA', price: '$0.54', change: '-2.1%' },
    { symbol: 'DOGE', price: '$0.38', change: '+4.2%' },
    { symbol: 'DOT', price: '$7.84', change: '+0.9%' },
    { symbol: 'TRX', price: '$0.18', change: '+1.5%' },
    { symbol: 'LINK', price: '$14.23', change: '+3.2%' },
  ];

  return (
    <div className="terminal-ticker">
      <div className="ticker-scroll">
        {[...tickerData, ...tickerData].map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <span className="font-bold text-white">{item.symbol}</span>
            <span className="font-mono text-muted">{item.price}</span>
            <span className={item.change.startsWith('+') ? 'text-primary' : 'text-danger'}>
              {item.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TickerBar;
