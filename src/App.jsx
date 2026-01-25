import React from 'react';
import TickerBar from './components/sections/ticker-bar';
import Header from './components/sections/header';
import Sidebar from './components/sections/sidebar';
import TokenDashboard from './components/sections/token-dashboard';

function App() {
  return (
    <div className="terminal-container">
      {/* Top Ticker Bar */}
      <TickerBar />

      {/* Main Header */}
      <Header />

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <Sidebar />

        {/* Dashboard Content */}
        <main className="terminal-content">
          <TokenDashboard />
        </main>
      </div>
    </div>
  );
}

export default App;
