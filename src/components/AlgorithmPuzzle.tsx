import { useState, useEffect } from 'react';

interface Step {
  id: string;
  text: string;
}

interface AlgorithmPuzzleProps {
  correctOrder: string[];
  initialSteps: Step[];
  onComplete: () => void;
}

export default function AlgorithmPuzzle({ correctOrder, initialSteps, onComplete }: AlgorithmPuzzleProps) {
  const [steps, setSteps] = useState<Step[]>([]);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    // Shuffle on start
    setSteps([...initialSteps].sort(() => Math.random() - 0.5));
  }, [initialSteps]);

  const handleSelect = (index: number) => {
    if (isCorrect) return;

    if (selectedIdx === null) {
      setSelectedIdx(index);
    } else {
      // Swap
      const newSteps = [...steps];
      const temp = newSteps[selectedIdx];
      newSteps[selectedIdx] = newSteps[index];
      newSteps[index] = temp;
      
      setSteps(newSteps);
      setSelectedIdx(null);
      
      // Check if correct
      const isMatch = newSteps.every((s, i) => s.id === correctOrder[i]);
      if (isMatch) {
        setIsCorrect(true);
        setTimeout(onComplete, 1500);
      }
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
        คลิกที่บล็อก 2 อันเพื่อสลับตำแหน่ง จัดเรียงให้ถูกต้อง!
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxWidth: '400px', margin: '0 auto' }}>
        {steps.map((step, idx) => (
          <div
            key={step.id}
            onClick={() => handleSelect(idx)}
            style={{
              padding: '1rem',
              backgroundColor: isCorrect ? '#2ecc71' : (selectedIdx === idx ? 'var(--accent-color)' : 'rgba(255,255,255,0.1)'),
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '8px',
              cursor: isCorrect ? 'default' : 'pointer',
              transition: 'all 0.2s',
              color: selectedIdx === idx ? '#000' : '#fff',
              fontWeight: selectedIdx === idx ? 'bold' : 'normal'
            }}
          >
            {idx + 1}. {step.text}
          </div>
        ))}
      </div>

      {isCorrect && (
        <div style={{ marginTop: '1rem', color: '#2ecc71', fontWeight: 'bold', fontSize: '1.2rem' }}>
          🎉 จัดเรียงถูกต้อง!
        </div>
      )}
    </div>
  );
}
