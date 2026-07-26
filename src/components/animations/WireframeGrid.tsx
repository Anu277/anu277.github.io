import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function GridMesh() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((_, delta) => {
    if (!meshRef.current) return
    meshRef.current.rotation.y += delta * 0.15
  })

  return (
    <group rotation={[0.5, 0.7, 0]}>
      <mesh ref={meshRef}>
        <boxGeometry args={[2.4, 2.4, 2.4, 6, 6, 6]} />
        <meshBasicMaterial
          color="#ff6a00"
          wireframe
          transparent
          opacity={0.6}
        />
      </mesh>
    </group>
  )
}

export function WireframeGrid() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 40 }}
      gl={{ alpha: true, antialias: true }}
      className="pointer-events-none!"
    >
      <GridMesh />
    </Canvas>
  )
}
