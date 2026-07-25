import { useState, useEffect } from 'react';
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
  const [pearlsCollected, setPearlsCollected] = useState(0);
  const [collectedPositions, setCollectedPositions] = useState<Set<string>>(new Set());

  // Count total pearls in grid
  const totalPearls = grid.flat().filter(c => c === 4).length;

  useEffect(() => {
    grid.forEach((row, r) => {
      row.forEach((cell, c) => {
        if (cell === 2) setPlayerPos({ r, c });
      });
    });
  }, [grid]);

  const handleCellClick = (r: number, c: number) => {
    if (isWon || grid[r][c] === 1) return;

    const isAdjacent = 
      (Math.abs(playerPos.r - r) === 1 && playerPos.c === c) ||
      (Math.abs(playerPos.c - c) === 1 && playerPos.r === r);

    if (isAdjacent) {
      setPlayerPos({ r, c });
      
      const posKey = `${r}-${c}`;
      if (grid[r][c] === 4 && !collectedPositions.has(posKey)) {
        setCollectedPositions(new Set(collectedPositions).add(posKey));
        setPearlsCollected(p => p + 1);
        addScore(5); // +5 for picking up item
      }

      if (grid[r][c] === 3) {
        if (pearlsCollected >= totalPearls) {
          setIsWon(true);
          addScore(20); // +20 for passing game
          setTimeout(onComplete, 1500);
        } else {
          alert('ต้องเก็บลูกแก้วให้ครบ 3 ลูกก่อนถึงจะออกได้!');
        }
      }
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
        คลิกช่องตารางที่ติดกันเพื่อเดิน เก็บลูกแก้วให้ครบ ({pearlsCollected}/{totalPearls}) แล้วไปที่ทางออก 🌟
      </p>

      <div style={{ 
        display: 'inline-grid', 
        gridTemplateColumns: `repeat(${grid[0].length}, 40px)`, 
        gap: '2px',
        backgroundColor: 'var(--border-color)',
        padding: '2px',
        borderRadius: '8px'
      }}>
        {grid.map((row, r) => 
          row.map((cell, c) => {
            const isPlayerHere = playerPos.r === r && playerPos.c === c;
            const posKey = `${r}-${c}`;
            const isCollected = collectedPositions.has(posKey);
            
            let bg = '#2a2d3e';
            if (cell === 1) bg = '#1a1c29';
            if (cell === 3) bg = 'rgba(255, 215, 0, 0.2)';

            return (
              <div 
                key={posKey}
                onClick={() => handleCellClick(r, c)}
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  cursor: cell !== 1 ? 'pointer' : 'not-allowed',
                  border: cell === 1 ? 'none' : '1px solid rgba(255,255,255,0.05)'
                }}
              >
                {isPlayerHere ? '🧑‍🚀' : 
                  (cell === 3 ? '🌟' : 
                  (cell === 4 && !isCollected ? '🔮' : 
                  (cell === 1 ? '🪨' : '')))}
              </div>
            );
          })
        )}
      </div>

      {isWon && (
        <div style={{ marginTop: '1rem', color: '#2ecc71', fontWeight: 'bold', fontSize: '1.2rem' }}>
          🎉 หนีออกจากถ้ำสำเร็จ!
        </div>
      )}
    </div>
  );
}
