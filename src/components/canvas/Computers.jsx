// src/components/Computers.jsx

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'
import { useRef } from 'react'

const Computers = () => {
  const computer = useGLTF('/models/3dcomputerdesk/scene.gltf')
  const modelRef = useRef()
  
  return (
    <group>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <primitive object={computer.scene} castShadow receiveShadow 
        raycast={() => null} // disables hit-testing for orbit control
        scale={0.55} position={[0, -3.25, -1.5]} ref={modelRef}
      />
    </group>
  )
}

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 50 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 1.5}  // ~120°
        minPolarAngle={Math.PI / 3}  
        />
        <Computers />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas
