import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'
import useInView from '../../utilities/useInView'

const Earth = () => {
  const earth = useGLTF('./planet/scene.gltf')
  return <primitive object={earth.scene} scale={1.5} />
}

const EarthCanvas = () => {
  const { ref, inView } = useInView({ threshold: 0.1, rootMargin: '100px' })

  return (
    <div ref={ref} className="w-full h-full">
      {inView ? (
        <Canvas
          shadows
          frameloop="demand"
          dpr={[1, 1.5]}
          performance={{ min: 0.5 }}
          camera={{ position: [4, 3, 5], fov: 35, near: 0.1, far: 200 }}
          gl={{ antialias: false }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
              autoRotate
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <Earth />
            <Preload all />
          </Suspense>
        </Canvas>
      ) : (
        <div className="w-full h-full rounded-xl bg-gradient-to-br from-[#0b1020] via-[#111833] to-[#0b1020] shadow-inner" />
      )}
    </div>
  )
}

export default EarthCanvas
