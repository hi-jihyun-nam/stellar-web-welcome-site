
import { useMouseEffect } from '@/hooks/useMouseEffect';

const MouseEffect = () => {
  const { mousePosition, isMoving } = useMouseEffect();

  return (
    <>
      {/* Main cursor - 크기 줄이고 색상 변경 */}
      <div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className={`w-3 h-3 bg-indigo-600 rounded-full transition-all duration-200 ${
            isMoving ? 'scale-150' : 'scale-100'
          }`}
        />
      </div>

      {/* Trailing circles - 크기 줄이고 애니메이션 속도 늦춤 */}
      <div
        className="fixed pointer-events-none z-40"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="w-5 h-5 bg-indigo-400/20 rounded-full animate-ping [animation-duration:3s]" />
      </div>

      <div
        className="fixed pointer-events-none z-30"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="w-8 h-8 bg-purple-400/15 rounded-full animate-pulse [animation-duration:4s]" />
      </div>
    </>
  );
};

export default MouseEffect;
