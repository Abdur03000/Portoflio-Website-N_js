'use client'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CursorGlow from '@/components/CursorGlow'

const features = [
  { icon: 'fas fa-qrcode', title: 'Barcode Scanning', desc: 'Fast asset identification and tracking using barcode and QR code scanning with mobile support.' },
  { icon: 'fas fa-chart-pie', title: 'Depreciation Tracking', desc: 'Automated depreciation calculations using multiple methods (straight-line, declining balance, etc.).' },
  { icon: 'fas fa-wrench', title: 'Maintenance Scheduling', desc: 'Proactive maintenance planning with automated reminders, work order management, and vendor tracking.' },
  { icon: 'fas fa-file-alt', title: 'Reporting & Analytics', desc: 'Comprehensive reports on asset utilization, lifecycle costs, maintenance history, and compliance.' },
  { icon: 'fas fa-exchange-alt', title: 'Asset Transfers', desc: 'Track asset movement across departments, locations, and employees with complete audit trail.' },
  { icon: 'fas fa-shield-alt', title: 'Compliance Management', desc: 'Regulatory compliance tracking, audit preparation, and policy enforcement for asset governance.' },
]

const stack = ['Next.js 14', 'TypeScript', 'PostgreSQL', 'Prisma ORM', 'Tailwind CSS', 'Chart.js', 'Docker', 'GitHub Actions']

export default function SamsAssets() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <div style={{ paddingTop: 'var(--nav-height)' }}>
        <section style={{
          minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center',
          padding: '4rem 2rem', textAlign: 'center',
          background: 'linear-gradient(135deg,rgba(0,206,201,0.08),rgba(108,92,231,0.05))',
          borderBottom: '1px solid var(--border-color)',
        }}>
          <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>📦</div>
          <h1 style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 700, marginBottom: '0.5rem' }}>SAMS Assets Management</h1>
          <div style={{ color: 'var(--accent-2)', fontSize: '1.1rem', marginBottom: '1rem' }}>SAMS Assets Management Platform</div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
            <span><i className="fas fa-calendar" /> 2025</span>
            <span><i className="fas fa-tag" /> Production</span>
            <span><i className="fas fa-building" /> Enterprise</span>
          </div>
        </section>

        <div style={{ maxWidth: 800, margin: '0 auto', padding: '4rem 2rem' }}>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-1)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2rem' }}>
            <i className="fas fa-arrow-left" /> Back to Portfolio
          </Link>

          <h2 style={{ fontSize: '1.5rem', color: 'var(--accent-2)', marginBottom: '1rem' }}>Overview</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1rem' }}>
            SAMS (Smart Assets Management System) is a comprehensive enterprise platform for tracking and managing
            organizational assets throughout their lifecycle, providing complete visibility into asset inventory,
            location, condition, depreciation, and maintenance schedules.
          </p>

          <h2 style={{ fontSize: '1.5rem', color: 'var(--accent-2)', margin: '2.5rem 0 1rem' }}>Key Features</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: '1.2rem', margin: '1.5rem 0' }}>
            {features.map(f => (
              <div key={f.title} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', padding: '1.5rem', textAlign: 'center' }}>
                <i className={f.icon} style={{ fontSize: '2rem', color: 'var(--accent-2)', display: 'block', marginBottom: '1rem' }} />
                <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>{f.title}</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: '1.5rem', color: 'var(--accent-2)', margin: '2.5rem 0 1rem' }}>Technology Stack</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', margin: '1.5rem 0' }}>
            {stack.map(t => <span key={t} style={{ padding: '0.5rem 1.2rem', background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 50, fontSize: '0.85rem' }}>{t}</span>)}
          </div>

          <h2 style={{ fontSize: '1.5rem', color: 'var(--accent-2)', margin: '2.5rem 0 1rem' }}>Architecture</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            Built on Next.js 14 with the App Router, leveraging server-side rendering for optimal performance.
            TypeScript ensures type safety across the entire codebase. PostgreSQL with Prisma ORM provides
            a robust, type-safe data layer. The frontend features a modern, responsive UI with interactive
            data visualizations using Chart.js.
          </p>

          <h2 style={{ fontSize: '1.5rem', color: 'var(--accent-2)', margin: '2.5rem 0 1rem' }}>Impact</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            SAMS enables organizations to maintain accurate asset registers, reduce loss and theft, optimize maintenance
            schedules, and make data-driven decisions about asset lifecycle management, achieving significant cost
            savings through improved asset utilization and reduced downtime.
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}
