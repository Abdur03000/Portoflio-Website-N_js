'use client'
import { useEffect, useRef, useState } from 'react'

const PROFILE_IMAGE_PATH = '/images/profile.jpeg'
const RESUME = '/Abdur_Rahman.pdf'

const stats = [
  { value: '10', suffix: '+', label: 'Projects' },
  { value: '2', suffix: '+', label: 'Years' },
  { value: '3', suffix: '', label: 'AI Systems' },
]

const profileStack = ['Django', 'FastAPI', 'DRF', 'LangChain', 'PostgreSQL']

export default function Hero() {
  const particlesRef = useRef<HTMLCanvasElement>(null)
  const sceneRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const [imgOk, setImgOk] = useState(true)

  // hero particles
  useEffect(() => {
    const canvas = particlesRef.current
    if (!canvas) return
    const parent = canvas.parentElement
    const ctx = canvas.getContext('2d')
    if (!parent || !ctx) return

    let W = 0
    let H = 0
    const pts: { x: number; y: number; vx: number; vy: number; r: number; o: number }[] = []

    const resize = () => {
      W = canvas.width = parent.offsetWidth
      H = canvas.height = parent.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < 70; i++) {
      pts.push({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.2 + 0.3, o: Math.random() * 0.4 + 0.1,
      })
    }

    let raf = 0
    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      pts.forEach((p, i) => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(100,132,255,${p.o})`
        ctx.fill()
        pts.slice(i + 1).forEach(q => {
          const d = Math.hypot(p.x - q.x, p.y - q.y)
          if (d < 90) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.strokeStyle = `rgba(65,105,255,${0.1 * (1 - d / 90)})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        })
      })
      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  // 3D tilt + parallax
  useEffect(() => {
    const scene = sceneRef.current
    const card = cardRef.current
    if (!scene || !card) return

    let targetX = 0, targetY = 0, currentX = 0, currentY = 0, raf = 0

    const onMove = (e: MouseEvent) => {
      const rect = scene.getBoundingClientRect()
      const x = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2)
      const y = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2)
      targetX = Math.min(Math.max(y * -10, -10), 10)
      targetY = Math.min(Math.max(x * 10, -10), 10)
    }
    const onScroll = () => {
      const scrolled = window.scrollY
      if (scrolled < window.innerHeight) card.style.transform = `translateY(${scrolled * 0.18}px)`
    }
    const animate = () => {
      currentX += (targetX - currentX) * 0.08
      currentY += (targetY - currentY) * 0.08
      scene.style.transform = `perspective(1000px) rotateX(${currentX}deg) rotateY(${currentY}deg)`
      raf = requestAnimationFrame(animate)
    }
    const reset = () => { targetX = 0; targetY = 0 }

    document.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('scroll', onScroll, { passive: true })
    scene.addEventListener('mouseleave', reset)
    animate()

    return () => {
      cancelAnimationFrame(raf)
      document.removeEventListener('mousemove', onMove)
      window.removeEventListener('scroll', onScroll)
      scene.removeEventListener('mouseleave', reset)
    }
  }, [])

  return (
    <section id="hero">
      <div className="hero-bg-gradient" />
      <div className="hero-grid-bg" />
      <canvas ref={particlesRef} id="particles" />

      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-badge"><div className="hero-badge-dot" /> Available for Projects</div>
          <h1 className="hero-name">
            <span className="first">Abdur</span>
            <span className="last neon-text">Rahman</span>
          </h1>
          <div className="hero-role">
            <span>Backend Developer</span>
            <span className="hero-role-sep">/</span>
            <span>Django · FastAPI · AI</span>
          </div>
          <p className="hero-desc">
            Building <strong>scalable REST APIs and LLM-powered agentic systems</strong> with Django,
            FastAPI, DRF and LangChain. I turn complex backend problems into reliable,
            production-ready products.
          </p>
          <div className="hero-btns">
            <a href="#projects" className="btn-blue">View My Work</a>
            <a href={RESUME} target="_blank" rel="noreferrer" className="btn-outline">Download Resume</a>
          </div>
          <div className="hero-stats">
            {stats.map((s, i) => (
              <div key={s.label} style={{ display: 'contents' }}>
                {i > 0 && <div className="stat-div" />}
                <div className="stat-item">
                  <div className="stat-num">{s.value}<em>{s.suffix}</em></div>
                  <div className="stat-lbl">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-photo-col">
          <div className="hero-photo-scene" ref={sceneRef}>
            <div className="photo-line photo-line-1" />
            <div className="photo-line photo-line-2" />
            <div className="photo-line photo-line-3" />
            <div className="photo-corner photo-corner-tl" />
            <div className="photo-corner photo-corner-tr" />
            <div className="photo-corner photo-corner-bl" />
            <div className="photo-corner photo-corner-br" />
            <div className="float-tag float-tag-1">Django<span className="tag-val">FastAPI</span></div>
            <div className="float-tag float-tag-2">LangChain<span className="tag-val">Agents</span></div>

            <div className="hero-profile-card" ref={cardRef}>
              {imgOk ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={PROFILE_IMAGE_PATH}
                  alt="Abdur Rahman"
                  className="profile-photo"
                  onError={() => setImgOk(false)}
                />
              ) : null}
              <div className="profile-title">Backend &amp; AI Engineer</div>
              <div className="profile-meta">IUB · BSCS 2021 – 2025</div>
              <div className="profile-stack">
                {profileStack.map(s => <span key={s}>{s}</span>)}
              </div>
            </div>

            <div className="hero-photo-glow" />
          </div>
        </div>
      </div>
    </section>
  )
}
