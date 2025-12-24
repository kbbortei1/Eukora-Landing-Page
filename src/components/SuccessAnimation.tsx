import { useEffect, useState } from 'react';

interface SuccessAnimationProps {
  show: boolean;
  onComplete?: () => void;
}

const SuccessAnimation = ({ show, onComplete }: SuccessAnimationProps) => {
  const [confetti, setConfetti] = useState<Array<{ id: number; left: number; delay: number; color: string }>>([]);

  useEffect(() => {
    if (show) {
      // Generate confetti pieces
      const colors = ['#2A9D8F', '#E76F51', '#0D2B3E', '#FFD700', '#FF6B6B'];
      const pieces = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
      }));
      setConfetti(pieces);

      // Clear after animation
      const timer = setTimeout(() => {
        setConfetti([]);
        onComplete?.();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [show, onComplete]);

  if (!show && confetti.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* Confetti */}
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute w-3 h-3 animate-confetti"
          style={{
            left: `${piece.left}%`,
            top: '-20px',
            backgroundColor: piece.color,
            animationDelay: `${piece.delay}s`,
            borderRadius: Math.random() > 0.5 ? '50%' : '0',
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        />
      ))}

      {/* Success checkmark overlay */}
      {show && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white rounded-full p-6 shadow-2xl animate-bounce-in">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
              <span className="material-icons-round text-white text-5xl animate-check">check</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SuccessAnimation;
