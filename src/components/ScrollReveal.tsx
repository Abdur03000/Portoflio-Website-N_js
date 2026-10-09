'use client'
import { useEffect } from 'react'

export default function ScrollReveal() {
  useEffect(() => {
    const revealObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          revealObs.unobserve(e.target)
        }
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el))

    const barObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll<HTMLElement>('.bar-fill').forEach(b => {
            b.style.width = (b.dataset.w ?? '0') + '%'
          })
          barObs.unobserve(e.target)
        }
      })
    }, { threshold: 0.3 })

    const bars = document.querySelector('.bars')
    if (bars) barObs.observe(bars)

    return () => {
      revealObs.disconnect()
      barObs.disconnect()
    }
  }, [])

  return null
}
