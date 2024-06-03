import { useState, useEffect } from 'react';

function CircleFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const circleStyle = {
    position: 'absolute',
    left: `${position.x - 17}px`, // Ajuste del tamaño y la posición del borde
    top: `${position.y - 17}px`,
    width: '30px', // Tamaño del círculo
    height: '30px',
    border: '2px solid #b0b9d2ff', // Borde blanco
    borderRadius: '50%',
    pointerEvents: 'none',
    transition: 'width 0.3s, height 0.3s, border 0.3s', // Transición suave
  };

  return <div style={circleStyle} className="circle-follower" />;
}

export default CircleFollower;
