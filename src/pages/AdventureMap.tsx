import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import { useGame } from '../context/GameContext';
import { useState } from 'react';
import Quiz from '../components/Quiz';
import MazeGame from '../components/MazeGame';
import SequenceGame from '../components/SequenceGame';
import FlowchartGame from '../components/FlowchartGame';
import CodingGrid from '../components/CodingGrid';
import DataQuiz from '../components/DataQuiz';
import CyberDetective from '../components/CyberDetective';

function MapOverview() {
  const { badges } = useGame();
  
  // Custom tracking for completed stages (we can use local storage or just derive from score if needed, but for simplicity, we'll assume they just need the 3 gems to enter final)
  const hasNaga = badges.includes('naga_gem');
  const hasWat = badges.includes('wat_gem');
  const hasPha = badges.includes('phataksuea_gem');
  const canEnterFinal = hasNaga && hasWat && hasPha;

  return (
    <div className="animate-fade-in" style={{ textAlign: 'center' }}>
      <h1 className="title text-gradient">แผนที่ผจญภัย Soft Power</h1>
      <p className="subtitle">ตะลุย 6 ด่านวิทยาการคำนวณ เพื่อรวบรวมอัญมณีทั้ง 3 ชิ้น!</p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <div style={{ padding: '0.5rem 1rem', background: 'rgba(0,0,0,0.5)', borderRadius: '20px', border: hasNaga ? '1px solid #ffd700' : '1px solid #555', opacity: hasNaga ? 1 : 0.5 }}>
          🐉 อัญมณีพญานาค {hasNaga && '✅'}
        </div>
        <div style={{ padding: '0.5rem 1rem', background: 'rgba(0,0,0,0.5)', borderRadius: '20px', border: hasWat ? '1px solid #ffd700' : '1px solid #555', opacity: hasWat ? 1 : 0.5 }}>
          🛕 อัญมณีวัดแก้วกู่ {hasWat && '✅'}
        </div>
        <div style={{ padding: '0.5rem 1rem', background: 'rgba(0,0,0,0.5)', borderRadius: '20px', border: hasPha ? '1px solid #ffd700' : '1px solid #555', opacity: hasPha ? 1 : 0.5 }}>
          🌄 อัญมณีผาตากเสื้อ {hasPha && '✅'}
        </div>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '1.5rem',
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        <Link to="/adventure/ch1" className="glass-panel hover-scale" style={{ padding: '1.5rem', textDecoration: 'none', color: 'inherit' }}>
          <div style={{ fontSize: '2.5rem' }}>🐉</div>
          <h3 style={{ color: 'var(--primary-color)' }}>บทที่ 1: การคิดเชิงคำนวณ</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>เขาวงกตพญานาค</p>
        </Link>
        <Link to="/adventure/ch2" className="glass-panel hover-scale" style={{ padding: '1.5rem', textDecoration: 'none', color: 'inherit' }}>
          <div style={{ fontSize: '2.5rem' }}>🛕</div>
          <h3 style={{ color: 'var(--primary-color)' }}>บทที่ 2: อัลกอริทึม</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>เรียงคำสั่งเดินทาง</p>
        </Link>
        <Link to="/adventure/ch3" className="glass-panel hover-scale" style={{ padding: '1.5rem', textDecoration: 'none', color: 'inherit' }}>
          <div style={{ fontSize: '2.5rem' }}>🔀</div>
          <h3 style={{ color: 'var(--primary-color)' }}>บทที่ 3: ผังงาน (Flowchart)</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>ต่อผังงานการเดินทาง</p>
        </Link>
        <Link to="/adventure/ch4" className="glass-panel hover-scale" style={{ padding: '1.5rem', textDecoration: 'none', color: 'inherit' }}>
          <div style={{ fontSize: '2.5rem' }}>🌄</div>
          <h3 style={{ color: 'var(--primary-color)' }}>บทที่ 4: การเขียนโปรแกรม</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Coding Adventure (ผาตากเสื้อ)</p>
        </Link>
        <Link to="/adventure/ch5" className="glass-panel hover-scale" style={{ padding: '1.5rem', textDecoration: 'none', color: 'inherit' }}>
          <div style={{ fontSize: '2.5rem' }}>📊</div>
          <h3 style={{ color: 'var(--primary-color)' }}>บทที่ 5: ข้อมูลและสารสนเทศ</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>นักวิเคราะห์ข้อมูล</p>
        </Link>
        <Link to="/adventure/ch6" className="glass-panel hover-scale" style={{ padding: '1.5rem', textDecoration: 'none', color: 'inherit' }}>
          <div style={{ fontSize: '2.5rem' }}>🕵️</div>
          <h3 style={{ color: 'var(--primary-color)' }}>บทที่ 6: ใช้เทคโนโลยีปลอดภัย</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>นักสืบไซเบอร์</p>
        </Link>
      </div>

      <div style={{ marginTop: '3rem', padding: '2rem', background: 'rgba(0,0,0,0.3)', borderRadius: '16px', border: '1px dashed rgba(255,255,255,0.2)' }}>
        {canEnterFinal && !badges.includes('guardian') ? (
          <div>
            <h2 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>ปลดล็อกด่านสุดท้ายแล้ว!</h2>
            <Link to="/adventure/final" className="btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>
              เข้าสู่บททดสอบผู้พิทักษ์ Soft Power 🏆
            </Link>
          </div>
        ) : badges.includes('guardian') ? (
          <div>
            <h2 style={{ color: '#2ecc71' }}>🎉 คุณคือผู้พิทักษ์ Soft Power!</h2>
            <p style={{ color: 'var(--text-muted)' }}>ขอบคุณที่ร่วมผจญภัยไปกับเรา</p>
          </div>
        ) : (
          <div>
            <h3 style={{ color: 'var(--text-muted)' }}>ด่านสุดท้าย: ผู้พิทักษ์ Soft Power</h3>
            <p style={{ color: '#777' }}>*ต้องรวบรวมอัญมณีให้ครบ 3 ชิ้น (บทที่ 1, 2, 4) เพื่อปลดล็อก</p>
          </div>
        )}
      </div>
    </div>
  );
}

// Chapter 1: Maze
function Ch1Stage() {
  const { addScore, unlockBadge, badges } = useGame();
  const navigate = useNavigate();

  const mazeGrid = [
    [1, 1, 1, 1, 1, 1, 1],
    [1, 2, 0, 0, 4, 1, 1],
    [1, 1, 1, 0, 1, 1, 1],
    [1, 4, 0, 0, 0, 1, 1],
    [1, 1, 1, 1, 0, 0, 1],
    [1, 1, 4, 0, 0, 3, 1],
    [1, 1, 1, 1, 1, 1, 1],
  ];

  const handleComplete = () => {
    if (!badges.includes('naga_gem')) unlockBadge('naga_gem');
    addScore(30); // Task complete
  };

  return (
    <div className="glass-panel animate-fade-in" style={{ padding: '3rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 className="title text-gradient" style={{ textAlign: 'center' }}>บทที่ 1: การคิดเชิงคำนวณ 🐉</h1>
      <MazeGame grid={mazeGrid} onComplete={handleComplete} />
      {badges.includes('naga_gem') && (
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <button className="btn-primary" onClick={() => navigate('/adventure')}>กลับแผนที่</button>
        </div>
      )}
    </div>
  );
}

// Chapter 2: Sequence
function Ch2Stage() {
  const { addScore, unlockBadge, badges } = useGame();
  const navigate = useNavigate();

  const handleComplete = () => {
    if (!badges.includes('wat_gem')) unlockBadge('wat_gem');
    addScore(30); // Task complete
  };

  return (
    <div className="glass-panel animate-fade-in" style={{ padding: '3rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 className="title text-gradient" style={{ textAlign: 'center' }}>บทที่ 2: อัลกอริทึม 🛕</h1>
      <SequenceGame onComplete={handleComplete} />
      {badges.includes('wat_gem') && (
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <button className="btn-primary" onClick={() => navigate('/adventure')}>กลับแผนที่</button>
        </div>
      )}
    </div>
  );
}

// Chapter 3: Flowchart
function Ch3Stage() {
  const { addScore } = useGame();
  const navigate = useNavigate();
  const [done, setDone] = useState(false);

  const handleComplete = () => {
    addScore(30);
    setDone(true);
  };

  return (
    <div className="glass-panel animate-fade-in" style={{ padding: '3rem', maxWidth: '900px', margin: '0 auto' }}>
      <h1 className="title text-gradient" style={{ textAlign: 'center' }}>บทที่ 3: ผังงาน (Flowchart) 🔀</h1>
      <FlowchartGame onComplete={handleComplete} />
      {done && (
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <button className="btn-primary" onClick={() => navigate('/adventure')}>กลับแผนที่</button>
        </div>
      )}
    </div>
  );
}

// Chapter 4: Coding Grid
function Ch4Stage() {
  const { addScore, unlockBadge, badges } = useGame();
  const navigate = useNavigate();

  const handleComplete = () => {
    if (!badges.includes('phataksuea_gem')) unlockBadge('phataksuea_gem');
    addScore(30);
  };

  return (
    <div className="glass-panel animate-fade-in" style={{ padding: '3rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 className="title text-gradient" style={{ textAlign: 'center' }}>บทที่ 4: การเขียนโปรแกรม 🌄</h1>
      <CodingGrid onComplete={handleComplete} />
      {badges.includes('phataksuea_gem') && (
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <button className="btn-primary" onClick={() => navigate('/adventure')}>กลับแผนที่</button>
        </div>
      )}
    </div>
  );
}

// Chapter 5: Data Analyst
function Ch5Stage() {
  const { addScore } = useGame();
  const navigate = useNavigate();
  const [done, setDone] = useState(false);

  const handleComplete = () => {
    addScore(30);
    setDone(true);
  };

  return (
    <div className="animate-fade-in" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 className="title text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>บทที่ 5: ข้อมูลและสารสนเทศ 📊</h1>
      <DataQuiz onComplete={handleComplete} />
      {done && (
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <button className="btn-primary" onClick={() => navigate('/adventure')}>กลับแผนที่</button>
        </div>
      )}
    </div>
  );
}

// Chapter 6: Cyber Detective
function Ch6Stage() {
  const { addScore } = useGame();
  const navigate = useNavigate();
  const [done, setDone] = useState(false);

  const handleComplete = () => {
    addScore(30);
    setDone(true);
  };

  return (
    <div className="animate-fade-in" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 className="title text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>บทที่ 6: การใช้เทคโนโลยีอย่างปลอดภัย 🕵️</h1>
      <CyberDetective onComplete={handleComplete} />
      {done && (
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
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
    { id: 1, question: 'พญานาคเกี่ยวข้องกับประเพณีใดในจังหวัดหนองคาย?', options: ['ประเพณีบุญบั้งไฟ', 'ประเพณีลอยกระทง', 'ประเพณีบั้งไฟพญานาค', 'ประเพณีแห่เทียนพรรษา'], correctIndex: 2 },
    { id: 2, question: 'อุทยานเทวาลัยที่มีรูปปั้นขนาดใหญ่เกี่ยวกับศาสนาต่างๆ คือที่ใด?', options: ['ศาลาแก้วกู่', 'วัดโพธิ์ชัย', 'พระธาตุบังพวน', 'วัดผาตากเสื้อ'], correctIndex: 0 },
    { id: 3, question: 'สถานที่ใดมีสกายวอล์คพื้นกระจกใสรูปเกือกม้า?', options: ['วัดแก้วกู่', 'ผาตากเสื้อ', 'หาดจอมมณี', 'พระธาตุหล้าหนอง'], correctIndex: 1 },
    { id: 4, question: 'การคิดเชิงคำนวณ (Computational Thinking) มีกี่องค์ประกอบหลัก?', options: ['2 องค์ประกอบ', '3 องค์ประกอบ', '4 องค์ประกอบ', '5 องค์ประกอบ'], correctIndex: 2 },
    { id: 5, question: 'อัลกอริทึม (Algorithm) คืออะไร?', options: ['ภาษาคอมพิวเตอร์', 'ลำดับขั้นตอนในการแก้ปัญหา', 'ชิ้นส่วนของคอมพิวเตอร์', 'โปรแกรมวาดภาพ'], correctIndex: 1 },
    { id: 6, question: 'การเขียนผังงาน (Flowchart) มีประโยชน์อย่างไร?', options: ['ทำให้คอมพิวเตอร์ทำงานเร็วขึ้น', 'ช่วยให้เห็นภาพรวมของลำดับขั้นตอน', 'เป็นวิธีเดียวในการเขียนโปรแกรม', 'ประหยัดไฟ'], correctIndex: 1 },
    { id: 7, question: 'สัญลักษณ์รูปสี่เหลี่ยมขนมเปียกปูนในผังงาน หมายถึงอะไร?', options: ['จุดเริ่มต้น', 'การทำงาน', 'การตัดสินใจ (เงื่อนไข)', 'จุดสิ้นสุด'], correctIndex: 2 },
    { id: 8, question: 'ถ้ามีคนส่งข้อความมาว่า "คุณได้รับรางวัล iPhone ฟรี ให้คลิกลิงก์" ควรทำอย่างไร?', options: ['คลิกทันที', 'ตรวจสอบความน่าเชื่อถือก่อน ไม่คลิก', 'ส่งต่อให้เพื่อน', 'กรอกข้อมูลส่วนตัว'], correctIndex: 1 },
    { id: 9, question: 'การตั้งรหัสผ่านที่ดีควรเป็นอย่างไร?', options: ['เบอร์โทรศัพท์ตัวเอง', '12345678', 'ชื่อเล่น', 'มีอักษรพิมพ์ใหญ่ พิมพ์เล็ก ตัวเลข และสัญลักษณ์'], correctIndex: 3 },
    { id: 10, question: 'ข้อมูล (Data) ต่างจาก สารสนเทศ (Information) อย่างไร?', options: ['ไม่ต่างกันเลย', 'ข้อมูลคือสิ่งที่ประมวลผลแล้ว', 'สารสนเทศเกิดจากข้อมูลที่ผ่านการประมวลผล', 'สารสนเทศคือตัวเลขเท่านั้น'], correctIndex: 2 }
  ];

  const handleComplete = (score: number) => {
    if (score >= 8 && !badges.includes('guardian')) { // 80% passing grade (8/10)
      addScore(50);
      unlockBadge('guardian');
    } else if (score < 8) {
      alert(`คุณได้ ${score}/10 คะแนน ต้องได้ 8 คะแนนขึ้นไปถึงจะผ่าน!`);
    }
  };

  if (badges.includes('guardian')) {
    return (
      <div className="glass-panel animate-fade-in" style={{ padding: '3rem', textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
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
      <h1 className="title text-gradient" style={{ textAlign: 'center' }}>บททดสอบผู้พิทักษ์ Soft Power</h1>
      <p style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--text-muted)' }}>
        ตอบคำถามให้ถูกต้องอย่างน้อย 80% (8/10 ข้อ) เพื่อรับใบประกาศนียบัตรขั้นสูงสุด
      </p>
      <Quiz questions={finalQuiz} onComplete={handleComplete} />
    </div>
  );
}

export default function AdventureMap() {
  return (
    <Routes>
      <Route path="/" element={<MapOverview />} />
      <Route path="/ch1" element={<Ch1Stage />} />
      <Route path="/ch2" element={<Ch2Stage />} />
      <Route path="/ch3" element={<Ch3Stage />} />
      <Route path="/ch4" element={<Ch4Stage />} />
      <Route path="/ch5" element={<Ch5Stage />} />
      <Route path="/ch6" element={<Ch6Stage />} />
      <Route path="/final" element={<FinalStage />} />
    </Routes>
  );
}

