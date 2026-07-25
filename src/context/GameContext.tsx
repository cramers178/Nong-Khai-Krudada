import { createContext, useContext, useState, type ReactNode } from 'react';

type Badge = 'naga' | 'wat' | 'phataksuea' | 'guardian';

interface GameState {
  score: number;
  addScore: (points: number) => void;
  badges: Badge[];
  unlockBadge: (badge: Badge) => void;
  completedStages: string[];
  completeStage: (stage: string) => void;
}

const GameContext = createContext<GameState | undefined>(undefined);

export function GameProvider({ children }: { children: ReactNode }) {
  const [score, setScore] = useState(0);
  const [badges, setBadges] = useState<Badge[]>([]);
  const [completedStages, setCompletedStages] = useState<string[]>([]);

  const addScore = (points: number) => {
    setScore(prev => prev + points);
  };

  const unlockBadge = (badge: Badge) => {
    if (!badges.includes(badge)) {
      setBadges(prev => [...prev, badge]);
    }
  };

  const completeStage = (stage: string) => {
    if (!completedStages.includes(stage)) {
      setCompletedStages(prev => [...prev, stage]);
    }
  };

  return (
    <GameContext.Provider value={{ score, addScore, badges, unlockBadge, completedStages, completeStage }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
}
