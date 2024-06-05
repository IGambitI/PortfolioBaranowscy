import React, { Suspense, useEffect, useState } from 'react'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'
import CanvasLoader from '../Loader.jsx'

const ChessSet = ({ isMobile }) => {
  const chessSet = useGLTF('./desktop_pc/scene.gltf')
  return (    
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black"/>
      <pointLight intensity={1}/>
      <spotLight position={[-2, 5, 1]} angle={1} penumbra={1} intensity={300} castShadow shadow-mapSize={1024}/>
      <primitive object={chessSet.scene} scale={isMobile ? 12 : 24} position={isMobile ? [0, -2, -2.2] : [0, -3.25, -1.5]} rotation={[-0.01, -0.2, -0.1]}/>
    </mesh>
  )
}

const ChessSetCanvas = () => {
  const isMobile = useMediaQuery({query: '(max-width: 500px)'})

  return (
    <Canvas frameloop='demand' shadows camera={{position: [20, 3, 5], fov: 25}} gl={{preserveDrawingBuffer: true}}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2}/>
        <ChessSet isMobile={isMobile}/>
      </Suspense>

      <Preload all/>
    </Canvas>
  )
}

export default ChessSetCanvas