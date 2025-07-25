import { useEffect, useState } from 'react';

interface Confetti {
  id: number;
  x: number;
  color: string;
  delay: number;
  size: number;
}

interface ConfettiEffectProps {
  isActive: boolean;
  duration?: number;
}

const ConfettiEffect = ({ isActive, duration = 5000 }: ConfettiEffectProps) => {
  const [confetti, setConfetti] = useState<Confetti[]>([]);

  const colors = [
    'hsl(320, 80%, 60%)',
    'hsl(340, 80%, 50%)',
    'hsl(280, 60%, 70%)',
    'hsl(200, 100%, 80%)',
    'hsl(60, 100%, 80%)',
    'hsl(120, 60%, 70%)',
  ];

  useEffect(() => {
    if (!isActive) {
      setConfetti([]);
      return;
    }

    const generateConfetti = () => {
      const newConfetti: Confetti[] = [];
      for (let i = 0; i < 50; i++) {
        newConfetti.push({
          id: i,
          x: Math.random() * 100,
          color: colors[Math.floor(Math.random() * colors.length)],
          delay: Math.random() * 2000,
          size: Math.random() * 10 + 5,
        });
      }
      setConfetti(newConfetti);
    };

    generateConfetti();

    const timeout = setTimeout(() => {
      setConfetti([]);
    }, duration);

    return () => clearTimeout(timeout);
  }, [isActive, duration]);

  if (!isActive || confetti.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute"
          style={{
            left: `${piece.x}%`,
            animationDelay: `${piece.delay}ms`,
            animation: 'confetti-fall 3s linear forwards',
          }}
        >
          <div
            className="rounded-full"
            style={{
              width: `${piece.size}px`,
              height: `${piece.size}px`,
              backgroundColor: piece.color,
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default ConfettiEffect;