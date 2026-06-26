'use client'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CursorGlow from '@/components/CursorGlow'

const features = [
  { icon: 'fas fa-cubes', title: 'Inventory Management', desc: 'Real-time stock tracking, automated reordering, and ingredient management with expiry alerts.' },
  { icon: 'fas fa-shopping-cart', title: 'Order Management', desc: 'End-to-end order processing from customer placement to production and delivery tracking.' },
  { icon: 'fas fa-file-invoice', title: 'Billing System', desc: 'Automated invoicing, tax calculations, payment tracking, and receipt generation.' },
  { icon: 'fas fa-chart-line', title: 'Analytics Dashboard', desc: 'Real-time KPIs, sales trends, production efficiency, and cost analysis with visual reports.' },
  { icon: 'fas fa-users-cog', title: 'Staff Management', desc: 'Employee scheduling, role-based access, attendance tracking, and performance metrics.' },
  { icon: 'fas fa-bell', title: 'Real-time Alerts', desc: 'Instant notifications for low stock, order status changes, and system events.' },
]

const stack = ['React 18', 'Node.js', 'MongoDB', 'Socket.io', 'Redis', 'Docker', 'Nginx', 'AWS EC2']

export default function DanubeBakery() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <div style={{ paddingTop: 'var(--nav-height)' }}>
        <section style={{
          minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center',
          padding: '4rem 2rem', textAlign: 'center',
          background: 'linear-gradient(135deg,rgba(253,203,110,0.08),rgba(253,121,168,0.05))',
          borderBottom: '1px solid var(--border-color)',
        }}>
          <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>🥖</div>
          <h1 style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 700, marginBottom: '0.5rem' }}>Danube Bakery Management System</h1>
          <div style={{ color: 'var(--accent-4)', fontSize: '1.1rem', marginBottom: '1rem' }}>Bin Dawood Group</div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
            <span><i className="fas fa-calendar" /> 2025</span>
            <span><i className="fas fa-tag" /> Production</span>
            <span><i className="fas fa-users" /> Enterprise</span>
          </div>
        </section>

        <div style={{ maxWidth: 800, margin: '0 auto', padding: '4rem 2rem' }}>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-1)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2rem' }}>
            <i className="fas fa-arrow-left" /> Back to Portfolio
          </Link>

          <h2 style={{ fontSize: '1.5rem', color: 'var(--accent-4)', marginBottom: '1rem' }}>Overview</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1rem' }}>
            The Danube Bakery Management System is a comprehensive enterprise solution built for the Bin Dawood Group.
            It streamlines bakery operations from inventory and production management to order processing, billing, and real-time analytics.
          </p>

          <h2 style={{ fontSize: '1.5rem', color: 'var(--accent-4)', margin: '2.5rem 0 1rem' }}>Key Features</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: '1.2rem', margin: '1.5rem 0' }}>
            {features.map(f => (
              <div key={f.title} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', padding: '1.5rem', textAlign: 'center' }}>
                <i className={f.icon} style={{ fontSize: '2rem', color: 'var(--accent-4)', display: 'block', marginBottom: '1rem' }} />
                <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>{f.title}</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: '1.5rem', color: 'var(--accent-4)', margin: '2.5rem 0 1rem' }}>Technology Stack</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', margin: '1.5rem 0' }}>
            {stack.map(t => <span key={t} style={{ padding: '0.5rem 1.2rem', background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 50, fontSize: '0.85rem' }}>{t}</span>)}
          </div>

          <h2 style={{ fontSize: '1.5rem', color: 'var(--accent-4)', margin: '2.5rem 0 1rem' }}>Architecture</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            The system follows a microservices architecture with separate services for inventory, orders, billing, and analytics.
            The frontend is built with React and communicates with the backend via REST APIs and WebSocket connections for real-time updates.
            MongoDB serves as the primary database with Redis for caching. The entire stack is containerized with Docker and deployed on AWS.
          </p>

          <h2 style={{ fontSize: '1.5rem', color: 'var(--accent-4)', margin: '2.5rem 0 1rem' }}>Impact</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            Implemented for the Bin Dawood Group&apos;s bakery operations, the system has significantly improved operational efficiency,
            reduced waste through better inventory tracking, and provided management with unprecedented visibility through real-time analytics.
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}
