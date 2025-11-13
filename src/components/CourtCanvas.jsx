import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Html, OrbitControls, Scroll, ScrollControls, useScroll } from '@react-three/drei';
import * as THREE from 'three';

const Court = () => {
  const courtRef = useRef();

  const halfCourtGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    geometry.setFromPoints([
      new THREE.Vector3(-7, 0, 0),
      new THREE.Vector3(7, 0, 0)
    ]);
    return geometry;
  }, []);

  const centerRing = useMemo(() => new THREE.RingGeometry(1.2, 1.25, 64), []);
  const paintRing = useMemo(
    () => new THREE.RingGeometry(6.75, 6.8, 64, 1, Math.PI / 3, Math.PI - Math.PI / 1.5),
    []
  );

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (courtRef.current) {
      courtRef.current.rotation.y = Math.sin(t * 0.25) * 0.18;
      courtRef.current.position.y = Math.sin(t * 0.4) * 0.12;
    }
  });

  const linesMaterial = useMemo(
    () => new THREE.LineBasicMaterial({ color: '#f5f6fa', linewidth: 2 }),
    []
  );

  const createRectangle = (width, height) => {
    const shape = new THREE.Shape();
    shape.moveTo(-width / 2, -height / 2);
    shape.lineTo(width / 2, -height / 2);
    shape.lineTo(width / 2, height / 2);
    shape.lineTo(-width / 2, height / 2);
    shape.lineTo(-width / 2, -height / 2);
    const points = shape.getPoints();
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    return new THREE.Line(geometry, linesMaterial.clone());
  };

  return (
    <group ref={courtRef}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[16, 9]} />
        <meshStandardMaterial
          color="#121632"
          metalness={0.15}
          roughness={0.6}
          envMapIntensity={0.6}
        />
      </mesh>

      <primitive object={createRectangle(14, 8)} position={[0, 0.02, 0]} />

      <line geometry={halfCourtGeometry} position={[0, 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <lineBasicMaterial color="#f5f6fa" linewidth={2} />
      </line>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, 0]} geometry={centerRing}>
        <meshBasicMaterial color="#f5f6fa" side={THREE.DoubleSide} />
      </mesh>

      <primitive object={createRectangle(4.8, 5.8)} position={[0, 0.02, -1.5]} />
      <primitive object={createRectangle(4.8, 5.8)} position={[0, 0.02, 1.5]} />

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, -3.5]} geometry={paintRing}>
        <meshBasicMaterial color="#f5f6fa" side={THREE.DoubleSide} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, Math.PI]} position={[0, 0.02, 3.5]} geometry={paintRing}>
        <meshBasicMaterial color="#f5f6fa" side={THREE.DoubleSide} />
      </mesh>

      <mesh position={[0, 0.6, -3.9]}>
        <torusGeometry args={[0.22, 0.02, 16, 50]} />
        <meshStandardMaterial color="#ff9f1c" emissive="#ff9f1c" emissiveIntensity={0.35} />
      </mesh>
      <mesh position={[0, 0.6, 3.9]}>
        <torusGeometry args={[0.22, 0.02, 16, 50]} />
        <meshStandardMaterial color="#ff9f1c" emissive="#ff9f1c" emissiveIntensity={0.35} />
      </mesh>
    </group>
  );
};

const StatMarker = ({ position, title, value, delta }) => (
  <Float floatIntensity={2} speed={1.2}>
    <Html position={position} center className="stat-marker" transform distanceFactor={8}>
      <div className="stat-marker-card">
        <p>{title}</p>
        <strong>{value}</strong>
        <span className={delta.startsWith('+') ? 'positive' : 'negative'}>{delta}</span>
      </div>
    </Html>
  </Float>
);

const ScrollResponsiveGlow = () => {
  const glowRef = useRef();
  const scroll = useScroll();

  useFrame(() => {
    if (glowRef.current) {
      const offset = scroll.offset;
      glowRef.current.intensity = 1.2 + offset * 1.8;
      glowRef.current.color = new THREE.Color().setHSL(0.62 + offset * 0.05, 0.8, 0.6);
    }
  });

  return <pointLight ref={glowRef} position={[0, 5.5, 0]} intensity={1.2} color="#7f5af0" distance={15} />;
};

const CourtExperience = () => (
  <ScrollControls pages={1.6} damping={0.18}>
    <ambientLight intensity={0.6} />
    <ScrollResponsiveGlow />
    <directionalLight
      position={[5, 6, 3]}
      intensity={0.8}
      castShadow
      shadow-mapSize-width={1024}
      shadow-mapSize-height={1024}
    />
    <Scroll>
      <Court />
      <StatMarker position={[-2.4, 2.5, -2.5]} title="Points in Paint" value="52" delta="+14%" />
      <StatMarker position={[2.8, 2.2, 1.8]} title="Rebounds" value="47" delta="+6%" />
      <StatMarker position={[0, 3.1, 0]} title="True Shooting" value="61%" delta="+9%" />
    </Scroll>
    <Scroll html>
      <div className="scroll-hint">Scroll to explore live court intelligence</div>
    </Scroll>
    <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 3} maxPolarAngle={Math.PI / 2.2} />
  </ScrollControls>
);

const CourtCanvas = () => {
  return (
    <div className="court-canvas">
      <Canvas camera={{ position: [0, 6, 9], fov: 45 }} shadows>
        <color attach="background" args={["#05060f"]} />
        <CourtExperience />
      </Canvas>
    </div>
  );
};

export default CourtCanvas;
