import React from 'react';
import TickerBar from './components/sections/ticker-bar';
import Header from './components/sections/header';
import Sidebar from './components/sections/sidebar';
import TokenDashboard from './components/sections/token-dashboard';

function App() {
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-[#0b0e11] text-white">
      {/* Top Ticker Bar */}
      <TickerBar />

      {/* Main Header */}
      <Header />

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <Sidebar />

        {/* Dashboard Content */}
        <main className="flex-1 overflow-hidden relative">
          <TokenDashboard />
        </main>
      </div>
    </div>
  );
}

export default App;
