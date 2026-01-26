import React from 'react';
import Sidebar from './components/sections/Sidebar';
import Header from './components/sections/Header';
import TickerBar from './components/sections/ticker-bar';
import TokenDashboard from './components/sections/token-dashboard';

function App() {
  return (
    <div className="terminal-layout">
      <Sidebar />
      <div className="terminal-content">
        <TickerBar />
        <Header />
        <TokenDashboard />
      </div>
    </div>
  );
}

export default App;
