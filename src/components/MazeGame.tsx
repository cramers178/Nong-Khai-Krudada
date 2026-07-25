import { useState, useEffect, useCallback } from 'react';
import { useGame } from '../context/GameContext';

// 0: empty, 1: wall, 2: start, 3: end, 4: pearl
type GridMap = number[][];

interface MazeGameProps {
  grid: GridMap;
  onComplete: () => void;
}

export default function MazeGame({ grid, onComplete }: MazeGameProps) {
  const { addScore } = useGame();
  const [playerPos, setPlayerPos] = useState({ r: 0, c: 0 });
  const [isWon, setIsWon] = useState(false);
  const [isLost, setIsLost] = useState(false);
  const [pearlsCollected, setPearlsCollected] = useState(0);
  const [collectedPositions, setCollectedPositions] = useState<Set<string>>(new Set());
  const [timeLeft, setTimeLeft] = useState(60);

  // Count total pearls in grid
  const totalPearls = grid.flat().filter(c => c === 4).length;

  // Initialize player position
  useEffect(() => {
    grid.forEach((row, r) => {
      row.forEach((cell, c) => {
        if (cell === 2) setPlayerPos({ r, c });
      });
    });
  }, [grid]);

  // Timer logic
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

  const movePlayer = useCallback((dr: number, dc: number) => {
    if (isWon || isLost) return;
    
    setPlayerPos(prev => {
      const nr = prev.r + dr;
      const nc = prev.c + dc;
      
      // Check bounds
      if (nr < 0 || nr >= grid.length || nc < 0 || nc >= grid[0].length) return prev;
      
      // Check wall
      if (grid[nr][nc] === 1) return prev;

      const posKey = `${nr}-${nc}`;
      
      // Handle pearl collection
      if (grid[nr][nc] === 4 && !collectedPositions.has(posKey)) {
        setCollectedPositions(prevSet => new Set(prevSet).add(posKey));
        setPearlsCollected(p => p + 1);
        addScore(5); // +5 for picking up item
      }

      // Handle exit
      if (grid[nr][nc] === 3) {
        setPearlsCollected(currentPearls => {
          // Note: using the functional state update to get the latest pearlsCollected
          // but we can also rely on the fact that if this is the last pearl, 
          // currentPearls + (was it a pearl? no, 3 is end)
          const newPearls = (grid[nr][nc] === 4 && !collectedPositions.has(posKey)) ? currentPearls + 1 : currentPearls;
          
          if (newPearls >= totalPearls) {
            setIsWon(true);
            addScore(20); // +20 for passing game
            setTimeout(onComplete, 1500);
          } else {
            alert('ต้องเก็บลูกแก้วให้ครบ ' + totalPearls + ' ลูกก่อนถึงจะออกได้!');
          }
          return newPearls;
        });
      }

      return { r: nr, c: nc };
    });
  }, [isWon, isLost, grid, collectedPositions, totalPearls, addScore, onComplete]);

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['ArrowUp', 'w', 'W'].includes(e.key)) movePlayer(-1, 0);
      if (['ArrowDown', 's', 'S'].includes(e.key)) movePlayer(1, 0);
      if (['ArrowLeft', 'a', 'A'].includes(e.key)) movePlayer(0, -1);
      if (['ArrowRight', 'd', 'D'].includes(e.key)) movePlayer(0, 1);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [movePlayer]);

  const handleRetry = () => {
    setIsLost(false);
    setTimeLeft(60);
    setPearlsCollected(0);
    setCollectedPositions(new Set());
    // Reset position
    grid.forEach((row, r) => {
      row.forEach((cell, c) => {
        if (cell === 2) setPlayerPos({ r, c });
      });
    });
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', maxWidth: '400px', margin: '0 auto 1rem' }}>
        <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: timeLeft <= 10 ? '#ff4757' : 'var(--text-color)' }}>
          ⏱️ เวลา: {timeLeft}s
        </div>
        <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--accent-color)' }}>
          🔮 ลูกแก้ว: {pearlsCollected}/{totalPearls}
        </div>
      </div>
      
      <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
        ใช้ปุ่มลูกศร (หรือ W A S D) เพื่อเดินฝ่าหมอกไปเก็บลูกแก้วให้ครบ และหาทางออกก่อนหมดเวลา!
      </p>

      <div style={{ 
        display: 'inline-grid', 
        gridTemplateColumns: `repeat(${grid[0].length}, 45px)`, 
        gap: '2px',
        backgroundColor: 'var(--border-color)',
        padding: '4px',
        borderRadius: '8px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
      }}>
        {grid.map((row, r) => 
          row.map((cell, c) => {
            const isPlayerHere = playerPos.r === r && playerPos.c === c;
            const posKey = `${r}-${c}`;
            const isCollected = collectedPositions.has(posKey);
            
            // Fog of war logic (visibility radius = 2)
            const distance = Math.abs(playerPos.r - r) + Math.abs(playerPos.c - c);
            const isVisible = distance <= 2;
            
            let bg = '#2a2d3e';
            if (cell === 1) bg = '#1a1c29';
            if (cell === 3) bg = 'rgba(255, 215, 0, 0.2)';
            
            if (!isVisible) bg = '#0a0b10'; // Pitch black for fog

            return (
              <div 
                key={posKey}
                // Optional mobile click support
                onClick={() => {
                  const dr = r - playerPos.r;
                  const dc = c - playerPos.c;
                  if ((Math.abs(dr) === 1 && dc === 0) || (Math.abs(dc) === 1 && dr === 0)) {
                    movePlayer(dr, dc);
                  }
                }}
                style={{
                  width: '45px',
                  height: '45px',
                  backgroundColor: bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  cursor: isVisible && cell !== 1 ? 'pointer' : 'default',
                  border: isVisible && cell !== 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                  transition: 'background-color 0.3s ease',
                  opacity: isVisible ? 1 : 0.2 // Darken contents in fog
                }}
              >
                {isVisible && (
                  isPlayerHere ? '🧑‍🚀' : 
                  (cell === 3 ? '🚪' : 
                  (cell === 4 && !isCollected ? '🔮' : 
                  (cell === 1 ? '🧱' : '')))
                )}
              </div>
            );
          })
        )}
      </div>

      {isWon && (
        <div style={{ marginTop: '1.5rem', color: '#2ecc71', fontWeight: 'bold', fontSize: '1.5rem' }}>
          🎉 หนีออกจากเขาวงกตพญานาคสำเร็จ!
        </div>
      )}

      {isLost && (
        <div style={{ marginTop: '1.5rem' }}>
          <div style={{ color: '#ff4757', fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '1rem' }}>
            💀 หมดเวลา! พญานาคตื่นขึ้นมาแล้ว
          </div>
          <button className="btn-primary" onClick={handleRetry}>ลองใหม่อีกครั้ง</button>
        </div>
      )}
    </div>
  );
}
