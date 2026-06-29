'use client'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const features = [
  { icon: 'fas fa-birthday-cake', title: 'Cake Customization App', desc: 'Full mobile app for customers to design custom cakes — choose size, flavor, layers, decorations, and add personalized messages with live preview.' },
  { icon: 'fas fa-mobile-alt', title: 'Mobile App (iOS & Android)', desc: 'Complete customer-facing mobile application for ordering, cake customization, order tracking, and notifications built with React Native.' },
  { icon: 'fas fa-tachometer-alt', title: 'Custom Admin Panel', desc: 'User-friendly admin dashboard for managing orders, products, pricing, staff, and analytics — designed for non-technical bakery staff.' },
  { icon: 'fas fa-utensils', title: 'KDS for Pastry Chef / Baker', desc: 'Dedicated Kitchen Display System for pastry chefs and bakers showing incoming orders, custom cake specs, decoration instructions, preparation priority, and real-time status updates — no paper tickets.' },
  { icon: 'fas fa-cubes', title: 'Inventory Management', desc: 'Real-time stock tracking, automated reordering, and ingredient management with expiry alerts.' },
  { icon: 'fas fa-chart-line', title: 'Analytics Dashboard', desc: 'Real-time KPIs, sales trends, production efficiency, and cost analysis with visual reports.' },
]

const stack = ['Django', 'DRF', 'PostgreSQL', 'Celery', 'Redis', 'React Native', 'WebSocket', 'Docker']

export default function DanubeBakery() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: 'var(--nav-height)', background: '#0f0f0f', minHeight: '100vh' }}>

        {/* Hero */}
        <section style={{
          padding: '5rem 2rem 4rem', textAlign: 'center',
          borderBottom: '1px solid var(--border)',
          background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(232,160,69,0.06) 0%, transparent 70%)',
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '1.25rem' }}>🥖</div>
          <span style={{ display: 'inline-block', padding: '0.25rem 0.9rem', background: 'var(--amber-dim)', border: '1px solid var(--amber-border)', borderRadius: 50, fontSize: '0.72rem', fontWeight: 600, color: 'var(--amber)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '1rem' }}>Case Study</span>
          <h1 style={{ fontSize: 'clamp(1.8rem,5vw,3rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
            Danube Bakery Management System
          </h1>
          <div style={{ color: 'var(--amber)', fontSize: '0.95rem', fontWeight: 500, marginBottom: '1.5rem' }}>Bin Dawood Group</div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', color: 'var(--text-2)', fontSize: '0.82rem' }}>
            <span><i className="fas fa-calendar" style={{ marginRight: 5 }} />2025</span>
            <span><i className="fas fa-mobile-alt" style={{ marginRight: 5 }} />Mobile App</span>
            <span><i className="fas fa-utensils" style={{ marginRight: 5 }} />KDS for Pastry Chef</span>
            <span><i className="fas fa-birthday-cake" style={{ marginRight: 5 }} />Cake Customization</span>
          </div>
        </section>

        <div style={{ maxWidth: 820, margin: '0 auto', padding: '3.5rem 2rem 5rem' }}>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-2)', textDecoration: 'none', fontSize: '0.85rem', marginBottom: '2.5rem', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-2)'}>
            <i className="fas fa-arrow-left" /> Back to Portfolio
          </Link>

          {/* Overview */}
          <h2 style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: '0.75rem' }}>Overview</h2>
          <p style={{ color: 'var(--text-2)', lineHeight: 1.8, fontSize: '0.9rem', marginBottom: '2.5rem' }}>
            A full-scale bakery management ecosystem built for Bin Dawood Group&apos;s Danube Bakery chain. The system includes a customer-facing mobile app with cake customization, a user-friendly admin panel for staff, a dedicated Kitchen Display System for chefs, and a complete backend for operations, inventory, and analytics.
          </p>

          {/* Features */}
          <h2 style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: '1.25rem' }}>Key Features</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
            {features.map(f => (
              <div key={f.title} style={{
                background: 'var(--bg-card)', border: '1px solid var(--border)',
                borderRadius: 12, padding: '1.4rem',
              }}>
                <div style={{
                  width: 38, height: 38, borderRadius: 9, background: 'var(--amber-dim)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--amber)', fontSize: '0.95rem', marginBottom: '0.9rem',
                }}>
                  <i className={f.icon} />
                </div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.4rem' }}>{f.title}</h4>
                <p style={{ color: 'var(--text-2)', fontSize: '0.82rem', lineHeight: 1.65 }}>{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Stack */}
          <h2 style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: '1rem' }}>Tech Stack</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2.5rem' }}>
            {stack.map(t => (
              <span key={t} style={{
                padding: '0.3rem 0.85rem', background: 'var(--bg-card)',
                border: '1px solid var(--border)', borderRadius: 6,
                fontSize: '0.82rem', color: 'var(--text-2)',
              }}>{t}</span>
            ))}
          </div>

          {/* Impact */}
          <h2 style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: '0.75rem' }}>Impact</h2>
          <p style={{ color: 'var(--text-2)', lineHeight: 1.8, fontSize: '0.9rem' }}>
            The system replaced paper-based kitchen workflows with a real-time KDS, eliminating order errors for chefs. The cake customization mobile app enabled customers to design and order custom cakes directly, increasing custom order volume. The admin panel was specifically designed for non-technical bakery managers, reducing training time significantly.
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}
