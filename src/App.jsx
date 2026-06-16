import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls, Text, RoundedBox, Float, Sparkles } from '@react-three/drei';
import * as THREE from 'three';
import Scene3D from './components/Scene3D';
import UI from './components/UI';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const cameraRef = useRef();

  return (
    <div className="app">
      <Canvas
        style={{ width: '100%', height: '100vh' }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 15]} ref={cameraRef} />
        <OrbitControls autoRotate autoRotateSpeed={2} />
        <Scene3D activeSection={activeSection} />
      </Canvas>
      <UI activeSection={activeSection} setActiveSection={setActiveSection} />
    </div>
  );
}

export default App;
