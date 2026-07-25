import { useState } from 'react';
import { useGame } from '../context/GameContext';

interface DataQuizProps {
  onComplete: () => void;
}

export default function DataQuiz({ onComplete }: DataQuizProps) {
  const { addScore } = useGame();
  const [answers, setAnswers] = useState({ q1: '', q2: '', q3: '' });
  const [isWon, setIsWon] = useState(false);

  const checkAnswers = () => {
    if (answers.q1 === 'ผาตากเสื้อ' && answers.q2 === 'วัดแก้วกู่' && answers.q3 === '1020') {
      setIsWon(true);
      addScore(20);
      setTimeout(onComplete, 1500);
    } else {
      alert('คำตอบยังไม่ถูกต้อง ลองตรวจสอบข้อมูลดูอีกครั้งนะครับ');
    }
  };

  return (
    <div className="glass-panel" style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h3 style={{ color: 'var(--primary-color)', textAlign: 'center', marginBottom: '2rem' }}>กระดานข้อมูลนักท่องเที่ยว</h3>
      
      {/* Dashboard Data */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
        <div style={{ background: 'rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ fontSize: '2rem' }}>🐉</div>
          <div style={{ fontWeight: 'bold' }}>พญานาค</div>
          <div style={{ fontSize: '1.5rem', color: 'var(--accent-color)' }}>350 <span style={{fontSize:'1rem', color:'#aaa'}}>คน</span></div>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ fontSize: '2rem' }}>🛕</div>
          <div style={{ fontWeight: 'bold' }}>วัดแก้วกู่</div>
          <div style={{ fontSize: '1.5rem', color: 'var(--accent-color)' }}>250 <span style={{fontSize:'1rem', color:'#aaa'}}>คน</span></div>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ fontSize: '2rem' }}>🌄</div>
          <div style={{ fontWeight: 'bold' }}>ผาตากเสื้อ</div>
          <div style={{ fontSize: '1.5rem', color: 'var(--accent-color)' }}>420 <span style={{fontSize:'1rem', color:'#aaa'}}>คน</span></div>
        </div>
      </div>

      {/* Questions */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>1. สถานที่ใดมีนักท่องเที่ยวมากที่สุด?</label>
          <select 
            className="input-field"
            value={answers.q1} 
            onChange={(e) => setAnswers({...answers, q1: e.target.value})}
            style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', background: 'rgba(0,0,0,0.5)', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}
          >
            <option value="">-- เลือกคำตอบ --</option>
            <option value="พญานาค">พญานาค</option>
            <option value="วัดแก้วกู่">วัดแก้วกู่</option>
            <option value="ผาตากเสื้อ">ผาตากเสื้อ</option>
          </select>
        </div>
        
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>2. สถานที่ใดมีนักท่องเที่ยวน้อยที่สุด?</label>
          <select 
            className="input-field"
            value={answers.q2} 
            onChange={(e) => setAnswers({...answers, q2: e.target.value})}
            style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', background: 'rgba(0,0,0,0.5)', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}
          >
            <option value="">-- เลือกคำตอบ --</option>
            <option value="พญานาค">พญานาค</option>
            <option value="วัดแก้วกู่">วัดแก้วกู่</option>
            <option value="ผาตากเสื้อ">ผาตากเสื้อ</option>
          </select>
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>3. รวมนักท่องเที่ยวทั้งหมดกี่คน?</label>
          <input 
            type="number" 
            placeholder="ใส่ตัวเลข"
            value={answers.q3}
            onChange={(e) => setAnswers({...answers, q3: e.target.value})}
            style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', background: 'rgba(0,0,0,0.5)', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}
          />
        </div>

        {isWon && <div style={{ color: '#2ecc71', fontWeight: 'bold', textAlign: 'center' }}>🎉 วิเคราะห์ข้อมูลถูกต้อง!</div>}
        {!isWon && <button className="btn-primary" onClick={checkAnswers}>ส่งคำตอบ</button>}
      </div>
    </div>
  );
}
