"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Html, Sphere } from "@react-three/drei"
import { Suspense, useRef, useMemo } from "react"
import * as THREE from "three"
import { skills } from "@/lib/data"

// Neon color palette for borders
const neonColors = [
  "#2563eb", // blue-600
  "#1e293b", // slate-800 (dark/black)
  "#3b82f6", // blue-500 (neon blue)
  "#0ea5e9", // sky-500
  "#1e40af", // blue-900
  "#0f172a", // slate-900 (almost black)
  "#38bdf8", // sky-400
  "#172554", // blue-950
  "#60a5fa", // blue-400
  "#0ea5e9"  // sky-500 (repeat for more blue)
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
      <Sphere args={[0.32, 20, 20]}>
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
      <Sphere args={[0.36, 20, 20]}>
        <meshBasicMaterial color={neonColor} transparent opacity={0.7} />
      </Sphere>
      <Html distanceFactor={7} center>
        <div
          className="p-1 bg-background/80 rounded-full shadow-lg border-2"
          style={{ borderColor: neonColor, pointerEvents: "auto" }}
          title={skill.name}
        >
          <IconComponent className="w-12 h-12" style={{ color: neonColor }} />
        </div>
      </Html>
    </mesh>
  )
}

function FloatingSkills({ areaSize = 6 }: { areaSize?: number }) {
  // Distribute skill nodes randomly in a 3D box
  const numSkills = skills.length
  const skillNodes = useMemo(() => {
    const nodes = []
    for (let i = 0; i < numSkills; i++) {
      // Random position in a 3D box
      const x = (Math.random() - 0.5) * areaSize
      const y = (Math.random() - 0.5) * areaSize
      const z = (Math.random() - 0.5) * areaSize
      nodes.push({
        position: [x, y, z] as THREE.Vector3Tuple,
        skill: skills[i],
        neonColor: neonColors[i % neonColors.length],
        floatPhase: Math.random() * Math.PI * 2, // for unique float animation
      })
    }
    return nodes
  }, [numSkills, areaSize])

  // Animate the icons to float up and down
  const groupRef = useRef<THREE.Group>(null!)
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((child, idx) => {
        const node = skillNodes[idx]
        if (child && node) {
          // Animate Y position with a sine wave
          const t = clock.getElapsedTime()
          child.position.y = node.position[1] + Math.sin(t + node.floatPhase) * 0.25
        }
      })
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

export default function Hero3DScene() {
  return (
    <div className="fixed inset-0 z-0 flex items-center justify-center" style={{ pointerEvents: "auto", width: "100vw", height: "100vh", maxWidth: "100vw", maxHeight: "100vh", margin: 0 }}>
      <Canvas style={{ width: "100vw", height: "100vh" }} camera={{ position: [0, 0, 18], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.45} />
          <directionalLight position={[5, 5, 10]} intensity={1.1} />
          <FloatingSkills areaSize={22} />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          minDistance={8}
          maxDistance={32}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={(5 * Math.PI) / 6}
        />
      </Canvas>
    </div>
  )
}
