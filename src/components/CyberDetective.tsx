import { useState, useEffect } from 'react';
import { useGame } from '../context/GameContext';
import { Shield, ShieldAlert, Clock, AlertTriangle, CheckCircle } from 'lucide-react';

interface CyberDetectiveProps {
  onComplete: () => void;
}

const GAME_TIME = 8; // seconds per item
const PASSING_SCORE = 8; // out of 10

export default function CyberDetective({ onComplete }: CyberDetectiveProps) {
  const { addScore } = useGame();
  
  const allItems = [
    { id: 1, text: '📱 SMS: "คุณได้รับรางวัล iPhone 15 ฟรี! คลิกที่นี่: http://free-prize.scam"', isPhishing: true },
    { id: 2, text: '📧 Email จากธนาคาร: "กรุณาเข้าสู่ระบบเพื่อยืนยันตัวตนด่วน! ที่ลิงก์: http://ktb-secure.com-login.net"', isPhishing: true },
    { id: 3, text: '🔒 เว็บไซต์ที่มี https:// และแม่กุญแจที่แถบ URL (ที่อยู่เว็บทางการ)', isPhishing: false },
    { id: 4, text: '🌐 โพสต์: "กินน้ำมะนาวผสมเกลือ รักษาทุกโรคได้หายขาด 100%!"', isPhishing: true },
    { id: 5, text: '💬 เพื่อนทักมาขอยืมเงินด่วนทาง Facebook (แต่ไม่ได้โทรมาคุยเสียง)', isPhishing: true },
    { id: 6, text: '✅ ข่าวสารจากเพจทางการที่มีเครื่องหมายติ๊กถูกสีฟ้า (Verified Badge)', isPhishing: false },
    { id: 7, text: '📱 แอปมือถือ: "แอปแต่งรูปฟรี แต่ขอสิทธิ์เข้าถึงรายชื่อผู้ติดต่อและ SMS ในเครื่อง"', isPhishing: true },
    { id: 8, text: '🔑 การตั้งรหัสผ่านแบบผสมตัวอักษรใหญ่ เล็ก ตัวเลข และสัญลักษณ์พิเศษ', isPhishing: false },
    { id: 9, text: '📧 Email แจ้งเตือนจากระบบ Google ว่ามีคนพยายามเข้าสู่ระบบบัญชีของคุณ', isPhishing: false },
    { id: 10, text: '🎁 โฆษณาป๊อปอัป "เครื่องคุณติดไวรัส! ดาวน์โหลดแอปนี้ด่วนเพื่อสแกนไวรัส"', isPhishing: true }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_TIME);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isWon, setIsWon] = useState(false);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | 'timeout' | null>(null);

  useEffect(() => {
    if (isGameOver || isWon || feedback !== null) return;
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          handleTimeout();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentIndex, isGameOver, isWon, feedback]);

  const handleTimeout = () => {
    setFeedback('timeout');
    setTimeout(() => {
      nextItem(false);
    }, 1000);
  };

  const handleChoice = (playerChoiceIsPhishing: boolean) => {
    if (feedback !== null) return;

    const currentItem = allItems[currentIndex];
    const isCorrect = currentItem.isPhishing === playerChoiceIsPhishing;

    if (isCorrect) {
      setFeedback('correct');
      setScore(s => s + 1);
    } else {
      setFeedback('wrong');
    }

    setTimeout(() => {
      nextItem(isCorrect);
    }, 1000);
  };

  const nextItem = (wasCorrect: boolean) => {
    setFeedback(null);
    if (currentIndex < allItems.length - 1) {
      setCurrentIndex(c => c + 1);
      setTimeLeft(GAME_TIME);
    } else {
      // End game
      setIsGameOver(true);
      const finalScore = score + (wasCorrect ? 1 : 0);
      if (finalScore >= PASSING_SCORE) {
        setIsWon(true);
        addScore(40);
        setTimeout(onComplete, 2000);
      }
    }
  };

  const resetGame = () => {
    setCurrentIndex(0);
    setScore(0);
    setTimeLeft(GAME_TIME);
    setIsGameOver(false);
    setIsWon(false);
    setFeedback(null);
  };

  if (isWon || (isGameOver && score >= PASSING_SCORE)) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h2 style={{ color: '#2ecc71', marginBottom: '1rem', fontSize: '2rem' }}>🎉 ยินดีด้วย นักสืบไซเบอร์!</h2>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>คุณสามารถแยกแยะภัยคุกคามได้อย่างยอดเยี่ยม ({score}/{allItems.length})</p>
      </div>
    );
  }

  if (isGameOver && score < PASSING_SCORE) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h2 style={{ color: '#ff4757', marginBottom: '1rem', fontSize: '2rem' }}>💀 ภารกิจล้มเหลว!</h2>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
          คุณทำคะแนนได้ {score}/{allItems.length} (ต้องการอย่างน้อย {PASSING_SCORE} คะแนน)
        </p>
        <button className="btn-primary" onClick={resetGame}>ลองใหม่อีกครั้ง</button>
      </div>
    );
  }

  const currentItem = allItems[currentIndex];

  return (
    <div className="glass-panel animate-fade-in" style={{ padding: '2rem', maxWidth: '700px', margin: '0 auto', position: 'relative' }}>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--accent-color)' }}>
          🔍 ข้อมูลที่ {currentIndex + 1}/{allItems.length}
        </div>
        <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: timeLeft <= 3 ? '#ff4757' : 'var(--text-color)', display: 'flex', alignItems: 'center', gap: '5px' }}>
          <Clock size={20} /> {timeLeft}s
        </div>
        <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#2ecc71' }}>
          คะแนน: {score}
        </div>
      </div>
      
      {/* Flash Card */}
      <div style={{ 
        background: feedback === 'correct' ? 'rgba(46, 204, 113, 0.2)' : feedback === 'wrong' || feedback === 'timeout' ? 'rgba(255, 71, 87, 0.2)' : 'rgba(255,255,255,0.05)', 
        padding: '3rem 2rem', 
        borderRadius: '16px',
        marginBottom: '2rem',
        border: feedback === 'correct' ? '2px solid #2ecc71' : feedback === 'wrong' || feedback === 'timeout' ? '2px solid #ff4757' : '2px solid rgba(255,255,255,0.1)',
        minHeight: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        transition: 'all 0.3s ease',
        transform: feedback !== null ? 'scale(1.05)' : 'scale(1)'
      }}>
        {feedback === 'correct' && <CheckCircle size={60} color="#2ecc71" style={{ position: 'absolute', opacity: 0.5 }} />}
        {feedback === 'wrong' && <AlertTriangle size={60} color="#ff4757" style={{ position: 'absolute', opacity: 0.5 }} />}
        {feedback === 'timeout' && <Clock size={60} color="#ff4757" style={{ position: 'absolute', opacity: 0.5 }} />}
        
        <h3 style={{ fontSize: '1.5rem', lineHeight: '1.6', textAlign: 'center', zIndex: 1, textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
          {currentItem.text}
        </h3>
      </div>

      <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '1rem' }}>วิเคราะห์ข้อมูลด้านบน เป็นเรื่องหลอกลวง (Phishing) หรือ ปลอดภัย (Safe) ?</p>

      {/* Action Buttons */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <button 
          className="btn-secondary"
          style={{ padding: '1.5rem', fontSize: '1.2rem', backgroundColor: 'rgba(255, 71, 87, 0.1)', borderColor: '#ff4757', color: '#ff4757', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}
          onClick={() => handleChoice(true)}
          disabled={feedback !== null}
        >
          <ShieldAlert size={24} /> หลอกลวง (Phishing)
        </button>
        <button 
          className="btn-secondary"
          style={{ padding: '1.5rem', fontSize: '1.2rem', backgroundColor: 'rgba(46, 204, 113, 0.1)', borderColor: '#2ecc71', color: '#2ecc71', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}
          onClick={() => handleChoice(false)}
          disabled={feedback !== null}
        >
          <Shield size={24} /> ปลอดภัย (Safe)
        </button>
      </div>
    </div>
  );
}
