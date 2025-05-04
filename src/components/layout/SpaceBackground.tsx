"use client"

import * as random from "maath/random"
import * as THREE from "three"
import { OrbitControls, PointMaterial, Points } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import { useEffect, useRef, useState } from "react"

function Starfield() {
  const ref = useRef<THREE.Points>(null)
  const NUM_POINTS = 10000

  const [positions] = useState<Float32Array>(() => {
    const arr = new Float32Array(NUM_POINTS * 3)
    random.inSphere(arr, { radius: 2 })
    for (let i = 0; i < arr.length; i++) {
      if (!Number.isFinite(arr[i])) arr[i] = 0
    }
    return arr
  })

  useEffect(() => {
    const points = ref.current
    if (!points) return

    const geom = points.geometry as THREE.BufferGeometry
    const posAttr = geom.attributes.position as THREE.BufferAttribute
    const array = posAttr.array as Float32Array

    for (let i = 0; i < array.length; i++) {
      if (!Number.isFinite(array[i])) array[i] = 0
    }
    posAttr.needsUpdate = true

    geom.computeBoundingBox()
    if (geom.boundingBox) {
      const box = geom.boundingBox
      const center = new THREE.Vector3()
      const size = new THREE.Vector3()
      box.getCenter(center)
      box.getSize(size)
      const radius = size.length() * 0.5
      geom.boundingSphere = new THREE.Sphere(center, radius)
    }
  }, [positions])

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 70
      ref.current.rotation.y -= delta / 95
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#9db4ff"
          size={0.005}
          sizeAttenuation
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
        zIndex: -1,
        pointerEvents: "none",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 3], fov: 60 }}
        style={{ width: "100%", height: "100%", display: "block" }}
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
