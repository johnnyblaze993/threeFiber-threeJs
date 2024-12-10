import React from 'react';
import { Canvas } from '@react-three/fiber';
import Player from './components/Player';
import { OrbitControls } from '@react-three/drei';

const App: React.FC = () => {
  return (
    <Canvas 
      camera={{ position: [0, 5, 10] }} 
      style={{ height: '100vh', background: '#000' }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 5]} />
      <Player />
      <OrbitControls />
    </Canvas>
  );
};

export default App;
