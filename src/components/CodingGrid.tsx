import { useState, useEffect } from 'react';

type Command = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';

interface CodingGridProps {
  onComplete: () => void;
}

export default function CodingGrid({ onComplete }: CodingGridProps) {
  const [commands, setCommands] = useState<Command[]>([]);
  const [playerPos, setPlayerPos] = useState({ r: 4, c: 0 });
  const [isRunning, setIsRunning] = useState(false);
  const [isWon, setIsWon] = useState(false);

  const targetPos = { r: 0, c: 4 };

  const handleRun = () => {
    if (commands.length === 0 || isRunning) return;
    setIsRunning(true);
    setPlayerPos({ r: 4, c: 0 }); // Reset position before run

    let currentPos = { r: 4, c: 0 };
    let i = 0;

    const interval = setInterval(() => {
      if (i >= commands.length) {
        clearInterval(interval);
        setIsRunning(false);
        if (currentPos.r === targetPos.r && currentPos.c === targetPos.c) {
          setIsWon(true);
          setTimeout(onComplete, 1500);
        }
        return;
      }

      const cmd = commands[i];
      if (cmd === 'UP' && currentPos.r > 0) currentPos.r -= 1;
      if (cmd === 'DOWN' && currentPos.r < 4) currentPos.r += 1;
      if (cmd === 'LEFT' && currentPos.c > 0) currentPos.c -= 1;
      if (cmd === 'RIGHT' && currentPos.c < 4) currentPos.c += 1;

      setPlayerPos({ ...currentPos });
      i++;
    }, 500);
  };

  const addCommand = (cmd: Command) => {
    if (!isRunning && !isWon) setCommands([...commands, cmd]);
  };

  const clearCommands = () => {
    if (!isRunning && !isWon) {
      setCommands([]);
      setPlayerPos({ r: 4, c: 0 });
    }
  };

  return (
    <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
      {/* Game Board */}
      <div>
        <div style={{ 
          display: 'inline-grid', 
          gridTemplateColumns: `repeat(5, 50px)`, 
          gap: '2px',
          backgroundColor: 'var(--border-color)',
          padding: '2px',
          borderRadius: '8px'
        }}>
          {Array.from({ length: 5 }).map((_, r) => 
            Array.from({ length: 5 }).map((_, c) => {
              const isPlayer = playerPos.r === r && playerPos.c === c;
              const isTarget = targetPos.r === r && targetPos.c === c;
              
              return (
                <div 
                  key={`${r}-${c}`}
                  style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: '#1a1c29',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                  }}
                >
                  {isPlayer ? '🧑‍🚀' : (isTarget ? '🔑' : '')}
                </div>
              );
            })
          )}
        </div>
        {isWon && <div style={{ color: '#2ecc71', fontWeight: 'bold', marginTop: '1rem' }}>🎉 เก็บกุญแจสำเร็จ!</div>}
      </div>

      {/* Controls */}
      <div style={{ minWidth: '200px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <p style={{ color: 'var(--text-muted)' }}>เพิ่มคำสั่งเพื่อเดินไปเก็บกุญแจ</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
          <button className="btn-secondary" onClick={() => addCommand('UP')} disabled={isRunning}>⬆️ เดินขึ้น</button>
          <button className="btn-secondary" onClick={() => addCommand('DOWN')} disabled={isRunning}>⬇️ เดินลง</button>
          <button className="btn-secondary" onClick={() => addCommand('LEFT')} disabled={isRunning}>⬅️ เลี้ยวซ้าย</button>
          <button className="btn-secondary" onClick={() => addCommand('RIGHT')} disabled={isRunning}>➡️ เลี้ยวขวา</button>
        </div>

        <div style={{ 
          backgroundColor: 'rgba(0,0,0,0.3)', 
          padding: '1rem', 
          borderRadius: '8px',
          minHeight: '100px',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.2rem'
        }}>
          {commands.length === 0 ? <span style={{ color: 'var(--text-muted)' }}>ยังไม่มีคำสั่ง...</span> : 
            commands.map((c, i) => (
              <span key={i} style={{ background: 'rgba(255,255,255,0.1)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                {i+1}. {c}
              </span>
            ))
          }
        </div>

        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button className="btn-primary" onClick={handleRun} disabled={isRunning || commands.length === 0} style={{ flex: 1 }}>▶️ รันโค้ด</button>
          <button className="btn-secondary" onClick={clearCommands} disabled={isRunning}>ลบคำสั่ง</button>
        </div>
      </div>
    </div>
  );
}
