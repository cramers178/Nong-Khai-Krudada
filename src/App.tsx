import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useGame } from './context/GameContext';
import Home from './pages/Home';
import Intro from './pages/Intro';
import SoftPower from './pages/SoftPower';
import AdventureMap from './pages/AdventureMap';
import Lessons from './pages/Lessons';
import { Shield } from 'lucide-react';

function Navbar() {
  const { score, badges } = useGame();
  const location = useLocation();

  if (location.pathname === '/') return null; // Don't show navbar on home page

  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/" className="nav-link">🏠 หน้าแรก</Link>
        <Link to="/lessons" className={`nav-link ${location.pathname === '/lessons' ? 'active' : ''}`}>📚 สื่อการสอน</Link>
        <Link to="/intro" className={`nav-link ${location.pathname === '/intro' ? 'active' : ''}`}>📖 บทนำ</Link>
        <Link to="/softpower" className={`nav-link ${location.pathname === '/softpower' ? 'active' : ''}`}>🏞️ Soft Power</Link>
        <Link to="/adventure" className={`nav-link ${location.pathname.startsWith('/adventure') ? 'active' : ''}`}>🎮 แผนที่เกม/บทเรียน</Link>
      </div>
      <div className="score-display">
        <Shield size={20} />
        <span>คะแนน: {score}</span>
        <div className="badge-container" style={{ marginLeft: '1rem' }}>
          <div className={`badge ${badges.includes('naga_gem') ? 'unlocked' : ''}`} title="อัญมณีพญานาค">🐉</div>
          <div className={`badge ${badges.includes('wat_gem') ? 'unlocked' : ''}`} title="อัญมณีศาลาแก้วกู่">🛕</div>
          <div className={`badge ${badges.includes('phataksuea_gem') ? 'unlocked' : ''}`} title="อัญมณีผาตากเสื้อ">🌄</div>
          <div className={`badge ${badges.includes('guardian') ? 'unlocked' : ''}`} title="ผู้พิทักษ์หนองคาย">🏆</div>
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lessons" element={<Lessons />} />
            <Route path="/intro" element={<Intro />} />
            <Route path="/softpower" element={<SoftPower />} />
            <Route path="/adventure/*" element={<AdventureMap />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
