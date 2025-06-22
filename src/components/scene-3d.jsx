"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import {
  Environment,
  Float,
  Sphere,
  Box,
  Torus,
  Text3D,
  Stars,
  Trail,
  Sparkles,
  MeshDistortMaterial,
  MeshWobbleMaterial,
} from "@react-three/drei"
import * as THREE from "three"

function ModernParticleField() {
  const points = useRef()
  const particleCount = 500

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 60
      positions[i * 3 + 1] = (Math.random() - 0.5) * 60
      positions[i * 3 + 2] = (Math.random() - 0.5) * 60
    }
    return positions
  }, [])

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.08) * 0.05
      points.current.rotation.y = Math.cos(state.clock.elapsedTime * 0.12) * 0.08
    }
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particleCount} array={particlesPosition} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.025} color="#ffffff" transparent opacity={0.8} />
    </points>
  )
}

function CrystalFormation({ position, color }) {
  const crystalRef = useRef()
  const crystals = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      position: [Math.cos((i / 8) * Math.PI * 2) * 2, Math.sin(i * 0.5) * 1.5, Math.sin((i / 8) * Math.PI * 2) * 2],
      scale: 0.3 + Math.random() * 0.4,
      rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI],
    }))
  }, [])

  useFrame((state) => {
    if (crystalRef.current) {
      crystalRef.current.rotation.y = state.clock.elapsedTime * 0.3
      crystalRef.current.children.forEach((child, index) => {
        child.rotation.x = Math.sin(state.clock.elapsedTime * 0.5 + index) * 0.2
        child.rotation.z = Math.cos(state.clock.elapsedTime * 0.3 + index) * 0.15
      })
    }
  })

  return (
    <group ref={crystalRef} position={position}>
      {crystals.map((crystal, index) => (
        <Box key={index} position={crystal.position} scale={crystal.scale} rotation={crystal.rotation}>
          <MeshDistortMaterial
            color={color}
            transparent
            opacity={0.7}
            distort={0.4}
            speed={1.5}
            roughness={0.1}
            metalness={0.9}
            emissive={color}
            emissiveIntensity={0.3}
          />
        </Box>
      ))}
    </group>
  )
}

function FlowingRibbons() {
  const ribbonRef = useRef()
  const ribbons = useMemo(() => {
    return Array.from({ length: 3 }, (_, i) => ({
      points: Array.from({ length: 20 }, (_, j) => {
        const t = j / 19
        return new THREE.Vector3(Math.sin(t * Math.PI * 4 + i * 2) * 3, Math.cos(t * Math.PI * 2 + i) * 2, t * 10 - 5)
      }),
      color: [`#ff6b6b`, `#4ecdc4`, `#45b7d1`][i],
    }))
  }, [])

  useFrame((state) => {
    if (ribbonRef.current) {
      ribbonRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.3
      ribbonRef.current.position.z = Math.sin(state.clock.elapsedTime * 0.2) * 2
    }
  })

  return (
    <group ref={ribbonRef} position={[0, 0, -10]}>
      {ribbons.map((ribbon, index) => (
        <group key={index}>
          {ribbon.points.map((point, pointIndex) => (
            <Sphere key={pointIndex} position={[point.x, point.y, point.z]} args={[0.1]}>
              <meshStandardMaterial
                color={ribbon.color}
                transparent
                opacity={0.8}
                emissive={ribbon.color}
                emissiveIntensity={0.4}
              />
            </Sphere>
          ))}
        </group>
      ))}
    </group>
  )
}

function GeometricTunnel() {
  const tunnelRef = useRef()
  const segments = useMemo(() => {
    return Array.from({ length: 15 }, (_, i) => ({
      z: i * -2,
      rotation: (i * Math.PI) / 8,
      scale: 1 + i * 0.1,
    }))
  }, [])

  useFrame((state) => {
    if (tunnelRef.current) {
      tunnelRef.current.children.forEach((child, index) => {
        child.rotation.z = state.clock.elapsedTime * 0.2 + index * 0.1
        child.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 0.5 + index * 0.2) * 0.1)
      })
    }
  })

  return (
    <group ref={tunnelRef} position={[8, 0, -5]}>
      {segments.map((segment, index) => (
        <Torus key={index} args={[2, 0.1, 8, 16]} position={[0, 0, segment.z]} rotation={[0, 0, segment.rotation]}>
          <meshStandardMaterial
            color="#96f2d7"
            transparent
            opacity={0.6 - index * 0.03}
            emissive="#96f2d7"
            emissiveIntensity={0.2}
            wireframe
          />
        </Torus>
      ))}
    </group>
  )
}

function FloatingCubes() {
  const cubesRef = useRef()
  const cubes = useMemo(() => {
    return Array.from({ length: 25 }, (_, i) => ({
      position: [(Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20],
      scale: 0.2 + Math.random() * 0.3,
      speed: 0.5 + Math.random() * 0.5,
      color: [`#ffd93d`, `#6bcf7f`, `#4d96ff`, `#9775fa`, `#ff8cc8`][Math.floor(Math.random() * 5)],
    }))
  }, [])

  useFrame((state) => {
    if (cubesRef.current) {
      cubesRef.current.children.forEach((cube, index) => {
        const cubeData = cubes[index]
        cube.rotation.x = state.clock.elapsedTime * cubeData.speed
        cube.rotation.y = state.clock.elapsedTime * cubeData.speed * 0.7
        cube.position.y = cubeData.position[1] + Math.sin(state.clock.elapsedTime * 0.8 + index) * 0.5
      })
    }
  })

  return (
    <group ref={cubesRef}>
      {cubes.map((cube, index) => (
        <Box key={index} position={cube.position} scale={cube.scale}>
          <MeshWobbleMaterial
            color={cube.color}
            transparent
            opacity={0.8}
            factor={0.3}
            speed={2}
            emissive={cube.color}
            emissiveIntensity={0.2}
          />
        </Box>
      ))}
    </group>
  )
}

function EnergyOrbs() {
  const orbsRef = useRef()
  const orbs = useMemo(() => {
    return Array.from({ length: 6 }, (_, i) => ({
      radius: 3 + i * 1.5,
      speed: 0.1 + i * 0.05,
      height: Math.sin(i) * 2,
      color: [`#ff9ff3`, `#54a0ff`, `#5f27cd`, `#00d2d3`, `#ff9f43`, `#10ac84`][i],
    }))
  }, [])

  useFrame((state) => {
    if (orbsRef.current) {
      orbsRef.current.children.forEach((orb, index) => {
        const orbData = orbs[index]
        const angle = state.clock.elapsedTime * orbData.speed
        orb.position.x = Math.cos(angle) * orbData.radius
        orb.position.z = Math.sin(angle) * orbData.radius
        orb.position.y = orbData.height + Math.sin(state.clock.elapsedTime * 0.5 + index) * 0.5
      })
    }
  })

  return (
    <group ref={orbsRef} position={[-8, 0, -8]}>
      {orbs.map((orb, index) => (
        <Float key={index} speed={2} rotationIntensity={1} floatIntensity={2}>
          <Sphere args={[0.3]}>
            <MeshDistortMaterial
              color={orb.color}
              transparent
              opacity={0.9}
              distort={0.5}
              speed={3}
              emissive={orb.color}
              emissiveIntensity={0.5}
            />
            <Sparkles count={15} scale={2} size={3} speed={0.8} color={orb.color} />
          </Sphere>
        </Float>
      ))}
    </group>
  )
}

function ModernText() {
  const textRef = useRef()

  useFrame((state) => {
    if (textRef.current) {
      textRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
      textRef.current.position.y = -6 + Math.sin(state.clock.elapsedTime * 0.3) * 0.2
    }
  })

  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
      <Text3D
        ref={textRef}
        font="/fonts/Geist_Bold.json"
        size={1.2}
        height={0.3}
        position={[0, -6, -6]}
        rotation={[0, Math.PI / 6, 0]}
      >
        {"CREATIVE"}
        <MeshDistortMaterial
          color="#ff6b6b"
          distort={0.3}
          speed={2}
          emissive="#ff6b6b"
          emissiveIntensity={0.4}
          metalness={0.8}
          roughness={0.2}
        />
      </Text3D>
    </Float>
  )
}

function LightBeams() {
  const beamsRef = useRef()

  useFrame((state) => {
    if (beamsRef.current) {
      beamsRef.current.rotation.y = state.clock.elapsedTime * 0.2
    }
  })

  return (
    <group ref={beamsRef} position={[0, 5, -15]}>
      {Array.from({ length: 8 }, (_, i) => {
        const angle = (i / 8) * Math.PI * 2
        return (
          <Box key={i} position={[Math.cos(angle) * 5, 0, Math.sin(angle) * 5]} args={[0.05, 10, 0.05]}>
            <meshStandardMaterial
              color="#ffd93d"
              transparent
              opacity={0.6}
              emissive="#ffd93d"
              emissiveIntensity={0.8}
            />
          </Box>
        )
      })}
    </group>
  )
}

function TrailingElements() {
  return (
    <>
      <Trail width={3} length={12} color="#4ecdc4" attenuation={(t) => t * t}>
        <Float speed={6} rotationIntensity={2} floatIntensity={3}>
          <Sphere args={[0.2]} position={[0, 0, -12]}>
            <meshStandardMaterial color="#4ecdc4" emissive="#4ecdc4" emissiveIntensity={0.6} />
          </Sphere>
        </Float>
      </Trail>

      <Trail width={2} length={8} color="#ff6b6b" attenuation={(t) => t * t}>
        <Float speed={4} rotationIntensity={1} floatIntensity={2}>
          <Box args={[0.3, 0.3, 0.3]} position={[3, 2, -10]}>
            <meshStandardMaterial color="#ff6b6b" emissive="#ff6b6b" emissiveIntensity={0.4} />
          </Box>
        </Float>
      </Trail>
    </>
  )
}

export function Scene3D() {
  return (
    <>
      <Environment preset="sunset" />
      <Stars radius={300} depth={60} count={1200} factor={8} saturation={0} fade />

      {/* Modern Lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={2} color="#ff6b6b" />
      <pointLight position={[-10, -10, -10]} intensity={1.5} color="#4ecdc4" />
      <pointLight position={[0, 10, 0]} intensity={2} color="#ffd93d" />
      <spotLight position={[0, 20, 0]} angle={0.4} penumbra={1} intensity={3} color="#ffffff" castShadow />

      {/* Modern Particle Field */}
      <ModernParticleField />

      {/* Crystal Formations */}
      <CrystalFormation position={[-6, 2, -8]} color="#4ecdc4" />
      <CrystalFormation position={[6, -2, -10]} color="#ff6b6b" />

      {/* Flowing Ribbons */}
      <FlowingRibbons />

      {/* Geometric Tunnel */}
      <GeometricTunnel />

      {/* Floating Cubes */}
      <FloatingCubes />

      {/* Energy Orbs */}
      <EnergyOrbs />

      {/* Modern 3D Text */}
      <ModernText />

      {/* Light Beams */}
      <LightBeams />

      {/* Trailing Elements */}
      <TrailingElements />
    </>
  )
}
