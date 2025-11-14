import { useEffect, useState } from 'react';

function CourtBackground() {
  const [tilt, setTilt] = useState({ rotateX: 18, rotateY: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const progress = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      const rotateX = 18 + progress * 12;
      const rotateY = (progress - 0.5) * 16;
      setTilt({ rotateX, rotateY });
    };

    const handleMouseMove = (event) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const rotateY = ((event.clientX - centerX) / centerX) * 10;
      const rotateX = 18 - ((event.clientY - centerY) / centerY) * 6;
      setTilt((prev) => ({ ...prev, rotateX, rotateY }));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="court-wrapper" aria-hidden="true">
      <div
        className="court"
        style={{
          transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
        }}
      >
        <div className="court-line outer" />
        <div className="court-line center-line" />
        <div className="court-line circle">
          <span />
        </div>
        <div className="court-line paint paint-left">
          <span className="inner" />
        </div>
        <div className="court-line paint paint-right">
          <span className="inner" />
        </div>
        <div className="court-glow" />
      </div>
    </div>
  );
}

export default CourtBackground;
