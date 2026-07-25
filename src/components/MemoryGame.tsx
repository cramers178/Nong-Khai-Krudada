import { useState, useEffect } from 'react';

interface Card {
  id: number;
  emoji: string;
  isFlipped: boolean;
  isMatched: boolean;
}

const EMOJIS = ['🐉', '🛕', '🏞️', '🔑', '💎', '🛡️'];

interface MemoryGameProps {
  onComplete: () => void;
}

export default function MemoryGame({ onComplete }: MemoryGameProps) {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
  const [, setMatches] = useState(0);
  const [moves, setMoves] = useState(0);

  useEffect(() => {
    // Initialize game
    const shuffled = [...EMOJIS, ...EMOJIS]
      .sort(() => Math.random() - 0.5)
      .map((emoji, index) => ({
        id: index,
        emoji,
        isFlipped: false,
        isMatched: false,
      }));
    setCards(shuffled);
  }, []);

  const handleCardClick = (index: number) => {
    if (cards[index].isFlipped || cards[index].isMatched || flippedIndices.length === 2) return;

    const newCards = [...cards];
    newCards[index].isFlipped = true;
    setCards(newCards);

    const newFlipped = [...flippedIndices, index];
    setFlippedIndices(newFlipped);

    if (newFlipped.length === 2) {
      setMoves(m => m + 1);
      const [first, second] = newFlipped;
      
      if (newCards[first].emoji === newCards[second].emoji) {
        // Match!
        setTimeout(() => {
          const matchedCards = [...newCards];
          matchedCards[first].isMatched = true;
          matchedCards[second].isMatched = true;
          setCards(matchedCards);
          setFlippedIndices([]);
          setMatches(m => {
            if (m + 1 === EMOJIS.length) {
              setTimeout(onComplete, 1000);
            }
            return m + 1;
          });
        }, 500);
      } else {
        // No match
        setTimeout(() => {
          const resetCards = [...newCards];
          resetCards[first].isFlipped = false;
          resetCards[second].isFlipped = false;
          setCards(resetCards);
          setFlippedIndices([]);
        }, 1000);
      }
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>จับคู่ภาพให้ครบทั้งหมด (Moves: {moves})</p>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(4, 1fr)', 
        gap: '10px',
        maxWidth: '400px',
        margin: '0 auto'
      }}>
        {cards.map((card, idx) => (
          <div 
            key={card.id}
            onClick={() => handleCardClick(idx)}
            style={{
              height: '80px',
              backgroundColor: card.isFlipped || card.isMatched ? 'var(--surface-color)' : 'var(--primary-color)',
              border: '2px solid rgba(255,255,255,0.2)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              cursor: card.isFlipped || card.isMatched ? 'default' : 'pointer',
              transition: 'all 0.3s',
              transform: card.isFlipped || card.isMatched ? 'rotateY(180deg)' : 'rotateY(0deg)',
              opacity: card.isMatched ? 0.6 : 1
            }}
          >
            <span style={{ transform: card.isFlipped || card.isMatched ? 'rotateY(180deg)' : 'rotateY(0deg)' }}>
              {card.isFlipped || card.isMatched ? card.emoji : '❓'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
