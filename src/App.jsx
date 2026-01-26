import React from 'react';
import Sidebar from './components/sections/Sidebar';
import Header from './components/sections/Header';
import TickerBar from './components/sections/ticker-bar';
import TokenDashboard from './components/sections/TokenDashboard';

function App() {
  return (
    <div className="terminal-layout">
      <Sidebar />
      <div className="terminal-content">
        <Header />
        <TickerBar />
        <TokenDashboard />
      </div>
    </div>
  );
}

export default App;
