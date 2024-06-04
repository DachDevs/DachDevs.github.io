import { useState, useEffect, useRef } from 'react';

function CircleFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const circleRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { pageX, pageY } = event;
      setPosition({ x: pageX, y: pageY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const updatePosition = () => {
      if (circleRef.current) {
        circleRef.current.style.left = `${position.x - 17}px`;
        circleRef.current.style.top = `${position.y - 17}px`;
      }
    };

    requestAnimationFrame(updatePosition);
  }, [position]);

  return (
    <div
      ref={circleRef}
      style={{
        position: 'absolute',
        width: '30px', // Tamaño del círculo
        height: '30px',
        border: '2px solid #b0b9d2ff', // Borde blanco
        borderRadius: '50%',
        pointerEvents: 'none',
        transition: 'width 0.3s, height 0.3s, border 0.3s', // Transición suave
      }}
      className="circle-follower"
    />
  );
}

export default CircleFollower;
