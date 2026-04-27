
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, MeshWobbleMaterial, PerspectiveCamera, ContactShadows, Environment } from '@react-three/drei';
import * as THREE from 'three';

interface SceneProps {
  activeStep: number | null;
}

const Scene: React.FC<SceneProps> = ({ activeStep }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Custom colors based on brand
  const color = useMemo(() => {
    if (activeStep === 1) return '#62b4e0';
    if (activeStep === 2) return '#a855f7';
    if (activeStep === 3) return '#22c55e';
    return '#62b4e0';
  }, [activeStep]);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
      
      // Dynamic scaling based on active state
      const targetScale = activeStep ? 1.2 : 1;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color={color} />
      <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />

      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh ref={meshRef}>
          {activeStep === 3 ? (
            // Solid Crystalized State
            <octahedronGeometry args={[1.5, 0]} />
          ) : (
            // Morphing Fluid State
            <sphereGeometry args={[1.5, 64, 64]} />
          )}
          
          {activeStep === 1 ? (
             <MeshWobbleMaterial 
                color={color} 
                factor={0.4} 
                speed={2} 
                roughness={0} 
                metalness={0.8}
                transparent
                opacity={0.9}
             />
          ) : (
            <MeshDistortMaterial
              color={color}
              speed={activeStep === 2 ? 4 : 2}
              distort={activeStep === 2 ? 0.6 : 0.4}
              radius={1}
              roughness={0.1}
              metalness={0.9}
            />
          )}
        </mesh>
      </Float>

      {/* Particle Field */}
      <group>
        {[...Array(40)].map((_, i) => (
          <Particle key={i} color={color} active={activeStep !== null} />
        ))}
      </group>

      <ContactShadows 
        position={[0, -2.5, 0]} 
        opacity={0.4} 
        scale={10} 
        blur={2} 
        far={4.5} 
      />
      <Environment preset="city" />
    </>
  );
};

const Particle = ({ color, active }: { color: string, active: boolean }) => {
  const ref = useRef<THREE.Mesh>(null);
  const [coords] = useMemo(() => {
    const pos = new THREE.Vector3().setFromSphericalCoords(
      2.5 + Math.random() * 2,
      Math.PI * Math.random(),
      Math.PI * 2 * Math.random()
    );
    return [pos];
  }, []);

  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime();
      ref.current.position.y = coords.y + Math.sin(t + coords.x) * 0.1;
      ref.current.position.x = coords.x + Math.cos(t + coords.y) * 0.1;
      
      if (active) {
        ref.current.scale.lerp(new THREE.Vector3(1.5, 1.5, 1.5), 0.1);
      } else {
        ref.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
      }
    }
  });

  return (
    <mesh ref={ref} position={coords}>
      <sphereGeometry args={[0.02, 8, 8]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2} />
    </mesh>
  );
};

const AbstractVisual3D: React.FC<SceneProps> = ({ activeStep }) => {
  return (
    <div className="w-full h-full min-h-[400px] lg:h-[600px] relative">
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 45 }}>
        <Scene activeStep={activeStep} />
      </Canvas>
      
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-full bg-gradient-radial from-[#62b4e0]/10 to-transparent blur-3xl opacity-30" />
      </div>
    </div>
  );
};

export default AbstractVisual3D;
