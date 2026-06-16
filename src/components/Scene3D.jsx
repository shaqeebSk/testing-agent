import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, RoundedBox, Float, Sparkles, Sphere, TorusGeometry } from '@react-three/drei';
import * as THREE from 'three';
import ProjectCard from './ProjectCard';

const Scene3D = ({ activeSection }) => {
  const groupRef = useRef();
  const particlesRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return (
          <group>
            <Sparkles count={200} scale={20} size={3} speed={0.5} />
            <Float speed={2} rotationIntensity={1} floatIntensity={1}>
              <group>
                <mesh>
                  <sphereGeometry args={[2, 64, 64]} />
                  <meshPhongMaterial
                    color="#667eea"
                    emissive="#667eea"
                    emissiveIntensity={0.5}
                    wireframe={false}
                  />
                </mesh>
                <mesh position={[0, 0, 0]} scale={1.1}>
                  <sphereGeometry args={[2, 64, 64]} />
                  <meshPhongMaterial
                    color="#764ba2"
                    emissive="#764ba2"
                    emissiveIntensity={0.2}
                    transparent
                    opacity={0.3}
                  />
                </mesh>
              </group>
            </Float>
            <Text
              position={[0, 4, 0]}
              fontSize={1.2}
              color="white"
              anchorX="center"
              anchorY="middle"
              textShadow={10}
            >
              BIOMEDICAL ENGINEER
            </Text>
            <Text
              position={[0, 3.2, 0]}
              fontSize={0.6}
              color="#667eea"
              anchorX="center"
              anchorY="middle"
            >
              & HOME CHEF
            </Text>
          </group>
        );

      case 'projects':
        return (
          <group ref={groupRef}>
            <Sparkles count={100} scale={15} size={2} speed={0.3} />
            <ProjectCard
              position={[-6, 0, 0]}
              title="Diagnostic Device"
              description="Point-of-care testing"
              color="#667eea"
            />
            <ProjectCard
              position={[0, 0, 0]}
              title="Prosthetic Limb"
              description="Advanced materials & design"
              color="#764ba2"
            />
            <ProjectCard
              position={[6, 0, 0]}
              title="Monitoring System"
              description="IoT wearable device"
              color="#f093fb"
            />
          </group>
        );

      case 'skills':
        return (
          <group>
            <Sparkles count={150} scale={18} size={2} speed={0.4} />
            <SkillsVisualization />
          </group>
        );

      case 'hobbies':
        return (
          <group>
            <Sparkles count={200} scale={20} size={3} speed={0.5} />
            <Float speed={3} rotationIntensity={1.5} floatIntensity={1}>
              <group>
                <mesh>
                  <boxGeometry args={[3, 3, 3]} />
                  <meshPhongMaterial
                    color="#fcb69f"
                    emissive="#fcb69f"
                    emissiveIntensity={0.4}
                  />
                </mesh>
                <Text
                  position={[0, 0.5, 1.6]}
                  fontSize={0.6}
                  color="white"
                  anchorX="center"
                  anchorY="middle"
                >
                  🍳 CULINARY PASSION
                </Text>
              </group>
            </Float>
            <Text
              position={[0, -3, 0]}
              fontSize={0.4}
              color="#fcb69f"
              anchorX="center"
              anchorY="middle"
              maxWidth={8}
            >
              International Cuisine | Farm-to-Table | Molecular Gastronomy
            </Text>
          </group>
        );

      case 'contact':
        return (
          <group>
            <Sparkles count={180} scale={19} size={2.5} speed={0.45} />
            <Float speed={2} rotationIntensity={0.8} floatIntensity={0.8}>
              <group>
                <mesh>
                  <dodecahedronGeometry args={[2, 0]} />
                  <meshPhongMaterial
                    color="#667eea"
                    emissive="#667eea"
                    emissiveIntensity={0.6}
                    wireframe={true}
                  />
                </mesh>
              </group>
            </Float>
            <Text
              position={[0, 3.5, 0]}
              fontSize={0.8}
              color="white"
              anchorX="center"
              anchorY="middle"
            >
              Get In Touch
            </Text>
            <Text
              position={[0, -3, 0]}
              fontSize={0.4}
              color="#667eea"
              anchorX="center"
              anchorY="middle"
              maxWidth={8}
            >
              Email • LinkedIn • GitHub
            </Text>
          </group>
        );

      default:
        return <group />;
    }
  };

  return (
    <group>
      {/* Lighting */}
      <ambientLight intensity={0.8} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#667eea" />
      <pointLight position={[-10, -10, 10]} intensity={1} color="#764ba2" />
      <pointLight position={[0, 0, 10]} intensity={1.2} color="#667eea" />

      {/* Background Grid */}
      <group>
        <mesh position={[0, 0, -10]} rotation={[Math.PI / 4, 0, 0]}>
          <planeGeometry args={[50, 50]} />
          <meshStandardMaterial
            color="#1a1a2e"
            gridSize={1}
            gridThickness={0.5}
            emissive="#667eea"
            emissiveIntensity={0.05}
          />
        </mesh>
      </group>

      {/* Content */}
      {renderSection()}
    </group>
  );
};

const SkillsVisualization = () => {
  const skills = [
    { name: 'SolidWorks', color: '#667eea' },
    { name: 'FEA', color: '#764ba2' },
    { name: 'Python', color: '#f093fb' },
    { name: 'CAD', color: '#4facfe' },
    { name: 'FDA', color: '#667eea' },
    { name: 'LabVIEW', color: '#764ba2' },
  ];

  return (
    <group>
      {skills.map((skill, index) => {
        const angle = (index / skills.length) * Math.PI * 2;
        const x = Math.cos(angle) * 6;
        const z = Math.sin(angle) * 6;
        return (
          <Float key={skill.name} speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <group position={[x, 0, z]}>
              <mesh>
                <sphereGeometry args={[1, 32, 32]} />
                <meshPhongMaterial
                  color={skill.color}
                  emissive={skill.color}
                  emissiveIntensity={0.4}
                />
              </mesh>
              <Text
                position={[0, 0, 1.1]}
                fontSize={0.3}
                color="white"
                anchorX="center"
                anchorY="middle"
              >
                {skill.name}
              </Text>
            </group>
          </Float>
        );
      })}
    </group>
  );
};

export default Scene3D;
