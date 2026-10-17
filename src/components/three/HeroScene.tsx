import { useEffect, useMemo, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment, Lightformer } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import * as THREE from 'three'

const RED = new THREE.Color('#FC1817')
const BLUE = new THREE.Color('#0075E2')
const PURPLE = new THREE.Color('#A81E7D')
const GOLD = new THREE.Color('#C9A24B')
const WHITE = new THREE.Color('#ffffff')
/** Brighter purple so the additive overlap reads as light, not paint. */
const GLOW = new THREE.Color('#A81E7D').multiplyScalar(1.6)

/** Pointer position in [-1, 1], shared without re-rendering React. */
const pointer = { x: 0, y: 0 }

function GlassSphere({ color, side }: { color: THREE.Color; side: 1 | -1 }) {
  const mesh = useRef<THREE.Mesh>(null)
  const material = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color,
        emissive: color,
        emissiveIntensity: 0.18,
        metalness: 0.1,
        roughness: 0.12,
        transmission: 0.75,
        thickness: 1.4,
        ior: 1.35,
        clearcoat: 1,
        clearcoatRoughness: 0.08,
        envMapIntensity: 1.4,
        transparent: true,
        opacity: 0.94,
      }),
    [color],
  )

  useFrame(({ clock }) => {
    const t = clock.elapsedTime
    if (!mesh.current) return
    // Slow breathing orbit: the spheres drift apart and back together, always intersecting.
    mesh.current.position.x = side * (0.6 + Math.sin(t * 0.35) * 0.1)
    mesh.current.position.y = Math.sin(t * 0.5 + side) * 0.06
    mesh.current.position.z = Math.cos(t * 0.35) * 0.15 * side
  })

  return (
    <mesh ref={mesh} material={material}>
      <sphereGeometry args={[0.92, 96, 96]} />
    </mesh>
  )
}

/** Soft radial falloff texture, generated once (no image download). */
function useGlowTexture() {
  return useMemo(() => {
    const size = 128
    const c = document.createElement('canvas')
    c.width = c.height = size
    const ctx = c.getContext('2d')!
    const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
    g.addColorStop(0, 'rgba(255,255,255,1)')
    g.addColorStop(0.35, 'rgba(255,255,255,0.45)')
    g.addColorStop(1, 'rgba(255,255,255,0)')
    ctx.fillStyle = g
    ctx.fillRect(0, 0, size, size)
    const tex = new THREE.CanvasTexture(c)
    tex.colorSpace = THREE.SRGBColorSpace
    return tex
  }, [])
}

function OverlapGlow() {
  const sprite = useRef<THREE.Sprite>(null)
  const light = useRef<THREE.PointLight>(null)
  const map = useGlowTexture()
  useFrame(({ clock }) => {
    const t = clock.elapsedTime
    // Brightest when the spheres overlap most.
    const overlap = 1 - (Math.sin(t * 0.35) + 1) / 2
    const s = 1 + overlap * 0.25
    sprite.current?.scale.set(0.9 * s, 2.0 * s, 1)
    if (sprite.current) (sprite.current.material as THREE.SpriteMaterial).opacity = 0.75 + overlap * 0.25
    if (light.current) light.current.intensity = 6 + overlap * 6
  })
  return (
    <group>
      <sprite ref={sprite} renderOrder={10}>
        <spriteMaterial map={map} color={GLOW} toneMapped={false} transparent blending={THREE.AdditiveBlending} depthWrite={false} depthTest={false} />
      </sprite>
      <pointLight ref={light} color={PURPLE} distance={4} decay={2} />
    </group>
  )
}

function Ring({ radius, tilt, speed, color, opacity }: { radius: number; tilt: [number, number, number]; speed: number; color: THREE.Color; opacity: number }) {
  const ref = useRef<THREE.Mesh>(null)
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.z += dt * speed
  })
  return (
    <mesh ref={ref} rotation={tilt}>
      <torusGeometry args={[radius, 0.006, 8, 200]} />
      <meshStandardMaterial color={color} metalness={1} roughness={0.25} transparent opacity={opacity} />
    </mesh>
  )
}

function Rig({ children }: { children: React.ReactNode }) {
  const group = useRef<THREE.Group>(null)
  useFrame(({ clock }, dt) => {
    const g = group.current
    if (!g) return
    const t = clock.elapsedTime
    const k = 1 - Math.exp(-dt * 3)
    // Mouse parallax (desktop) + idle float (everyone).
    g.rotation.y += (pointer.x * 0.35 - g.rotation.y) * k
    g.rotation.x += (-pointer.y * 0.2 + Math.sin(t * 0.3) * 0.05 - g.rotation.x) * k
    g.position.y = Math.sin(t * 0.6) * 0.05
    g.rotation.z = Math.sin(t * 0.15) * 0.08
  })
  return <group ref={group}>{children}</group>
}

function PauseWhenHidden({ active }: { active: boolean }) {
  const { setFrameloop, clock } = useThree()
  useEffect(() => {
    setFrameloop(active ? 'always' : 'never')
    if (active) clock.start()
    else clock.stop()
  }, [active, setFrameloop, clock])
  return null
}

function Ready({ onReady }: { onReady: () => void }) {
  const fired = useRef(false)
  useFrame(() => {
    if (!fired.current) {
      fired.current = true
      requestAnimationFrame(onReady)
    }
  })
  return null
}

export default function HeroScene({ active, onReady }: { active: boolean; onReady: () => void }) {
  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!fine) return
    const onMove = (e: PointerEvent) => {
      pointer.x = (e.clientX / window.innerWidth) * 2 - 1
      pointer.y = (e.clientY / window.innerHeight) * 2 - 1
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 7.4], fov: 32 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ background: 'transparent' }}
    >
      <PauseWhenHidden active={active} />
      <Ready onReady={onReady} />

      <ambientLight intensity={0.15} />
      <directionalLight position={[3, 4, 5]} intensity={1.2} />

      {/* Small procedural environment: no HDR download. */}
      <Environment resolution={128} frames={1}>
        <Lightformer form="circle" intensity={2.2} color="#ffffff" position={[-1.5, 3, 4]} scale={2.5} />
        <Lightformer form="circle" intensity={1.2} color="#7cc0ff" position={[5, 0, 1]} rotation-y={-Math.PI / 2} scale={5} />
        <Lightformer form="circle" intensity={1.2} color="#ff7a6e" position={[-5, 0, 1]} rotation-y={Math.PI / 2} scale={5} />
        <Lightformer form="ring" intensity={2} color="#e05ab8" position={[0, -3, -4]} scale={3} />
      </Environment>

      <Rig>
        <OverlapGlow />
        <GlassSphere color={RED} side={-1} />
        <GlassSphere color={BLUE} side={1} />
        <Ring radius={1.95} tilt={[1.32, 0.2, 0]} speed={0.08} color={WHITE} opacity={0.22} />
        <Ring radius={1.75} tilt={[1.42, -0.25, 0]} speed={-0.06} color={GOLD} opacity={0.45} />
      </Rig>

      <EffectComposer multisampling={0}>
        <Bloom mipmapBlur luminanceThreshold={0.85} luminanceSmoothing={0.2} intensity={0.55} radius={0.7} />
      </EffectComposer>
    </Canvas>
  )
}
