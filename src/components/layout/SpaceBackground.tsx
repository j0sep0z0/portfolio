"use client"

import * as random from "maath/random"
import * as THREE from "three"
import { OrbitControls, PointMaterial, Points } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import { useEffect, useRef, useState } from "react"

function Starfield() {
  const ref = useRef<THREE.Points>(null)
  const [sphere, setSphere] = useState<Float32Array | null>(null)

  useEffect(() => {
    // Generar posiciones y asegurarse de que no hay NaN
    const positions = new Float32Array(
      random.inSphere(new Float32Array(10000), { radius: 2 })
    )
    for (let i = 0; i < positions.length; i++) {
      if (isNaN(positions[i])) {
        positions[i] = 0 // Reemplazar NaN con 0
      }
    }
    setSphere(positions)
  }, [])

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 70
      ref.current.rotation.y -= delta / 95
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere || new Float32Array()}
        stride={3}
        frustumCulled={false}
      >
        <PointMaterial
          transparent
          color="#9db4ff" // Azul más vibrante
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          opacity={0.8}
        />
      </Points>
    </group>
  )
}

export default function SpaceBackground() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1, // Asegura que esté detrás de todo
        pointerEvents: "none", // Permite interactuar con el contenido superior
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 3], fov: 60 }}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
        }}
      >
        <ambientLight intensity={0.25} />
        <Starfield />
        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.3}
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  )
}
