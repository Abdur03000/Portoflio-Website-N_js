'use client'
import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (ref.current) {
        ref.current.style.left = e.clientX + 'px'
        ref.current.style.top = e.clientY + 'px'
      }
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <div ref={ref} style={{
      position: 'fixed', width: 400, height: 400, borderRadius: '50%',
      background: 'radial-gradient(circle, var(--glow-1) 0%, transparent 70%)',
      pointerEvents: 'none', zIndex: 0,
      transform: 'translate(-50%,-50%)', opacity: 0.3, transition: 'opacity 0.3s',
    }} />
  )
}
