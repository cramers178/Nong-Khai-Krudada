import { useState } from 'react';
import { useGame } from '../context/GameContext';

type Command = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';

interface SequenceGameProps {
  onComplete: () => void;
}

export default function SequenceGame({ onComplete }: SequenceGameProps) {
  const { addScore } = useGame();
  const [commands, setCommands] = useState<Command[]>([]);
  const [playerPos, setPlayerPos] = useState({ r: 4, c: 0 });
  const [isRunning, setIsRunning] = useState(false);
  const [isWon, setIsWon] = useState(false);

  // Target is Wat Kaeo Ku at top right
  const targetPos = { r: 0, c: 4 };
  const walls = [{ r: 1, c: 1 }, { r: 1, c: 2 }, { r: 2, c: 2 }, { r: 3, c: 4 }];

  const handleRun = () => {
    if (commands.length === 0 || isRunning) return;
    setIsRunning(true);
    setPlayerPos({ r: 4, c: 0 }); // Reset start

    let currentPos = { r: 4, c: 0 };
    let i = 0;

    const interval = setInterval(() => {
      if (i >= commands.length) {
        clearInterval(interval);
        setIsRunning(false);
        if (currentPos.r === targetPos.r && currentPos.c === targetPos.c) {
          setIsWon(true);
          addScore(20);
          setTimeout(onComplete, 1500);
        } else {
          alert('ยังไปไม่ถึงวัดแก้วกู่! ลองวางแผนใหม่นะ');
        }
        return;
      }

      const cmd = commands[i];
      const nextPos = { ...currentPos };

      if (cmd === 'UP') nextPos.r -= 1;
      if (cmd === 'DOWN') nextPos.r += 1;
      if (cmd === 'LEFT') nextPos.c -= 1;
      if (cmd === 'RIGHT') nextPos.c += 1;

      // Check bounds
      if (nextPos.r < 0 || nextPos.r > 4 || nextPos.c < 0 || nextPos.c > 4) {
        clearInterval(interval);
        setIsRunning(false);
        alert('ชนขอบกระดาน! ลองใหม่นะ');
        return;
      }

      // Check walls
      if (walls.some(w => w.r === nextPos.r && w.c === nextPos.c)) {
        clearInterval(interval);
        setIsRunning(false);
        alert('ชนกำแพง! ลองใหม่นะ');
        return;
      }

      currentPos = nextPos;
      setPlayerPos({ ...currentPos });
      i++;
    }, 400);
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
              const isWall = walls.some(w => w.r === r && w.c === c);
              
              let bg = '#1a1c29';
              if (isWall) bg = '#333';
              if (isTarget) bg = 'rgba(255, 215, 0, 0.1)';
              
              return (
                <div 
                  key={`${r}-${c}`}
                  style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: bg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                  }}
                >
                  {isPlayer ? '🧑‍🚀' : (isTarget ? '🛕' : (isWall ? '🌲' : ''))}
                </div>
              );
            })
          )}
        </div>
        {isWon && <div style={{ color: '#2ecc71', fontWeight: 'bold', marginTop: '1rem', textAlign: 'center' }}>🎉 เดินทางถึงวัดแก้วกู่สำเร็จ!</div>}
      </div>

      {/* Controls */}
      <div style={{ minWidth: '200px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <p style={{ color: 'var(--text-muted)' }}>เรียงลำดับคำสั่งเพื่อเดินทางไปวัดแก้วกู่</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
          <button className="btn-secondary" onClick={() => addCommand('UP')} disabled={isRunning}>⬆️ เดินขึ้น</button>
          <button className="btn-secondary" onClick={() => addCommand('DOWN')} disabled={isRunning}>⬇️ เดินลง</button>
          <button className="btn-secondary" onClick={() => addCommand('LEFT')} disabled={isRunning}>⬅️ ไปซ้าย</button>
          <button className="btn-secondary" onClick={() => addCommand('RIGHT')} disabled={isRunning}>➡️ ไปขวา</button>
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
