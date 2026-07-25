import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import { useGame } from '../context/GameContext';

function MapOverview() {
  const { badges } = useGame();
  
  return (
    <div className="animate-fade-in" style={{ textAlign: 'center' }}>
      <h1 className="title text-gradient">แผนที่ผจญภัย</h1>
      <p className="subtitle">เลือกด่านที่คุณต้องการออกสำรวจและทำภารกิจ</p>

      <div className="glass-panel" style={{ 
        position: 'relative', 
        width: '100%', 
        maxWidth: '800px', 
        height: '500px', 
        margin: '0 auto',
        background: 'rgba(15, 17, 26, 0.5)',
        backgroundImage: 'radial-gradient(circle at center, rgba(255,0,122,0.1) 0%, transparent 70%)',
        borderRadius: '24px',
        border: '2px solid rgba(255,255,255,0.1)'
      }}>
        
        {/* Pha Tak Suea */}
        <Link to="/adventure/phataksuea" style={{
          position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)',
          textDecoration: 'none', color: 'white'
        }}>
          <div style={{ fontSize: '3rem', filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.5))' }}>🌄</div>
          <div style={{ background: 'rgba(0,0,0,0.6)', padding: '0.2rem 1rem', borderRadius: '20px', marginTop: '0.5rem' }}>
            ผาตากเสื้อ {badges.includes('phataksuea') ? '✅' : ''}
          </div>
        </Link>

        {/* Wat Kaeo Ku */}
        <Link to="/adventure/wat" style={{
          position: 'absolute', top: '45%', left: '20%',
          textDecoration: 'none', color: 'white'
        }}>
          <div style={{ fontSize: '3rem', filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.5))' }}>🛕</div>
          <div style={{ background: 'rgba(0,0,0,0.6)', padding: '0.2rem 1rem', borderRadius: '20px', marginTop: '0.5rem' }}>
            วัดแก้วกู่ {badges.includes('wat') ? '✅' : ''}
          </div>
        </Link>

        {/* Naga */}
        <Link to="/adventure/naga" style={{
          position: 'absolute', top: '45%', right: '20%',
          textDecoration: 'none', color: 'white'
        }}>
          <div style={{ fontSize: '3rem', filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.5))' }}>🐉</div>
          <div style={{ background: 'rgba(0,0,0,0.6)', padding: '0.2rem 1rem', borderRadius: '20px', marginTop: '0.5rem' }}>
            พญานาค {badges.includes('naga') ? '✅' : ''}
          </div>
        </Link>

        {/* Village */}
        <div style={{
          position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '3rem', opacity: 0.8 }}>🏠</div>
          <div style={{ background: 'rgba(0,0,0,0.6)', padding: '0.2rem 1rem', borderRadius: '20px', marginTop: '0.5rem' }}>
            หมู่บ้านเริ่มต้น
          </div>
        </div>

        {/* Lines connecting them */}
        <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, pointerEvents: 'none' }}>
          <line x1="50%" y1="20%" x2="25%" y2="50%" stroke="rgba(255,255,255,0.2)" strokeWidth="4" strokeDasharray="10,5" />
          <line x1="50%" y1="20%" x2="75%" y2="50%" stroke="rgba(255,255,255,0.2)" strokeWidth="4" strokeDasharray="10,5" />
          <line x1="25%" y1="50%" x2="50%" y2="80%" stroke="rgba(255,255,255,0.2)" strokeWidth="4" strokeDasharray="10,5" />
          <line x1="75%" y1="50%" x2="50%" y2="80%" stroke="rgba(255,255,255,0.2)" strokeWidth="4" strokeDasharray="10,5" />
        </svg>

      </div>
      
      {badges.length >= 3 && !badges.includes('guardian') && (
        <div style={{ marginTop: '3rem' }}>
          <h3 style={{ color: 'var(--accent-color)' }}>คุณรวบรวมตราสัญลักษณ์ครบ 3 แห่งแล้ว!</h3>
          <Link to="/adventure/final" className="btn-primary" style={{ marginTop: '1rem' }}>
            เข้าสู่บททดสอบสุดท้าย 🏆
          </Link>
        </div>
      )}
    </div>
  );
}

// Placeholders for Mini-games
function NagaStage() {
  const { addScore, unlockBadge } = useGame();
  const navigate = useNavigate();
  
  const handleComplete = () => {
    addScore(20);
    unlockBadge('naga');
    navigate('/adventure');
  };

  return (
    <div className="glass-panel animate-fade-in" style={{ padding: '3rem', textAlign: 'center' }}>
      <h1>ด่านพญานาค</h1>
      <p>ภารกิจ: ศึกษาข้อมูลและตอบคำถาม (Algorithm Puzzle)</p>
      <button className="btn-primary" onClick={handleComplete} style={{ marginTop: '2rem' }}>
        จำลองการผ่านด่าน
      </button>
      <br/><br/>
      <button className="btn-secondary" onClick={() => navigate('/adventure')}>กลับแผนที่</button>
    </div>
  );
}

function WatStage() {
  const { addScore, unlockBadge } = useGame();
  const navigate = useNavigate();
  
  const handleComplete = () => {
    addScore(20);
    unlockBadge('wat');
    navigate('/adventure');
  };

  return (
    <div className="glass-panel animate-fade-in" style={{ padding: '3rem', textAlign: 'center' }}>
      <h1>ด่านวัดแก้วกู่</h1>
      <p>ภารกิจ: สำรวจวัดและจับคู่รูปปั้น (Blockly/Logic Puzzle)</p>
      <button className="btn-primary" onClick={handleComplete} style={{ marginTop: '2rem' }}>
        จำลองการผ่านด่าน
      </button>
      <br/><br/>
      <button className="btn-secondary" onClick={() => navigate('/adventure')}>กลับแผนที่</button>
    </div>
  );
}

function PhaTakSueaStage() {
  const { addScore, unlockBadge } = useGame();
  const navigate = useNavigate();
  
  const handleComplete = () => {
    addScore(20);
    unlockBadge('phataksuea');
    navigate('/adventure');
  };

  return (
    <div className="glass-panel animate-fade-in" style={{ padding: '3rem', textAlign: 'center' }}>
      <h1>ด่านผาตากเสื้อ</h1>
      <p>ภารกิจ: หาเส้นทางที่สั้นที่สุด (Maze / Shortest Path)</p>
      <button className="btn-primary" onClick={handleComplete} style={{ marginTop: '2rem' }}>
        จำลองการผ่านด่าน
      </button>
      <br/><br/>
      <button className="btn-secondary" onClick={() => navigate('/adventure')}>กลับแผนที่</button>
    </div>
  );
}

function FinalStage() {
  const { addScore, unlockBadge, badges } = useGame();
  const navigate = useNavigate();
  
  const handleComplete = () => {
    addScore(100);
    unlockBadge('guardian');
  };

  if (badges.includes('guardian')) {
    return (
      <div className="glass-panel animate-fade-in" style={{ padding: '3rem', textAlign: 'center' }}>
        <h1>🎉 ยินดีด้วย! 🎉</h1>
        <p style={{ fontSize: '1.5rem', color: 'var(--accent-color)', margin: '1rem 0' }}>
          คุณได้รับตำแหน่ง "ผู้พิทักษ์ Soft Power จังหวัดหนองคาย"
        </p>
        <button className="btn-primary" onClick={() => navigate('/')}>กลับหน้าแรก</button>
      </div>
    );
  }

  return (
    <div className="glass-panel animate-fade-in" style={{ padding: '3rem', textAlign: 'center' }}>
      <h1>บททดสอบสุดท้าย</h1>
      <p>ตอบคำถามรวม 10 ข้อเพื่อรับใบประกาศนียบัตร</p>
      <button className="btn-primary" onClick={handleComplete} style={{ marginTop: '2rem' }}>
        จำลองการสอบผ่าน (80%)
      </button>
    </div>
  );
}


export default function AdventureMap() {
  return (
    <Routes>
      <Route path="/" element={<MapOverview />} />
      <Route path="/naga" element={<NagaStage />} />
      <Route path="/wat" element={<WatStage />} />
      <Route path="/phataksuea" element={<PhaTakSueaStage />} />
      <Route path="/final" element={<FinalStage />} />
    </Routes>
  );
}
