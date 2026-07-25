import { useState } from 'react';
import { useGame } from '../context/GameContext';

interface FlowchartGameProps {
  onComplete: () => void;
}

export default function FlowchartGame({ onComplete }: FlowchartGameProps) {
  const { addScore } = useGame();
  
  // Available blocks to choose from
  const availableBlocks = [
    { id: 'end', text: 'End (จบ)', shape: 'pill' },
    { id: 'cond', text: 'เจอแผนที่ ?', shape: 'diamond' },
    { id: 'start', text: 'Start (เริ่ม)', shape: 'pill' },
    { id: 'yes', text: 'ใช่', shape: 'rect' },
    { id: 'act2', text: 'ไปด่านต่อไป', shape: 'rect' },
    { id: 'act1', text: 'เดินหาแผนที่', shape: 'rect' }
  ];

  // Correct order
  const correctOrder = ['start', 'act1', 'cond', 'yes', 'act2', 'end'];

  const [sequence, setSequence] = useState<(string | null)[]>([null, null, null, null, null, null]);
  const [isWon, setIsWon] = useState(false);
  const [selectedAvailable, setSelectedAvailable] = useState<number | null>(null);
  
  const handleSlotClick = (index: number) => {
    if (isWon) return;

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
    if (isWon) return;
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
      addScore(20);
      setTimeout(onComplete, 1500);
    } else {
      alert('ยังมีบางขั้นตอนสลับกันอยู่ ลองจัดเรียงใหม่นะ');
    }
  };

  const getShapeStyle = (shape: string) => {
    switch(shape) {
      case 'pill': return { borderRadius: '25px', backgroundColor: '#e74c3c' };
      case 'diamond': return { transform: 'skewX(-20deg)', backgroundColor: '#f1c40f', color: '#000' };
      case 'rect': return { borderRadius: '4px', backgroundColor: '#3498db' };
      default: return {};
    }
  };

  return (
    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
      
      {/* Target Flowchart */}
      <div className="glass-panel" style={{ padding: '2rem', flex: 1, minWidth: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h3 style={{ marginBottom: '1rem', color: 'var(--primary-color)' }}>ผังงาน (Flowchart)</h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
          {sequence.map((blockId, idx) => {
            const block = availableBlocks.find(b => b.id === blockId);
            return (
              <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div 
                  onClick={() => handleSlotClick(idx)}
                  style={{
                    width: '180px',
                    height: '50px',
                    border: block ? 'none' : '2px dashed rgba(255,255,255,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    ...getShapeStyle(block?.shape || ''),
                    transition: 'all 0.2s'
                  }}
                >
                  <span style={{ transform: block?.shape === 'diamond' ? 'skewX(20deg)' : 'none' }}>
                    {block ? block.text : 'คลิกเพื่อวาง'}
                  </span>
                </div>
                {idx < sequence.length - 1 && <div style={{ fontSize: '1.5rem', color: 'rgba(255,255,255,0.5)' }}>↓</div>}
              </div>
            );
          })}
        </div>
        
        {isWon && <div style={{ marginTop: '1rem', color: '#2ecc71', fontWeight: 'bold' }}>🎉 ถูกต้อง!</div>}
        {!isWon && <button className="btn-primary" style={{ marginTop: '2rem' }} onClick={checkAnswer}>ตรวจสอบผังงาน</button>}
      </div>

      {/* Available Blocks */}
      <div style={{ flex: 1, minWidth: '300px' }}>
        <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
          คลิกเลือกสัญลักษณ์ด้านล่าง แล้วคลิกที่ช่องว่างซ้ายมือเพื่อวางสัญลักษณ์
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
                  ...getShapeStyle(block.shape)
                }}
              >
                <span style={{ transform: block.shape === 'diamond' ? 'skewX(20deg)' : 'none' }}>
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
