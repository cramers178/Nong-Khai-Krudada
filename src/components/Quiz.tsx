import { useState } from 'react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
}

interface QuizProps {
  questions: Question[];
  onComplete: (score: number, total: number) => void;
}

export default function Quiz({ questions, onComplete }: QuizProps) {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswer = (index: number) => {
    if (isAnswered) return;
    setSelectedOpt(index);
    setIsAnswered(true);

    let newScore = score;
    if (index === questions[currentQ].correctIndex) {
      newScore += 1;
      setScore(newScore);
    }

    setTimeout(() => {
      if (currentQ + 1 < questions.length) {
        setCurrentQ(currentQ + 1);
        setSelectedOpt(null);
        setIsAnswered(false);
      } else {
        setShowResult(true);
        onComplete(newScore, questions.length);
      }
    }, 1500);
  };

  if (showResult) {
    return (
      <div className="glass-panel animate-fade-in" style={{ padding: '2rem', textAlign: 'center' }}>
        <h2 className="title text-gradient">สรุปผลคะแนน</h2>
        <p style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>คุณทำได้ {score} / {questions.length} คะแนน</p>
      </div>
    );
  }

  const q = questions[currentQ];

  return (
    <div className="glass-panel animate-fade-in" style={{ padding: '2rem' }}>
      <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>ข้อที่ {currentQ + 1} / {questions.length}</p>
      <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>{q.question}</h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {q.options.map((opt, idx) => {
          let btnClass = 'btn-secondary';
          if (isAnswered) {
            if (idx === q.correctIndex) btnClass = 'btn-primary'; // Highlight correct
            else if (idx === selectedOpt) btnClass = 'btn-secondary'; // Selected wrong, maybe red?
          }

          return (
            <button 
              key={idx} 
              className={btnClass}
              style={{
                width: '100%', 
                textAlign: 'left',
                backgroundColor: isAnswered && idx === selectedOpt && idx !== q.correctIndex ? 'rgba(255, 0, 0, 0.5)' : undefined
              }}
              onClick={() => handleAnswer(idx)}
              disabled={isAnswered}
            >
              {opt}
            </button>
          );
        })}
      </div>
      
      {isAnswered && (
        <div style={{ marginTop: '1rem', padding: '1rem', background: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}>
          {selectedOpt === q.correctIndex ? '✅ ถูกต้อง!' : '❌ ผิดครับ!'}
          {q.explanation && <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>{q.explanation}</p>}
        </div>
      )}
    </div>
  );
}
