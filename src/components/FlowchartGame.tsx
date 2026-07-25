import { useState } from 'react';
import { useGame } from '../context/GameContext';
import { Heart } from 'lucide-react';

interface FlowchartGameProps {
  onComplete: () => void;
}

export default function FlowchartGame({ onComplete }: FlowchartGameProps) {
  const { addScore } = useGame();
  
  // Available blocks to choose from (with some fakes)
  const availableBlocks = [
    { id: 'end', text: 'ถึงจุดหมาย (End)', shape: 'pill' },
    { id: 'fake1', text: 'เดินกลับบ้าน', shape: 'rect' },
    { id: 'cond', text: 'พลังงานน้อยกว่า 30% ?', shape: 'diamond' },
    { id: 'start', text: 'เริ่มการเดินทาง (Start)', shape: 'pill' },
    { id: 'rest', text: 'แวะพักกินข้าว', shape: 'rect' },
    { id: 'fake2', text: 'เล่นเกมมือถือ', shape: 'rect' },
    { id: 'walk', text: 'เดินทางต่อ', shape: 'rect' }
  ];

  // Correct order
  // slot 0: start
  // slot 1: cond
  // slot 2: yes (rest)
  // slot 3: no (walk)
  // slot 4: end
  const correctOrder = ['start', 'cond', 'rest', 'walk', 'end'];

  const [sequence, setSequence] = useState<(string | null)[]>([null, null, null, null, null]);
  const [isWon, setIsWon] = useState(false);
  const [selectedAvailable, setSelectedAvailable] = useState<number | null>(null);
  const [hp, setHp] = useState(3);
  const [isLost, setIsLost] = useState(false);
  
  const handleSlotClick = (index: number) => {
    if (isWon || isLost) return;

    if (selectedAvailable !== null) {
      // Place block in slot
      const newSeq = [...sequence];
      newSeq[index] = availableBlocks[selectedAvailable].id;
      setSequence(newSeq);
      setSelectedAvailable(null);
    } else if (sequence[index] !== null) {
      // Remove block from slot
      const newSeq = [...sequence];
      newSeq[index] = null;
      setSequence(newSeq);
    }
  };

  const handleAvailableClick = (index: number) => {
    if (isWon || isLost) return;
    setSelectedAvailable(index === selectedAvailable ? null : index);
  };

  const checkAnswer = () => {
    if (sequence.includes(null)) {
      alert('กรุณาเติมสัญลักษณ์ให้ครบทุกช่อง');
      return;
    }
    
    const isMatch = sequence.every((id, idx) => id === correctOrder[idx]);
    if (isMatch) {
      setIsWon(true);
      addScore(30);
      setTimeout(onComplete, 1500);
    } else {
      const newHp = hp - 1;
      setHp(newHp);
      if (newHp <= 0) {
        setIsLost(true);
      } else {
        alert('ผังงานยังไม่ถูกต้อง! ลองพิจารณาเงื่อนไขและการกระทำใหม่นะ');
      }
    }
  };

  const resetGame = () => {
    setSequence([null, null, null, null, null]);
    setSelectedAvailable(null);
    setHp(3);
    setIsLost(false);
  };

  const getShapeStyle = (shape: string) => {
    switch(shape) {
      case 'pill': return { borderRadius: '25px', backgroundColor: '#e74c3c' };
      case 'diamond': return { transform: 'skewX(-20deg)', backgroundColor: '#f1c40f', color: '#000' };
      case 'rect': return { borderRadius: '4px', backgroundColor: '#3498db' };
      default: return {};
    }
  };

  const renderSlot = (idx: number) => {
    const blockId = sequence[idx];
    const block = availableBlocks.find(b => b.id === blockId);
    return (
      <div 
        onClick={() => handleSlotClick(idx)}
        style={{
          width: '180px',
          height: '60px',
          border: block ? 'none' : '2px dashed rgba(255,255,255,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          backgroundColor: block ? 'transparent' : 'rgba(0,0,0,0.2)',
          borderRadius: block ? '0' : '8px',
          ...getShapeStyle(block?.shape || ''),
          transition: 'all 0.2s',
          position: 'relative'
        }}
      >
        <span style={{ transform: block?.shape === 'diamond' ? 'skewX(20deg)' : 'none', fontWeight: 'bold' }}>
          {block ? block.text : `วางบล็อก ${idx+1}`}
        </span>
      </div>
    );
  };

  return (
    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
      
      {/* Target Flowchart */}
      <div className="glass-panel" style={{ padding: '2rem', flex: 1, minWidth: '450px', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
        
        {/* HP Display */}
        <div style={{ position: 'absolute', top: '1rem', right: '1rem', display: 'flex', gap: '5px' }}>
          {Array.from({length: 3}).map((_, i) => (
            <Heart key={i} fill={i < hp ? '#ff4757' : 'transparent'} color={i < hp ? '#ff4757' : '#555'} size={24} />
          ))}
        </div>

        <h3 style={{ marginBottom: '1rem', color: 'var(--primary-color)' }}>สร้างผังงานการเดินทาง</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', textAlign: 'center' }}>โจทย์: ถ้าพลังงานน้อยกว่า 30% ให้แวะพักกินข้าว ถ้าไม่ใช่นั้นให้เดินทางต่อ</p>
        
        {/* Flowchart Layout */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
          {/* 1. Start */}
          {renderSlot(0)}
          <div style={{ height: '30px', width: '2px', background: 'white', position: 'relative' }}>
            <div style={{ position: 'absolute', bottom: -5, left: -4, borderLeft: '5px solid transparent', borderRight: '5px solid transparent', borderTop: '8px solid white' }} />
          </div>

          {/* 2. Condition */}
          {renderSlot(1)}

          {/* Branching */}
          <div style={{ display: 'flex', width: '300px', justifyContent: 'space-between', position: 'relative', marginTop: '30px' }}>
            
            {/* Horizontal connection line from bottom of cond */}
            <div style={{ position: 'absolute', top: '-30px', left: '50%', width: '2px', height: '15px', background: 'white' }} />
            <div style={{ position: 'absolute', top: '-15px', left: '20%', width: '60%', height: '2px', background: 'white' }} />
            
            {/* Left Branch (YES) */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '40%' }}>
              <div style={{ height: '15px', width: '2px', background: 'white', position: 'relative' }}>
                 <div style={{ position: 'absolute', bottom: -5, left: -4, borderLeft: '5px solid transparent', borderRight: '5px solid transparent', borderTop: '8px solid white' }} />
              </div>
              <span style={{ color: '#2ecc71', fontWeight: 'bold', marginBottom: '10px' }}>ใช่ (Yes)</span>
              {renderSlot(2)}
            </div>

            {/* Right Branch (NO) */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '40%' }}>
              <div style={{ height: '15px', width: '2px', background: 'white', position: 'relative' }}>
                 <div style={{ position: 'absolute', bottom: -5, left: -4, borderLeft: '5px solid transparent', borderRight: '5px solid transparent', borderTop: '8px solid white' }} />
              </div>
              <span style={{ color: '#e74c3c', fontWeight: 'bold', marginBottom: '10px' }}>ไม่ใช่ (No)</span>
              {renderSlot(3)}
            </div>
          </div>

          {/* Connect branches to end */}
          <div style={{ display: 'flex', width: '300px', justifyContent: 'space-between', position: 'relative', marginTop: '10px' }}>
            {/* Left Leg */}
            <div style={{ width: '40%', height: '30px', borderRight: '2px solid white', borderBottom: '2px solid white' }} />
            {/* Right Leg */}
            <div style={{ width: '40%', height: '30px', borderLeft: '2px solid white', borderBottom: '2px solid white' }} />
            {/* Center Down Arrow */}
            <div style={{ position: 'absolute', top: '30px', left: '50%', width: '2px', height: '15px', background: 'white' }}>
               <div style={{ position: 'absolute', bottom: -5, left: -4, borderLeft: '5px solid transparent', borderRight: '5px solid transparent', borderTop: '8px solid white' }} />
            </div>
          </div>

          <div style={{ height: '45px' }} />

          {/* 5. End */}
          {renderSlot(4)}
        </div>
        
        {isWon && <div style={{ marginTop: '2rem', color: '#2ecc71', fontWeight: 'bold', fontSize: '1.5rem' }}>🎉 เรียงผังงานถูกต้องสมบูรณ์!</div>}
        
        {isLost && (
          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <div style={{ color: '#ff4757', fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '1rem' }}>💀 พลังชีวิตหมดแล้ว!</div>
            <button className="btn-primary" onClick={resetGame}>เริ่มพยายามใหม่</button>
          </div>
        )}

        {!isWon && !isLost && <button className="btn-primary" style={{ marginTop: '2rem', padding: '10px 30px' }} onClick={checkAnswer}>ตรวจสอบผังงาน</button>}
      </div>

      {/* Available Blocks */}
      <div style={{ flex: 1, minWidth: '300px' }}>
        <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
          👉 1. คลิกเลือกสัญลักษณ์ด้านล่าง<br/>
          👉 2. คลิกที่ช่องว่างซ้ายมือเพื่อวางสัญลักษณ์
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {availableBlocks.map((block, idx) => {
            const isUsed = sequence.includes(block.id);
            return (
              <div 
                key={block.id}
                onClick={() => !isUsed && handleAvailableClick(idx)}
                style={{
                  width: '180px',
                  height: '50px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: isUsed ? 'not-allowed' : 'pointer',
                  opacity: isUsed ? 0.3 : 1,
                  border: selectedAvailable === idx ? '3px solid #fff' : 'none',
                  ...getShapeStyle(block.shape),
                  boxShadow: selectedAvailable === idx ? '0 0 15px rgba(255,255,255,0.5)' : 'none',
                  transition: 'all 0.2s'
                }}
              >
                <span style={{ transform: block.shape === 'diamond' ? 'skewX(20deg)' : 'none', fontWeight: 'bold' }}>
                  {block.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
