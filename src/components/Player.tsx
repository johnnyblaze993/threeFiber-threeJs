import React, { useRef } from 'react';
import { useFrame, extend } from '@react-three/fiber';
import { Mesh, BoxGeometry } from 'three';
import { useKeyboardControls } from '../hooks/useKeyboardControls';

// Extend Three.js classes for use in React Three Fiber
extend({ BoxGeometry });

const Player: React.FC = () => {
  const playerRef = useRef<Mesh>(null!);
  const { left, right, up, down } = useKeyboardControls(); // Get control state
  const speed = 0.1; // Movement speed

  // Player movement logic
  useFrame(() => {
    if (!playerRef.current) return;

    // Move player based on control inputs
    if (left) playerRef.current.position.x -= speed;
    if (right) playerRef.current.position.x += speed;
    if (up) playerRef.current.position.y += speed;
    if (down) playerRef.current.position.y -= speed;
  });

  return (
    <mesh ref={playerRef} position={[0, 0.5, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color='orange' />
    </mesh>
  );
};

export default Player;
