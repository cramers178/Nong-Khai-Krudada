import { useState } from 'react';
import { useGame } from '../context/GameContext';

type Command = 'FORWARD' | 'TURN_LEFT' | 'TURN_RIGHT' | 'LOOP' | 'IF_BOMB_JUMP';
type Direction = 'UP' | 'RIGHT' | 'DOWN' | 'LEFT';

interface CodingGridProps {
  onComplete: () => void;
}

export default function CodingGrid({ onComplete }: CodingGridProps) {
  const { addScore } = useGame();
  const [commands, setCommands] = useState<Command[]>([]);
  
  // State for rendering
  const [playerPos, setPlayerPos] = useState({ r: 5, c: 0 });
  const [playerDir, setPlayerDir] = useState<Direction>('UP');
  
  const [isRunning, setIsRunning] = useState(false);
  const [isWon, setIsWon] = useState(false);
  const [keysCollected, setKeysCollected] = useState(0);
  const [collectedPos, setCollectedPos] = useState<Set<string>>(new Set());

  // Fixed positions
  const keyPositions = [{ r: 3, c: 2 }, { r: 1, c: 2 }, { r: 1, c: 4 }, { r: 5, c: 5 }];
  const bombs = [{ r: 4, c: 0 }, { r: 2, c: 2 }, { r: 4, c: 5 }, { r: 1, c: 3 }];
  const walls = [{ r: 3, c: 0 }, { r: 3, c: 1 }, { r: 2, c: 3 }, { r: 0, c: 2 }, { r: 5, c: 4 }];

  const getDirIcon = (dir: Direction) => {
    switch(dir) {
      case 'UP': return '⬆️';
      case 'RIGHT': return '➡️';
      case 'DOWN': return '⬇️';
      case 'LEFT': return '⬅️';
    }
  };

  const handleRun = () => {
    if (commands.length === 0 || isRunning) return;
    setIsRunning(true);
    setPlayerPos({ r: 5, c: 0 }); // Reset start
    setPlayerDir('UP');
    setKeysCollected(0);
    setCollectedPos(new Set());

    let currentPos = { r: 5, c: 0 };
    let currentDir: Direction = 'UP';
    let currentKeys = 0;
    let currentCollected = new Set<string>();
    
    // Process loop command (Repeat all commands before LOOP 2 times)
    let execCommands = [...commands];
    if (execCommands.includes('LOOP')) {
      const loopIndex = execCommands.indexOf('LOOP');
      const toRepeat = execCommands.slice(0, loopIndex);
      // repeat 2 times
      execCommands = [...toRepeat, ...toRepeat, ...execCommands.slice(loopIndex + 1)];
    }

    let i = 0;
    const interval = setInterval(() => {
      if (i >= execCommands.length) {
        clearInterval(interval);
        setIsRunning(false);
        if (currentKeys >= 4) {
          setIsWon(true);
          addScore(30);
          setTimeout(onComplete, 1500);
        } else {
          alert('ยังเก็บกุญแจไม่ครบ! (ได้ ' + currentKeys + '/4)');
        }
        return;
      }

      const cmd = execCommands[i];
      let nextPos = { ...currentPos };
      let nextDir = currentDir;
      let collision = false;
      let msg = '';

      if (cmd === 'TURN_LEFT') {
        const dirs: Direction[] = ['UP', 'LEFT', 'DOWN', 'RIGHT'];
        nextDir = dirs[(dirs.indexOf(currentDir) + 1) % 4];
      } 
      else if (cmd === 'TURN_RIGHT') {
        const dirs: Direction[] = ['UP', 'RIGHT', 'DOWN', 'LEFT'];
        nextDir = dirs[(dirs.indexOf(currentDir) + 1) % 4];
      }
      else if (cmd === 'FORWARD') {
        if (currentDir === 'UP') nextPos.r -= 1;
        if (currentDir === 'DOWN') nextPos.r += 1;
        if (currentDir === 'LEFT') nextPos.c -= 1;
        if (currentDir === 'RIGHT') nextPos.c += 1;
      }
      else if (cmd === 'IF_BOMB_JUMP') {
        // Look ahead 1 cell
        let aheadPos = { ...currentPos };
        if (currentDir === 'UP') aheadPos.r -= 1;
        if (currentDir === 'DOWN') aheadPos.r += 1;
        if (currentDir === 'LEFT') aheadPos.c -= 1;
        if (currentDir === 'RIGHT') aheadPos.c += 1;
        
        const isBombAhead = bombs.some(b => b.r === aheadPos.r && b.c === aheadPos.c);
        
        if (isBombAhead) {
          // Jump over (move 2 cells)
          if (currentDir === 'UP') nextPos.r -= 2;
          if (currentDir === 'DOWN') nextPos.r += 2;
          if (currentDir === 'LEFT') nextPos.c -= 2;
          if (currentDir === 'RIGHT') nextPos.c += 2;
        } else {
          // Normal forward
          if (currentDir === 'UP') nextPos.r -= 1;
          if (currentDir === 'DOWN') nextPos.r += 1;
          if (currentDir === 'LEFT') nextPos.c -= 1;
          if (currentDir === 'RIGHT') nextPos.c += 1;
        }
      }

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
      // Check bomb (if didn't jump over it)
      else if (bombs.some(b => b.r === nextPos.r && b.c === nextPos.c)) {
        msg = '💥 ตู้ม! เหยียบระเบิด ลองใช้คำสั่ง IF_BOMB_JUMP ดูนะ';
        collision = true;
      }

      if (collision) {
        clearInterval(interval);
        setIsRunning(false);
        setPlayerPos(nextPos);
        setPlayerDir(nextDir);
        setTimeout(() => alert(msg), 100);
        return;
      }

      currentPos = nextPos;
      currentDir = nextDir;
      setPlayerPos({ ...currentPos });
      setPlayerDir(currentDir);

      // Check keys
      const keyIndex = keyPositions.findIndex(k => k.r === currentPos.r && k.c === currentPos.c);
      if (keyIndex !== -1) {
        const posKey = `${currentPos.r}-${currentPos.c}`;
        if (!currentCollected.has(posKey)) {
          currentCollected.add(posKey);
          currentKeys += 1;
          setKeysCollected(currentKeys);
          setCollectedPos(new Set(currentCollected));
          addScore(5); // +5 per key
        }
      }

      i++;
    }, 400);
  };

  const addCommand = (cmd: Command) => {
    if (!isRunning && !isWon) setCommands([...commands, cmd]);
  };

  const clearCommands = () => {
    if (!isRunning && !isWon) {
      setCommands([]);
      setPlayerPos({ r: 5, c: 0 });
      setPlayerDir('UP');
      setKeysCollected(0);
      setCollectedPos(new Set());
    }
  };

  return (
    <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
      {/* Game Board */}
      <div>
        <div style={{ 
          display: 'inline-grid', 
          gridTemplateColumns: `repeat(6, 50px)`, 
          gap: '2px',
          backgroundColor: 'var(--border-color)',
          padding: '4px',
          borderRadius: '8px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
        }}>
          {Array.from({ length: 6 }).map((_, r) => 
            Array.from({ length: 6 }).map((_, c) => {
              const isPlayer = playerPos.r === r && playerPos.c === c;
              const isWall = walls.some(w => w.r === r && w.c === c);
              const isBomb = bombs.some(b => b.r === r && b.c === c);
              const isKey = keyPositions.some(k => k.r === r && k.c === c);
              const isCollected = collectedPos.has(`${r}-${c}`);
              
              let bg = '#1a1c29';
              if (isWall) bg = '#333';
              if (isBomb) bg = 'rgba(255, 71, 87, 0.1)';
              
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
                  {isPlayer ? getDirIcon(playerDir) : 
                  (isWall ? '🧱' : 
                  (isBomb ? '💣' : 
                  (isKey && !isCollected ? '🔑' : '')))}
                </div>
              );
            })
          )}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
           <p style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>🔑 กุญแจ: {keysCollected} / 4</p>
           {isWon && <div style={{ color: '#2ecc71', fontWeight: 'bold' }}>🎉 ผ่านภารกิจ!</div>}
        </div>
      </div>

      {/* Controls */}
      <div style={{ minWidth: '250px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <p style={{ color: 'var(--text-muted)' }}>การเขียนโปรแกรมเชิงวัตถุ (หันหน้าทิศทาง)<br/>หลบระเบิดและเก็บกุญแจ 4 ดอก</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
          <button className="btn-secondary" onClick={() => addCommand('FORWARD')} disabled={isRunning} style={{ gridColumn: 'span 2' }}>🚶 เดินหน้า (Forward)</button>
          <button className="btn-secondary" onClick={() => addCommand('TURN_LEFT')} disabled={isRunning}>↩️ หันซ้าย</button>
          <button className="btn-secondary" onClick={() => addCommand('TURN_RIGHT')} disabled={isRunning}>↪️ หันขวา</button>
          
          <button className="btn-secondary" onClick={() => addCommand('LOOP')} style={{ gridColumn: 'span 2', borderColor: '#3498db' }} disabled={isRunning}>
            🔁 ทวนซ้ำคำสั่งก่อนหน้า (x2)
          </button>
          <button className="btn-secondary" onClick={() => addCommand('IF_BOMB_JUMP')} style={{ gridColumn: 'span 2', borderColor: '#e74c3c' }} disabled={isRunning}>
            🛡️ ถ้าข้างหน้ามีระเบิด ให้กระโดดข้าม 2 ช่อง
          </button>
        </div>

        <div style={{ 
          backgroundColor: 'rgba(0,0,0,0.3)', 
          padding: '1rem', 
          borderRadius: '8px',
          minHeight: '120px',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.2rem'
        }}>
          {commands.length === 0 ? <span style={{ color: 'var(--text-muted)' }}>ยังไม่มีคำสั่ง...</span> : 
            commands.map((c, i) => (
              <span key={i} style={{ background: 'rgba(255,255,255,0.1)', padding: '0.2rem 0.5rem', borderRadius: '4px', fontFamily: 'monospace' }}>
                {i+1}. {c}
              </span>
            ))
          }
        </div>

        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button className="btn-primary" onClick={handleRun} disabled={isRunning || commands.length === 0} style={{ flex: 1 }}>▶️ รันโปรแกรม</button>
          <button className="btn-secondary" onClick={clearCommands} disabled={isRunning}>ล้างคำสั่ง</button>
        </div>
      </div>
    </div>
  );
}
