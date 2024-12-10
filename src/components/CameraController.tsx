import React from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Mesh } from 'three';

interface CameraControllerProps {
  playerRef: React.RefObject<Mesh>;
}

const CameraController: React.FC<CameraControllerProps> = ({ playerRef }) => {
  const { camera } = useThree();

  const deadZoneX = 2; // How far the player can move from the center before the camera follows

  useFrame(() => {
    if (!playerRef.current) return;

    const playerPosition = playerRef.current.position;

    // Check if player has moved beyond the "dead zone"
    if (playerPosition.x > camera.position.x + deadZoneX) {
      camera.position.x = playerPosition.x - deadZoneX;
    }
    if (playerPosition.x < camera.position.x - deadZoneX) {
      camera.position.x = playerPosition.x + deadZoneX;
    }

    // Optionally, follow the player smoothly (instead of snapping)
    camera.position.x += (playerPosition.x - camera.position.x) * 0.1;
    camera.position.y += (playerPosition.y - camera.position.y) * 0.1;
  });

  return null;
};

export default CameraController;
