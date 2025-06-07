"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Html, Sphere, useTexture } from "@react-three/drei"
import { Suspense, useRef, useMemo } from "react"
import * as THREE from "three"
import { skills } from "@/lib/data"
import { i } from "framer-motion/client"

// Neon color palette for borders
const neonColors = [
  "#00fff7", "#ff00e6", "#00ff85", "#ffe600", "#ff007b", "#00aaff", "#ff6b00", "#aaff00", "#ff00c8", "#00ffd0"
]

// Component for individual skill nodes
function SkillNode({
  position,
  skill,
  neonColor,
}: {
  position: THREE.Vector3Tuple
  skill: (typeof skills)[0]
  neonColor: string
}) {
  const IconComponent = skill.icon
  return (
    <mesh position={position}>
      <Sphere args={[0.16, 20, 20]}>
        <meshPhysicalMaterial
          color="#18181b"
          metalness={0.8}
          roughness={0.15}
          clearcoat={0.7}
          clearcoatRoughness={0.1}
          emissive={neonColor}
          emissiveIntensity={0.8}
        />
      </Sphere>
      {/* Neon border effect */}
      <Sphere args={[0.18, 20, 20]}>
        <meshBasicMaterial color={neonColor} transparent opacity={0.7} />
      </Sphere>
      <Html distanceFactor={7} center>
        <div
          className="p-1 bg-background/80 rounded-full shadow-lg border-2"
          style={{ borderColor: neonColor, pointerEvents: "auto" }}
          title={skill.name}
        >
          <IconComponent className="w-5 h-5" style={{ color: neonColor }} />
        </div>
      </Html>
    </mesh>
  )
}

function FloatingSkills({ globeRadius }: { globeRadius: number }) {
  // Distribute skill nodes at varying heights and radii
  const numSkills = skills.length
  const skillNodes = useMemo(() => {
    const nodes = []
    for (let i = 0; i < numSkills; i++) {
      // Vary the height and radius for each icon
      const angle = (i / numSkills) * Math.PI * 2
      const height = (Math.random() - 0.5) * globeRadius * 1.2 // Vary Y
      const radius = globeRadius * (1.15 + Math.random() * 0.4) // Vary distance from center
      const x = Math.cos(angle) * radius
      const y = height
      const z = Math.sin(angle) * radius
      nodes.push({
        position: [x, y, z] as THREE.Vector3Tuple,
        skill: skills[i],
        neonColor: neonColors[i % neonColors.length],
      })
    }
    return nodes
  }, [numSkills, globeRadius])

  // Animate the icons to rotate around the globe
  const groupRef = useRef<THREE.Group>(null!)
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0015
    }
  })

  return (
    <group ref={groupRef}>
      {skillNodes.map((node) => (
        <SkillNode key={node.skill.name} position={node.position} skill={node.skill} neonColor={node.neonColor} />
      ))}
    </group>
  )
}

function NeonGlobe({ radius }: { radius: number }) {
  const globeRef = useRef<THREE.Mesh>(null!)
  // Load the code snippet texture
  const [codeTexture] = useTexture(["/assets/textures/code_snippet.png"])
  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.001
    }
  })
  return (
    <>
      {/* Main dark globe with code snippet texture */}
      <Sphere ref={globeRef} args={[radius, 64, 64]}>
        <meshPhysicalMaterial
          map={codeTexture}
          color="#fff"
          metalness={0.7}
          roughness={0.18}
          clearcoat={0.8}
          clearcoatRoughness={0.1}
          transparent={true}
          opacity={0.95}
        />
      </Sphere>
      {/* Neon border (slightly larger sphere) */}
      <Sphere args={[radius * 1.01, 64, 64]}>
        <meshBasicMaterial color="#00fff7" transparent opacity={0.35} />
      </Sphere>
    </>
  )
}

export default function Hero3DScene() {
  const globeRadius = 1.6
  return (
    <div className="absolute inset-0 z-0 flex items-center justify-center" style={{ pointerEvents: "auto", maxWidth: 500, maxHeight: 500, margin: "0 auto" }}>
      <Canvas style={{ width: "100%", height: "100%" }} camera={{ position: [0, 0, 7], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.45} />
          <directionalLight position={[5, 5, 10]} intensity={1.1} />
          <NeonGlobe radius={globeRadius} />
          <FloatingSkills globeRadius={globeRadius} />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          minDistance={4}
          maxDistance={10}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={(5 * Math.PI) / 6}
        />
      </Canvas>
    </div>
  )
}
