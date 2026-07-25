import { useState } from 'react';
import { useGame } from '../context/GameContext';

interface CyberDetectiveProps {
  onComplete: () => void;
}

export default function CyberDetective({ onComplete }: CyberDetectiveProps) {
  const { addScore } = useGame();
  const [currentScenario, setCurrentScenario] = useState(0);
  const [isWon, setIsWon] = useState(false);

  const scenarios = [
    {
      id: 1,
      title: 'ข้อความปริศนา',
      message: '📱 SMS: "ยินดีด้วย! คุณได้รับรางวัล iPhone 15 ฟรี! คลิกที่นี่เพื่อยืนยันสิทธิ์: http://free-prize.scam"',
      correctChoice: 1, // index of choices
      choices: [
        'คลิกเปิดทันที เพราะอยากได้รางวัล',
        'ตรวจสอบความน่าเชื่อถือก่อนและไม่คลิก',
        'ส่งต่อให้เพื่อนทุกคนเพื่อรับรางวัลด้วยกัน'
      ]
    },
    {
      id: 2,
      title: 'การตั้งรหัสผ่าน',
      message: 'คุณกำลังสมัครสมาชิกเว็บไซต์เกมออนไลน์ใหม่ ระบบให้ตั้งรหัสผ่าน',
      correctChoice: 2,
      choices: [
        'ใช้เบอร์โทรศัพท์ เพราะจำง่าย',
        'ใช้ชื่อตัวเอง + 1234',
        'ใช้อักษรพิมพ์เล็ก พิมพ์ใหญ่ ตัวเลข และสัญลักษณ์ผสมกัน'
      ]
    },
    {
      id: 3,
      title: 'ข่าวสารบนโซเชียล',
      message: 'เพื่อนแชร์โพสต์ว่า "กินน้ำมะนาวผสมเกลือ รักษาทุกโรคได้หายขาด 100%!"',
      correctChoice: 0,
      choices: [
        'ค้นหาข้อมูลจากแหล่งที่เชื่อถือได้ก่อนเชื่อ',
        'เชื่อและทำตามทันทีเพราะเพื่อนแชร์มา',
        'แชร์ต่อให้คนอื่นรู้เยอะๆ'
      ]
    }
  ];

  const handleChoice = (index: number) => {
    if (index === scenarios[currentScenario].correctChoice) {
      if (currentScenario < scenarios.length - 1) {
        addScore(5);
        setCurrentScenario(currentScenario + 1);
      } else {
        addScore(10);
        setIsWon(true);
        setTimeout(onComplete, 1500);
      }
    } else {
      alert('❌ การตัดสินใจนี้อาจทำให้คุณตกอยู่ในอันตราย ลองคิดดูใหม่นะ!');
    }
  };

  if (isWon) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h2 style={{ color: '#2ecc71', marginBottom: '1rem' }}>🎉 ยินดีด้วย นักสืบไซเบอร์!</h2>
        <p>คุณรู้วิธีป้องกันตัวเองจากภัยคุกคามทางไซเบอร์แล้ว</p>
      </div>
    );
  }

  const scenario = scenarios[currentScenario];

  return (
    <div className="glass-panel animate-fade-in" style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h3 style={{ color: 'var(--primary-color)', textAlign: 'center', marginBottom: '1rem' }}>
        ด่านที่ {currentScenario + 1}/{scenarios.length}: {scenario.title}
      </h3>
      
      <div style={{ 
        background: 'rgba(255,255,255,0.1)', 
        padding: '2rem', 
        borderRadius: '8px',
        marginBottom: '2rem',
        borderLeft: '4px solid var(--accent-color)'
      }}>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>{scenario.message}</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {scenario.choices.map((choice, index) => (
          <button 
            key={index}
            className="btn-secondary"
            style={{ padding: '1rem', textAlign: 'left' }}
            onClick={() => handleChoice(index)}
          >
            {choice}
          </button>
        ))}
      </div>
    </div>
  );
}
