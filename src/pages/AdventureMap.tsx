import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import { useGame } from '../context/GameContext';
import { useState } from 'react';
import Quiz from '../components/Quiz';
import AlgorithmPuzzle from '../components/AlgorithmPuzzle';
import MemoryGame from '../components/MemoryGame';
import CodingGrid from '../components/CodingGrid';
import MazeGame from '../components/MazeGame';

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
          <div style={{ fontSize: '3rem', filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.5))', transition: 'transform 0.2s' }} className="hover-scale">🌄</div>
          <div style={{ background: 'rgba(0,0,0,0.6)', padding: '0.2rem 1rem', borderRadius: '20px', marginTop: '0.5rem' }}>
            ผาตากเสื้อ {badges.includes('phataksuea') ? '✅' : ''}
          </div>
        </Link>

        {/* Wat Kaeo Ku */}
        <Link to="/adventure/wat" style={{
          position: 'absolute', top: '45%', left: '20%',
          textDecoration: 'none', color: 'white'
        }}>
          <div style={{ fontSize: '3rem', filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.5))', transition: 'transform 0.2s' }} className="hover-scale">🛕</div>
          <div style={{ background: 'rgba(0,0,0,0.6)', padding: '0.2rem 1rem', borderRadius: '20px', marginTop: '0.5rem' }}>
            วัดแก้วกู่ {badges.includes('wat') ? '✅' : ''}
          </div>
        </Link>

        {/* Naga */}
        <Link to="/adventure/naga" style={{
          position: 'absolute', top: '45%', right: '20%',
          textDecoration: 'none', color: 'white'
        }}>
          <div style={{ fontSize: '3rem', filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.5))', transition: 'transform 0.2s' }} className="hover-scale">🐉</div>
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

// Naga Stage
function NagaStage() {
  const { addScore, unlockBadge, badges } = useGame();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const nagaQuiz = [
    { id: 1, question: 'พญานาคเกี่ยวข้องกับประเพณีใดในจังหวัดหนองคาย?', options: ['ประเพณีบุญบั้งไฟ', 'ประเพณีลอยกระทง', 'ประเพณีบั้งไฟพญานาค', 'ประเพณีแห่เทียนพรรษา'], correctIndex: 2 },
    { id: 2, question: 'พญานาคอาศัยอยู่ที่ไหนตามความเชื่อ?', options: ['บนภูเขา', 'ใต้แม่น้ำโขง (เมืองบาดาล)', 'บนท้องฟ้า', 'ในป่าลึก'], correctIndex: 1 }
  ];

  const handleQuizComplete = (score: number) => {
    addScore(score * 10);
    setStep(2);
  };

  const handlePuzzleComplete = () => {
    if (!badges.includes('naga')) {
      addScore(20);
      unlockBadge('naga');
    }
    setStep(3);
  };

  return (
    <div className="glass-panel animate-fade-in" style={{ padding: '3rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 className="title text-gradient" style={{ textAlign: 'center' }}>ด่านพญานาค 🐉</h1>
      
      {step === 1 && (
        <div>
          <h2 style={{ marginBottom: '1rem', color: 'var(--primary-color)' }}>ภารกิจที่ 1: ตอบคำถามตำนานพญานาค</h2>
          <Quiz questions={nagaQuiz} onComplete={handleQuizComplete} />
        </div>
      )}

      {step === 2 && (
        <div className="animate-fade-in">
          <h2 style={{ marginBottom: '1rem', color: 'var(--primary-color)', textAlign: 'center' }}>ภารกิจที่ 2: อัลกอริทึมเดินทางเข้าถ้ำบาดาล</h2>
          <AlgorithmPuzzle 
            initialSteps={[
              { id: 'b', text: 'เดินหน้า 10 ก้าว' },
              { id: 'd', text: 'ว่ายน้ำเข้าถ้ำ' },
              { id: 'a', text: 'เริ่มต้นที่ริมแม่น้ำโขง' },
              { id: 'c', text: 'เลี้ยวซ้าย' }
            ]}
            correctOrder={['a', 'b', 'c', 'd']}
            onComplete={handlePuzzleComplete}
          />
        </div>
      )}

      {step === 3 && (
        <div className="animate-fade-in" style={{ textAlign: 'center' }}>
          <h2>🎉 ยินดีด้วย คุณผ่านด่านพญานาคแล้ว!</h2>
          <p style={{ margin: '2rem 0', color: 'var(--accent-color)' }}>ได้รับเหรียญตรา: 🐉 ผู้พิทักษ์พญานาค</p>
          <button className="btn-primary" onClick={() => navigate('/adventure')}>กลับแผนที่</button>
        </div>
      )}
    </div>
  );
}

// Wat Kaeo Ku Stage
function WatStage() {
  const { addScore, unlockBadge, badges } = useGame();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const handleMatchComplete = () => {
    setStep(2);
  };

  const handleCodingComplete = () => {
    if (!badges.includes('wat')) {
      addScore(20);
      unlockBadge('wat');
    }
    setStep(3);
  };

  return (
    <div className="glass-panel animate-fade-in" style={{ padding: '3rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 className="title text-gradient" style={{ textAlign: 'center' }}>ด่านวัดแก้วกู่ 🛕</h1>
      
      {step === 1 && (
        <div>
          <h2 style={{ marginBottom: '1rem', color: 'var(--primary-color)', textAlign: 'center' }}>ภารกิจที่ 1: จับคู่รูปปั้นเทวาลัย</h2>
          <MemoryGame onComplete={handleMatchComplete} />
        </div>
      )}

      {step === 2 && (
        <div className="animate-fade-in">
          <h2 style={{ marginBottom: '1rem', color: 'var(--primary-color)', textAlign: 'center' }}>ภารกิจที่ 2: เขียนโปรแกรมเดินตามหาความศรัทธา</h2>
          <CodingGrid onComplete={handleCodingComplete} />
        </div>
      )}

      {step === 3 && (
        <div className="animate-fade-in" style={{ textAlign: 'center' }}>
          <h2>🎉 ยินดีด้วย คุณผ่านด่านวัดแก้วกู่แล้ว!</h2>
          <p style={{ margin: '2rem 0', color: 'var(--accent-color)' }}>ได้รับเหรียญตรา: 🛕 นักสำรวจเทวาลัย</p>
          <button className="btn-primary" onClick={() => navigate('/adventure')}>กลับแผนที่</button>
        </div>
      )}
    </div>
  );
}

// Pha Tak Suea Stage
function PhaTakSueaStage() {
  const { addScore, unlockBadge, badges } = useGame();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const mazeGrid = [
    [1, 1, 1, 3, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 2, 1, 1],
  ];

  const handleMazeComplete = () => {
    if (!badges.includes('phataksuea')) {
      addScore(20);
      unlockBadge('phataksuea');
    }
    setStep(2);
  };

  return (
    <div className="glass-panel animate-fade-in" style={{ padding: '3rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 className="title text-gradient" style={{ textAlign: 'center' }}>ด่านผาตากเสื้อ 🌄</h1>
      
      {step === 1 && (
        <div>
          <h2 style={{ marginBottom: '1rem', color: 'var(--primary-color)', textAlign: 'center' }}>ภารกิจ: หาเส้นทางสั้นที่สุดบนสกายวอล์ค</h2>
          <MazeGame grid={mazeGrid} onComplete={handleMazeComplete} />
        </div>
      )}

      {step === 2 && (
        <div className="animate-fade-in" style={{ textAlign: 'center' }}>
          <h2>🎉 ยินดีด้วย คุณผ่านด่านผาตากเสื้อแล้ว!</h2>
          <p style={{ margin: '2rem 0', color: 'var(--accent-color)' }}>ได้รับเหรียญตรา: 🌄 ผู้พิชิตผาตากเสื้อ</p>
          <button className="btn-primary" onClick={() => navigate('/adventure')}>กลับแผนที่</button>
        </div>
      )}
    </div>
  );
}

// Final Stage
function FinalStage() {
  const { addScore, unlockBadge, badges } = useGame();
  const navigate = useNavigate();
  
  const finalQuiz = [
    { id: 1, question: 'สถานที่ใดมีสกายวอล์คพื้นกระจกใสรูปเกือกม้า?', options: ['วัดแก้วกู่', 'ผาตากเสื้อ', 'หาดจอมมณี', 'พระธาตุหล้าหนอง'], correctIndex: 1 },
    { id: 2, question: 'อุทยานเทวาลัยที่มีรูปปั้นขนาดใหญ่เกี่ยวกับศาสนาต่างๆ คือที่ใด?', options: ['ศาลาแก้วกู่', 'วัดโพธิ์ชัย', 'พระธาตุบังพวน', 'วัดผาตากเสื้อ'], correctIndex: 0 },
    { id: 3, question: 'อัลกอริทึม (Algorithm) คืออะไร?', options: ['ภาษาคอมพิวเตอร์', 'ลำดับขั้นตอนในการแก้ปัญหา', 'ชิ้นส่วนของคอมพิวเตอร์', 'โปรแกรมวาดภาพ'], correctIndex: 1 },
    { id: 4, question: 'การเขียนผังงาน (Flowchart) มีประโยชน์อย่างไร?', options: ['ทำให้คอมพิวเตอร์ทำงานเร็วขึ้น', 'ช่วยให้เห็นภาพรวมของลำดับขั้นตอน', 'เป็นวิธีเดียวในการเขียนโปรแกรม', 'ประหยัดไฟ'], correctIndex: 1 },
    { id: 5, question: 'ข้อใดคือพฤติกรรมการใช้อินเทอร์เน็ตที่ปลอดภัย?', options: ['บอกรหัสผ่านให้เพื่อนสนิท', 'ตั้งรหัสผ่านที่เดาง่ายๆ เช่น 1234', 'ออกจากระบบทุกครั้งหลังใช้งานเสร็จ', 'คลิกลิงก์แปลกๆ ที่ส่งมาในแชท'], correctIndex: 2 }
  ];

  const handleComplete = (score: number) => {
    if (score >= 4 && !badges.includes('guardian')) { // 80% passing grade
      addScore(50);
      unlockBadge('guardian');
    }
  };

  if (badges.includes('guardian')) {
    return (
      <div className="glass-panel animate-fade-in" style={{ padding: '3rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem' }}>🎉 ยินดีด้วย! 🎉</h1>
        <p style={{ fontSize: '1.5rem', color: 'var(--accent-color)', margin: '2rem 0' }}>
          คุณได้รับตำแหน่ง "🏆 ผู้พิทักษ์ Soft Power จังหวัดหนองคาย"
        </p>
        <button className="btn-primary" onClick={() => navigate('/')}>กลับหน้าแรก</button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 className="title text-gradient" style={{ textAlign: 'center' }}>บททดสอบสุดท้าย</h1>
      <p style={{ textAlign: 'center', marginBottom: '2rem' }}>ตอบคำถามให้ถูกต้องอย่างน้อย 80% (4/5 ข้อ) เพื่อรับใบประกาศนียบัตร</p>
      <Quiz questions={finalQuiz} onComplete={handleComplete} />
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

