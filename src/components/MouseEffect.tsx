
import { useMouseEffect } from '@/hooks/useMouseEffect';

const MouseEffect = () => {
  const { mousePosition, isMoving } = useMouseEffect();

  return (
    <>
      {/* Main cursor - 파란색으로 변경하고 텍스트 반전 효과 추가 */}
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

      {/* Trailing circles - 파란색 톤으로 변경 */}
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
