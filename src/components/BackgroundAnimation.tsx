
import React from 'react';

const BackgroundAnimation: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0">
      {/* Create floating 3D shapes */}
      {Array.from({ length: 10 }).map((_, index) => (
        <div
          key={index}
          className="absolute rounded-full opacity-20"
          style={{
            width: `${Math.random() * 100 + 50}px`,
            height: `${Math.random() * 100 + 50}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            backgroundColor: index % 2 === 0 ? '#0056A4' : '#46627c',
            animation: `float-${index % 3} ${Math.random() * 10 + 10}s ease-in-out infinite`,
            transform: `translateZ(${Math.random() * 100}px) rotateX(${Math.random() * 360}deg) rotateY(${Math.random() * 360}deg)`,
            transformStyle: 'preserve-3d',
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundAnimation;
