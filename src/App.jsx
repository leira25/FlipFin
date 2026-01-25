import Sidebar from './components/sections/Sidebar';
import TickerBar from './components/sections/TickerBar';
import Header from './components/sections/Header';
import TokenDashboard from './components/sections/TokenDashboard';

function App() {
  return (
    <div className="flex h-screen w-full bg-[#0b0e11] text-white overflow-hidden font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <TickerBar />
        <Header />
        <main className="flex-1 overflow-hidden">
          <TokenDashboard />
        </main>
      </div>
    </div>
  );
}

export default App;
