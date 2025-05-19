import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import './Cover.css';

function FloatingSphereWithBoxes() {
  // Cria as caixas ao redor da esfera
  const boxes = [];
  for (let i = 0; i < 8; i++) {
    const angle = (i / 8) * Math.PI * 2;
    boxes.push(
      <mesh
        key={i}
        position={[
          Math.cos(angle) * 3,
          Math.sin(angle) * 3,
          Math.sin(angle * 2) * 1.2,
        ]}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial
          color="#ff4fa2"
          metalness={0.8}
          roughness={0.3}
          emissive={new THREE.Color('#1E0017')}
          emissiveIntensity={0.6}
        />
      </mesh>
    );
  }

  return (
    <group>
      <mesh castShadow receiveShadow>
        <sphereGeometry args={[2.2, 32, 32]} />
        <meshStandardMaterial
          color="#1E0017"
          metalness={0.7}
          roughness={0.2}
          transparent
          opacity={0.7}
          emissive={new THREE.Color('#1e1e1e')}
          emissiveIntensity={0.4}
        />
      </mesh>
      {boxes}
    </group>
  );
}

export default function Cover() {
  return (
    <section className="cover-hero">
      <div className="cover-canvas">
        <Canvas
          camera={{ position: [0, 0, 8], fov: 60 }}
          style={{ width: '100%', height: '100%' }}
          shadows
        >
          <ambientLight intensity={0.7} />
          <pointLight position={[5, 10, 10]} intensity={1} color="#ff4fa2" />
          <FloatingSphereWithBoxes />
          <OrbitControls enablePan={false} enableZoom={false} />
        </Canvas>
      </div>
      <div className="cover-content">
        <h1>
          Bem-vindo ao <span>AnyBuy</span>
        </h1>
        <p>
          O marketplace do futuro. Produtos incríveis, experiência única.<br />
          Explore, descubra e compre com tecnologia de ponta.
        </p>
        <a href="/produtos" className="cover-btn">Ver produtos</a>
      </div>
    </section>
  );
}