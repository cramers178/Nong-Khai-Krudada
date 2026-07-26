import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useGame } from './context/GameContext';
import Home from './pages/Home';
import Intro from './pages/Intro';
import SoftPower from './pages/SoftPower';
import AdventureMap from './pages/AdventureMap';
import Lessons from './pages/Lessons';
import Dashboard from './pages/Dashboard';
import { RoleSelectionModal } from './components/RoleSelectionModal';
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
        <Link to="/dashboard" className={`nav-link ${location.pathname === '/dashboard' ? 'active' : ''}`}>📊 สรุปผู้เข้าใช้งาน</Link>
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
  useEffect(() => {
    // ป้องกันการคลิกขวา (Right-click)
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // ป้องกันปุ่ม F12, Ctrl+Shift+I, Ctrl+U
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === 'F12' || 
        (e.ctrlKey && e.shiftKey && e.key === 'I') || 
        (e.ctrlKey && e.key === 'U') ||
        (e.ctrlKey && e.shiftKey && e.key === 'C') ||
        (e.ctrlKey && e.shiftKey && e.key === 'J')
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <Router>
      <RoleSelectionModal />
      <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main className="main-content" style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lessons" element={<Lessons />} />
            <Route path="/intro" element={<Intro />} />
            <Route path="/softpower" element={<SoftPower />} />
            <Route path="/adventure/*" element={<AdventureMap />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
        
        {/* Footer */}
        <footer style={{ 
          textAlign: 'center', 
          padding: '15px', 
          backgroundColor: 'rgba(15, 17, 26, 0.8)', 
          borderTop: '1px solid var(--border-color)',
          color: 'var(--text-secondary)',
          marginTop: 'auto'
        }}>
          <p style={{ margin: 0 }}>ผู้พัฒนา : นางสาวสุนิต อุยพิตัง</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
