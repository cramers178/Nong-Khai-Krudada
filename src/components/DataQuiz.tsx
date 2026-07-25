import { useState, useEffect } from 'react';
import { useGame } from '../context/GameContext';

interface DataQuizProps {
  onComplete: () => void;
}

export default function DataQuiz({ onComplete }: DataQuizProps) {
  const { addScore } = useGame();
  
  const [data, setData] = useState({ naga: 0, wat: 0, pha: 0 });
  const [answers, setAnswers] = useState({ q1: '', q2: '', q3: '' });
  const [isWon, setIsWon] = useState(false);
  const [isLost, setIsLost] = useState(false);
  const [timeLeft, setTimeLeft] = useState(45);

  useEffect(() => {
    generateRandomData();
  }, []);

  useEffect(() => {
    if (isWon || isLost) return;
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setIsLost(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isWon, isLost]);

  const generateRandomData = () => {
    let n = Math.floor(Math.random() * 800) + 100;
    let w = Math.floor(Math.random() * 800) + 100;
    let p = Math.floor(Math.random() * 800) + 100;
    
    // Ensure uniqueness
    while (w === n) w = Math.floor(Math.random() * 800) + 100;
    while (p === n || p === w) p = Math.floor(Math.random() * 800) + 100;

    setData({ naga: n, wat: w, pha: p });
    setAnswers({ q1: '', q2: '', q3: '' });
    setTimeLeft(45);
    setIsLost(false);
  };

  const getCorrectAnswers = () => {
    const arr = [
      { name: 'พญานาค', val: data.naga },
      { name: 'วัดแก้วกู่', val: data.wat },
      { name: 'ผาตากเสื้อ', val: data.pha },
    ];
    
    arr.sort((a, b) => b.val - a.val); // Descending
    
    const highest = arr[0].name;
    const lowest = arr[2].name;
    const total = data.naga + data.wat + data.pha;

    return { highest, lowest, total: total.toString() };
  };

  const checkAnswers = () => {
    const correct = getCorrectAnswers();
    if (answers.q1 === correct.highest && answers.q2 === correct.lowest && answers.q3 === correct.total) {
      setIsWon(true);
      addScore(30);
      setTimeout(onComplete, 1500);
    } else {
      alert('คำตอบยังไม่ถูกต้อง ลองคำนวณและวิเคราะห์ข้อมูลจากกราฟดูอีกครั้งนะครับ');
    }
  };

  const maxVal = Math.max(data.naga, data.wat, data.pha, 1000); // 1000 as base scale

  return (
    <div className="glass-panel" style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto', position: 'relative' }}>
      <div style={{ position: 'absolute', top: '1.5rem', right: '2rem', fontSize: '1.5rem', fontWeight: 'bold', color: timeLeft <= 10 ? '#ff4757' : 'var(--text-color)' }}>
        ⏱️ {timeLeft}s
      </div>

      <h3 style={{ color: 'var(--primary-color)', textAlign: 'center', marginBottom: '2rem' }}>แดชบอร์ดนักท่องเที่ยว (Real-time)</h3>
      
      {/* Animated Bar Chart */}
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: '2rem', height: '250px', marginBottom: '3rem', borderBottom: '2px solid rgba(255,255,255,0.2)', paddingBottom: '1rem' }}>
        
        {/* Naga Bar */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', width: '80px' }}>
          <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--accent-color)' }}>{data.naga}</div>
          <div style={{ 
            width: '100%', 
            height: `${(data.naga / maxVal) * 200}px`, 
            backgroundColor: '#3498db',
            borderRadius: '4px 4px 0 0',
            transition: 'height 1s ease-in-out'
          }} />
          <div style={{ fontSize: '1.5rem' }}>🐉</div>
          <div style={{ fontSize: '0.8rem' }}>พญานาค</div>
        </div>

        {/* Wat Bar */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', width: '80px' }}>
          <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--accent-color)' }}>{data.wat}</div>
          <div style={{ 
            width: '100%', 
            height: `${(data.wat / maxVal) * 200}px`, 
            backgroundColor: '#e74c3c',
            borderRadius: '4px 4px 0 0',
            transition: 'height 1s ease-in-out'
          }} />
          <div style={{ fontSize: '1.5rem' }}>🛕</div>
          <div style={{ fontSize: '0.8rem' }}>วัดแก้วกู่</div>
        </div>

        {/* Pha Bar */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', width: '80px' }}>
          <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--accent-color)' }}>{data.pha}</div>
          <div style={{ 
            width: '100%', 
            height: `${(data.pha / maxVal) * 200}px`, 
            backgroundColor: '#f1c40f',
            borderRadius: '4px 4px 0 0',
            transition: 'height 1s ease-in-out'
          }} />
          <div style={{ fontSize: '1.5rem' }}>🌄</div>
          <div style={{ fontSize: '0.8rem' }}>ผาตากเสื้อ</div>
        </div>

      </div>

      {/* Questions */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>1. สถานที่ใดมีนักท่องเที่ยว <span style={{ color: '#2ecc71', fontWeight: 'bold' }}>มากที่สุด</span> ?</label>
          <select 
            className="input-field"
            value={answers.q1} 
            onChange={(e) => setAnswers({...answers, q1: e.target.value})}
            style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', background: 'rgba(0,0,0,0.5)', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}
            disabled={isLost || isWon}
          >
            <option value="">-- เลือกคำตอบ --</option>
            <option value="พญานาค">พญานาค</option>
            <option value="วัดแก้วกู่">วัดแก้วกู่</option>
            <option value="ผาตากเสื้อ">ผาตากเสื้อ</option>
          </select>
        </div>
        
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>2. สถานที่ใดมีนักท่องเที่ยว <span style={{ color: '#ff4757', fontWeight: 'bold' }}>น้อยที่สุด</span> ?</label>
          <select 
            className="input-field"
            value={answers.q2} 
            onChange={(e) => setAnswers({...answers, q2: e.target.value})}
            style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', background: 'rgba(0,0,0,0.5)', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}
            disabled={isLost || isWon}
          >
            <option value="">-- เลือกคำตอบ --</option>
            <option value="พญานาค">พญานาค</option>
            <option value="วัดแก้วกู่">วัดแก้วกู่</option>
            <option value="ผาตากเสื้อ">ผาตากเสื้อ</option>
          </select>
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>3. นำข้อมูลทั้ง 3 สถานที่มาประมวลผล รวมนักท่องเที่ยวทั้งหมดกี่คน?</label>
          <input 
            type="number" 
            placeholder="ใส่ตัวเลขรวม"
            value={answers.q3}
            onChange={(e) => setAnswers({...answers, q3: e.target.value})}
            style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', background: 'rgba(0,0,0,0.5)', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}
            disabled={isLost || isWon}
          />
        </div>

        {isWon && <div style={{ color: '#2ecc71', fontWeight: 'bold', textAlign: 'center', fontSize: '1.2rem' }}>🎉 วิเคราะห์ข้อมูลถูกต้อง! ยอดเยี่ยมมาก</div>}
        
        {isLost && (
          <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            <div style={{ color: '#ff4757', fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '1rem' }}>💀 หมดเวลา! ข้อมูลมีการอัปเดตใหม่แล้ว</div>
            <button className="btn-primary" onClick={generateRandomData}>ดึงข้อมูลใหม่</button>
          </div>
        )}

        {!isWon && !isLost && <button className="btn-primary" onClick={checkAnswers}>ส่งผลการวิเคราะห์</button>}
      </div>
    </div>
  );
}
