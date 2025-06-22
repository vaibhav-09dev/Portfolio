"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Sphere, Box, Torus } from "@react-three/drei"

export function Loading3D() {
  const groupRef = useRef()

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime
    }
  })

  return (
    <group ref={groupRef}>
      <Sphere args={[0.5]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#4f46e5" wireframe />
      </Sphere>
      <Box args={[0.8, 0.8, 0.8]} position={[2, 0, 0]}>
        <meshStandardMaterial color="#06b6d4" wireframe />
      </Box>
      <Torus args={[0.6, 0.2]} position={[-2, 0, 0]}>
        <meshStandardMaterial color="#8b5cf6" wireframe />
      </Torus>
      <ambientLight intensity={0.5} />
    </group>
  )
}
