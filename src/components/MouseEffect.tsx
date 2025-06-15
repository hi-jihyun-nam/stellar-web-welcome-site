
import { useMouseEffect } from '@/hooks/useMouseEffect';

const MouseEffect = () => {
  const { mousePosition, isMoving } = useMouseEffect();

  return (
    <>
      {/* Main cursor - blue color with text inversion effect */}
      <div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className={`w-4 h-4 bg-blue-500 rounded-full transition-all duration-200 ${
            isMoving ? 'scale-150' : 'scale-100'
          }`}
        />
      </div>

      {/* Small hovering blue circle */}
      <div
        className="fixed pointer-events-none z-45"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className={`w-3 h-3 bg-blue-400 rounded-full transition-all duration-300 ${
          isMoving ? 'scale-125 opacity-80' : 'scale-100 opacity-60'
        } animate-pulse`} />
      </div>

      {/* Trailing circles - blue tones */}
      <div
        className="fixed pointer-events-none z-40"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="w-6 h-6 bg-blue-400/30 rounded-full animate-ping [animation-duration:2s]" />
      </div>

      <div
        className="fixed pointer-events-none z-30"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="w-10 h-10 bg-blue-300/20 rounded-full animate-pulse [animation-duration:3s]" />
      </div>
    </>
  );
};

export default MouseEffect;
