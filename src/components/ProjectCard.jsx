import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, RoundedBox, Float, Sparkles, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const ProjectCard = ({ position, title, description, color }) => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group position={position} ref={meshRef}>
        <RoundedBox
          args={[2, 3, 0.5]}
          radius={0.1}
          smoothness={4}
        >
          <MeshDistortMaterial
            color={color}
            distort={0.3}
            speed={2}
            roughness={0.4}
            metalness={0.8}
          />
        </RoundedBox>
        <Text
          position={[0, 1, 0.3]}
          fontSize={0.4}
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={1.8}
        >
          {title}
        </Text>
        <Text
          position={[0, 0, 0.3]}
          fontSize={0.15}
          color="#ccc"
          anchorX="center"
          anchorY="middle"
          maxWidth={1.8}
        >
          {description}
        </Text>
      </group>
    </Float>
  );
};

export default ProjectCard;
