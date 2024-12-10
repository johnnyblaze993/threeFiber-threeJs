import React from 'react';

interface ObstacleProps {
  position: [number, number, number];
}

export const Obstacle: React.FC<ObstacleProps> = ({ position }) => {
  return (
    <mesh position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
};
