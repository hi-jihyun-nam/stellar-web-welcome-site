
import { useMouseEffect } from '@/hooks/useMouseEffect';

const MouseEffect = () => {
  const { mousePosition, isMoving } = useMouseEffect();

  return (
    <>
      {/* Main cursor */}
      <div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className={`w-6 h-6 bg-white rounded-full transition-all duration-150 ${
            isMoving ? 'scale-125' : 'scale-100'
          }`}
        />
      </div>

      {/* Trailing circles */}
      <div
        className="fixed pointer-events-none z-40"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="w-8 h-8 bg-blue-400/30 rounded-full animate-ping" />
      </div>

      <div
        className="fixed pointer-events-none z-30"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="w-12 h-12 bg-purple-400/20 rounded-full animate-pulse" />
      </div>
    </>
  );
};

export default MouseEffect;
