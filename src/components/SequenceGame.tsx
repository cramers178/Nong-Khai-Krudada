import { useState } from 'react';
import { useGame } from '../context/GameContext';

type Command = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';

interface SequenceGameProps {
  onComplete: () => void;
}

const MAX_COMMANDS = 12;

export default function SequenceGame({ onComplete }: SequenceGameProps) {
  const { addScore } = useGame();
  const [commands, setCommands] = useState<Command[]>([]);
  const [playerPos, setPlayerPos] = useState({ r: 5, c: 0 });
  
  // Guard initial state
  const initialGuards = [
    { id: 1, r: 4, c: 3, dir: -1, minR: 1, maxR: 4 }, // patrols vertically
    { id: 2, r: 1, c: 1, dir: 1, minC: 1, maxC: 4, isHorizontal: true } // patrols horizontally
  ];
  const [guards, setGuards] = useState(initialGuards);
  
  const [isRunning, setIsRunning] = useState(false);
  const [isWon, setIsWon] = useState(false);

  // Target is Wat Kaeo Ku at top right of 6x6 grid
  const targetPos = { r: 0, c: 5 };
  const walls = [{ r: 1, c: 2 }, { r: 2, c: 2 }, { r: 3, c: 4 }, { r: 4, c: 4 }, { r: 3, c: 0 }];

  const handleRun = () => {
    if (commands.length === 0 || isRunning) return;
    setIsRunning(true);
    setPlayerPos({ r: 5, c: 0 }); // Reset start
    setGuards(initialGuards); // Reset guards

    let currentPos = { r: 5, c: 0 };
    let currentGuards = [...initialGuards];
    let i = 0;

    const interval = setInterval(() => {
      // 1. Check win condition first if out of commands
      if (i >= commands.length) {
        clearInterval(interval);
        setIsRunning(false);
        if (currentPos.r === targetPos.r && currentPos.c === targetPos.c) {
          setIsWon(true);
          addScore(20);
          setTimeout(onComplete, 1500);
        } else {
          alert('ยังไปไม่ถึงวัดแก้วกู่! หรือคำสั่งไม่พอ ลองวางแผนใหม่นะ');
        }
        return;
      }

      // 2. Compute Next Player Pos
      const cmd = commands[i];
      const nextPos = { ...currentPos };

      if (cmd === 'UP') nextPos.r -= 1;
      if (cmd === 'DOWN') nextPos.r += 1;
      if (cmd === 'LEFT') nextPos.c -= 1;
      if (cmd === 'RIGHT') nextPos.c += 1;

      // 3. Compute Next Guard Pos
      const nextGuards = currentGuards.map(g => {
        if (g.isHorizontal) {
          let nc = g.c + g.dir;
          let ndir = g.dir;
          if (nc < (g.minC || 0) || nc > (g.maxC || 5)) {
            ndir = -g.dir;
            nc = g.c + ndir;
          }
          return { ...g, c: nc, dir: ndir };
        } else {
          let nr = g.r + g.dir;
          let ndir = g.dir;
          if (nr < (g.minR || 0) || nr > (g.maxR || 5)) {
            ndir = -g.dir;
            nr = g.r + ndir;
          }
          return { ...g, r: nr, dir: ndir };
        }
      });

      // 4. Validate moves
      let collision = false;
      let msg = '';

      // Check bounds
      if (nextPos.r < 0 || nextPos.r > 5 || nextPos.c < 0 || nextPos.c > 5) {
        msg = 'ชนขอบกระดาน! ลองใหม่นะ';
        collision = true;
      }
      // Check walls
      else if (walls.some(w => w.r === nextPos.r && w.c === nextPos.c)) {
        msg = 'ชนกำแพง! ลองใหม่นะ';
        collision = true;
      }
      // Check guards (if player walked into guard, or guard walked into player, or they swapped places)
      else if (nextGuards.some(g => g.r === nextPos.r && g.c === nextPos.c)) {
        msg = 'โดนผู้คุมจับได้! ลองใหม่นะ';
        collision = true;
      }

      if (collision) {
        clearInterval(interval);
        setIsRunning(false);
        // Let it render the collision state briefly
        setPlayerPos(nextPos);
        setGuards(nextGuards);
        setTimeout(() => alert(msg), 100);
        return;
      }

      currentPos = nextPos;
      currentGuards = nextGuards;
      setPlayerPos({ ...currentPos });
      setGuards(currentGuards);
      i++;
    }, 500);
  };

  const addCommand = (cmd: Command) => {
    if (!isRunning && !isWon && commands.length < MAX_COMMANDS) {
      setCommands([...commands, cmd]);
    }
  };

  const clearCommands = () => {
    if (!isRunning && !isWon) {
      setCommands([]);
      setPlayerPos({ r: 5, c: 0 });
      setGuards(initialGuards);
    }
  };

  return (
    <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
      {/* Game Board */}
      <div>
        <div style={{ 
          display: 'inline-grid', 
          gridTemplateColumns: `repeat(6, 45px)`, 
          gap: '2px',
          backgroundColor: 'var(--border-color)',
          padding: '4px',
          borderRadius: '8px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
        }}>
          {Array.from({ length: 6 }).map((_, r) => 
            Array.from({ length: 6 }).map((_, c) => {
              const isPlayer = playerPos.r === r && playerPos.c === c;
              const isTarget = targetPos.r === r && targetPos.c === c;
              const isWall = walls.some(w => w.r === r && w.c === c);
              const guard = guards.find(g => g.r === r && g.c === c);
              
              let bg = '#1a1c29';
              if (isWall) bg = '#333';
              if (isTarget) bg = 'rgba(255, 215, 0, 0.1)';
              if (guard) bg = 'rgba(255, 50, 50, 0.1)'; // Guard presence
              
              return (
                <div 
                  key={`${r}-${c}`}
                  style={{
                    width: '45px',
                    height: '45px',
                    backgroundColor: bg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    transition: 'all 0.2s'
                  }}
                >
                  {isPlayer ? '🧑‍🚀' : (isTarget ? '🛕' : (guard ? '👹' : (isWall ? '🌲' : '')))}
                </div>
              );
            })
          )}
        </div>
        {isWon && <div style={{ color: '#2ecc71', fontWeight: 'bold', marginTop: '1rem', textAlign: 'center' }}>🎉 เดินทางถึงวัดแก้วกู่สำเร็จ!</div>}
      </div>

      {/* Controls */}
      <div style={{ minWidth: '220px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div>
          <p style={{ color: 'var(--text-color)', fontWeight: 'bold' }}>ภารกิจ: ไปให้ถึงวัดแก้วกู่</p>
          <p style={{ color: '#ff4757', fontSize: '0.9rem' }}>⚠️ ระวังผู้คุม (👹) ที่เดินลาดตระเวน!</p>
          <p style={{ color: 'var(--accent-color)', fontSize: '0.9rem', marginTop: '0.5rem' }}>บล็อกคำสั่ง: {commands.length} / {MAX_COMMANDS}</p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
          <button className="btn-secondary" onClick={() => addCommand('UP')} disabled={isRunning || commands.length >= MAX_COMMANDS}>⬆️ เดินขึ้น</button>
          <button className="btn-secondary" onClick={() => addCommand('DOWN')} disabled={isRunning || commands.length >= MAX_COMMANDS}>⬇️ เดินลง</button>
          <button className="btn-secondary" onClick={() => addCommand('LEFT')} disabled={isRunning || commands.length >= MAX_COMMANDS}>⬅️ ไปซ้าย</button>
          <button className="btn-secondary" onClick={() => addCommand('RIGHT')} disabled={isRunning || commands.length >= MAX_COMMANDS}>➡️ ไปขวา</button>
        </div>

        <div style={{ 
          backgroundColor: 'rgba(0,0,0,0.3)', 
          padding: '1rem', 
          borderRadius: '8px',
          minHeight: '150px',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.2rem',
          border: commands.length >= MAX_COMMANDS ? '1px solid #ff4757' : '1px solid transparent'
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
