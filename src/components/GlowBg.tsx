import React, { useEffect, useRef } from 'react';

export const GlowBg: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      containerRef.current.style.setProperty('--mouse-x', `${clientX}px`);
      containerRef.current.style.setProperty('--mouse-y', `${clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-zinc-950"
    >
      {/* Background radial gradient following mouse */}
      <div
        className="absolute inset-0 opacity-40 transition-opacity duration-300"
        style={{
          background: `radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(99, 102, 241, 0.15), rgba(139, 92, 246, 0.1), transparent 70%)`,
        }}
      />
      
      {/* Static premium glowing blobs for layered composition depth */}
      <div className="absolute -top-[10%] right-[5%] h-[500px] w-[500px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-[10%] left-[5%] h-[600px] w-[600px] rounded-full bg-purple-500/5 blur-[130px] pointer-events-none animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-[40%] left-[30%] h-[400px] w-[400px] rounded-full bg-emerald-500/3 blur-[110px] pointer-events-none animate-pulse-slow" style={{ animationDelay: '4s' }} />
    </div>
  );
};
export default GlowBg;
