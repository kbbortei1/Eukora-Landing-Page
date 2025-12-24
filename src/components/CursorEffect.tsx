import { useEffect, useState, useRef } from 'react';

interface BubblePosition {
  x: number;
  y: number;
}

const CursorEffect = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [bubbles, setBubbles] = useState<BubblePosition[]>([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ]);
  const animationRef = useRef<number | null>(null);

  // Check if primary input is touch (mobile/tablet only)
  useEffect(() => {
    const checkTouchDevice = () => {
      // Only disable on actual mobile devices, not touchscreen laptops
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsTouchDevice(isMobile);
    };
    checkTouchDevice();
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isTouchDevice]);

  useEffect(() => {
    if (isTouchDevice) return;

    const animate = () => {
      setBubbles((prev) => {
        const newBubbles = [...prev];
        // First bubble follows mouse directly with slight delay
        newBubbles[0] = {
          x: newBubbles[0].x + (mousePos.x - newBubbles[0].x) * 0.15,
          y: newBubbles[0].y + (mousePos.y - newBubbles[0].y) * 0.15,
        };
        // Second bubble follows first bubble
        newBubbles[1] = {
          x: newBubbles[1].x + (newBubbles[0].x - newBubbles[1].x) * 0.12,
          y: newBubbles[1].y + (newBubbles[0].y - newBubbles[1].y) * 0.12,
        };
        // Third bubble follows second bubble
        newBubbles[2] = {
          x: newBubbles[2].x + (newBubbles[1].x - newBubbles[2].x) * 0.09,
          y: newBubbles[2].y + (newBubbles[1].y - newBubbles[2].y) * 0.09,
        };
        return newBubbles;
      });
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePos]);

  if (!isVisible || isTouchDevice) return null;

  const bubbleStyles = [
    {
      size: 24,
      color: '#0D2B3E', // Deep blue
      opacity: 0.7,
    },
    {
      size: 18,
      color: '#E76F51', // Orange
      opacity: 0.6,
    },
    {
      size: 14,
      color: '#2A9D8F', // Teal
      opacity: 0.7,
    },
  ];

  return (
    <>
      {bubbles.map((bubble, index) => (
        <div
          key={index}
          className="pointer-events-none fixed z-40 rounded-full"
          style={{
            left: bubble.x - bubbleStyles[index].size / 2,
            top: bubble.y - bubbleStyles[index].size / 2,
            width: bubbleStyles[index].size,
            height: bubbleStyles[index].size,
            backgroundColor: bubbleStyles[index].color,
            opacity: bubbleStyles[index].opacity,
            boxShadow: `0 0 ${bubbleStyles[index].size / 2}px ${bubbleStyles[index].color}`,
          }}
        />
      ))}
    </>
  );
};

export default CursorEffect;
