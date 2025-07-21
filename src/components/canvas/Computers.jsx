// src/components/Computers.jsx

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'
import { useRef } from 'react'

const Computers = () => {
  const computer = useGLTF('/models/3dperson/scene.glb')
  const modelRef = useRef()
  
  return (
    <group>
      <hemisphereLight intensity={3.15} groundColor="black" />
      <pointLight intensity={100} 
      position={[1, 0, 1]}/>
      <primitive object={computer.scene} castShadow receiveShadow 
        raycast={() => null} // disables hit-testing for orbit control
        scale={1.45} position={[0, -7.75, -1.0]} ref={modelRef}
      />
    </group>
  )
}

const ComputersCanvas = () => {
  return (
    <Canvas
      className="w-full h-[400px] sm:h-[500px] md:h-[600px]"
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 50 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
        autoRotate
        autoRotateSpeed={2.5}
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
