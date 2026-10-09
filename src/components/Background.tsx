'use client'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function Background() {
  const starsRef = useRef<HTMLCanvasElement>(null)
  const threeRef = useRef<HTMLDivElement>(null)

  // starfield on the fixed full-page canvas
  useEffect(() => {
    const canvas = starsRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let W = 0
    let H = 0
    const stars: { x: number; y: number; r: number; o: number; vx: number; vy: number }[] = []

    const resize = () => {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < 120; i++) {
      stars.push({
        x: Math.random() * W, y: Math.random() * H,
        r: Math.random() * 0.8 + 0.1,
        o: Math.random() * 0.15 + 0.02,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
      })
    }

    let raf = 0
    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      stars.forEach(s => {
        s.x += s.vx; s.y += s.vy
        if (s.x < 0) s.x = W; if (s.x > W) s.x = 0
        if (s.y < 0) s.y = H; if (s.y > H) s.y = 0
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(150,180,255,${s.o})`
        ctx.fill()
      })
      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  // three.js torus knot
  useEffect(() => {
    const container = threeRef.current
    if (!container) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.set(0, 0, 5)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    const light1 = new THREE.DirectionalLight(0xffffff, 1.2)
    light1.position.set(1, 1, 1)
    scene.add(light1)
    const light2 = new THREE.DirectionalLight(0x4169ff, 0.8)
    light2.position.set(-1, -0.5, 0.5)
    scene.add(light2)
    const light3 = new THREE.PointLight(0x00cfff, 0.6)
    light3.position.set(0, 1, -2)
    scene.add(light3)

    const geometry = new THREE.TorusKnotGeometry(1.5, 0.45, 120, 20)
    const material = new THREE.MeshStandardMaterial({
      color: 0x4169ff, metalness: 0.7, roughness: 0.15,
      emissive: new THREE.Color(0x4169ff), emissiveIntensity: 0.08,
    })
    const object = new THREE.Mesh(geometry, material)
    scene.add(object)

    const wireMat = new THREE.MeshStandardMaterial({ color: 0x00cfff, wireframe: true, transparent: true, opacity: 0.08 })
    const wireObj = new THREE.Mesh(geometry.clone(), wireMat)
    wireObj.scale.set(1.02, 1.02, 1.02)
    object.add(wireObj)

    const particleGeo = new THREE.BufferGeometry()
    const particleCount = 300
    const positions = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount * 3; i++) positions[i] = (Math.random() - 0.5) * 10
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const particleMat = new THREE.PointsMaterial({ color: 0x6384ff, size: 0.015, transparent: true, opacity: 0.5 })
    const particles = new THREE.Points(particleGeo, particleMat)
    scene.add(particles)

    let raf = 0
    const animate = () => {
      raf = requestAnimationFrame(animate)
      object.rotation.x += 0.003
      object.rotation.y += 0.007
      object.rotation.z += 0.002
      object.position.y = Math.sin(Date.now() * 0.0008) * 0.2
      particles.rotation.x += 0.0002
      particles.rotation.y += 0.0003
      renderer.render(scene, camera)
    }
    animate()

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      geometry.dispose()
      material.dispose()
      wireMat.dispose()
      particleGeo.dispose()
      particleMat.dispose()
      container.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <>
      <div ref={threeRef} id="three-bg" />
      <canvas ref={starsRef} id="bg-canvas" />
      <div className="bg-aurora" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <div className="geo geo-1" />
      <div className="geo geo-2" />
      <div className="geo geo-3" />
      <div className="scan-line" />
    </>
  )
}
