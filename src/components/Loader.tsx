'use client'
import { useEffect, useRef } from 'react'
import { SITE } from '@/constants'

export default function Loader() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const hide = () => setTimeout(() => el.classList.add('hide'), 2400)
    const t = hide()
    return () => clearTimeout(t)
  }, [])

  return (
    <div id="loader" ref={ref}>
      <div className="loader-text">{SITE.name}</div>
      <div className="loader-sub">{SITE.title}</div>
      <div className="loader-line" />
    </div>
  )
}
