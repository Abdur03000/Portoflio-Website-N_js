'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const DEFAULT_HASH = '240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9'

async function sha256(str: string) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str))
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('')
}

const defaultData = {
  name: 'Abdur Rahman', title: 'Full Stack Developer & UI/UX Designer',
  bio: 'Crafting digital experiences with clean code and creative design.',
  email: 'abdurrahmanios710@gmail.com', phone: '03000735665', github: 'Abdur0300',
  skills: [
    { name: 'React', icon: 'fab fa-react' }, { name: 'Node.js', icon: 'fab fa-node-js' },
    { name: 'TypeScript', icon: 'fab fa-js' }, { name: 'Python', icon: 'fab fa-python' },
    { name: 'Docker', icon: 'fab fa-docker' }, { name: 'MongoDB', icon: 'fas fa-database' },
    { name: 'PostgreSQL', icon: 'fas fa-database' }, { name: 'AWS', icon: 'fas fa-cloud' },
    { name: 'GraphQL', icon: 'fas fa-project-diagram' }, { name: 'Figma', icon: 'fab fa-figma' },
    { name: 'Tailwind CSS', icon: 'fab fa-css3' }, { name: 'Git', icon: 'fab fa-git-alt' },
  ],
  theme: { accent1: '#6c5ce7', accent2: '#00cec9' },
}

const defaultProjects = [
  { id: 1, title: 'Danube Bakery - Bin Dawood Group', description: 'Complete bakery management system.', tags: ['React', 'Node.js', 'MongoDB', 'Real-time'], icon: 'fas fa-bread-slice', status: 'published', link: '/projects/danube-bakery', date: '2025-01-15' },
  { id: 2, title: 'SAMS Assets Management', description: 'Comprehensive asset tracking platform.', tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma'], icon: 'fas fa-boxes', status: 'published', link: '/projects/sams-assets', date: '2025-03-20' },
  { id: 3, title: 'E-Commerce Platform', description: 'Full-featured e-commerce solution.', tags: ['React', 'Stripe', 'Redis', 'Docker'], icon: 'fas fa-shopping-cart', status: 'draft', link: '#', date: '2025-05-10' },
]

type Project = typeof defaultProjects[0]
type PortfolioData = typeof defaultData

export default function Dashboard() {
  const [unlocked, setUnlocked] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [section, setSection] = useState('overview')
  const [projects, setProjects] = useState<Project[]>(defaultProjects)
  const [data, setData] = useState<PortfolioData>(defaultData)
  const [modal, setModal] = useState(false)
  const [editing, setEditing] = useState<Project | null>(null)
  const [form, setForm] = useState({ title: '', description: '', tags: '', icon: 'fas fa-folder', status: 'published', link: '' })
  const [skillName, setSkillName] = useState('')
  const [skillIcon, setSkillIcon] = useState('')
  const [settings, setSettings] = useState({ name: '', title: '', bio: '', email: '', phone: '', github: '' })
  const [newPw, setNewPw] = useState('')
  const [confirmPw, setConfirmPw] = useState('')
  const [accent1, setAccent1] = useState('#6c5ce7')
  const [accent2, setAccent2] = useState('#00cec9')
  const [saveFeedback, setSaveFeedback] = useState(false)

  useEffect(() => {
    const p = localStorage.getItem('portfolioProjects')
    const d = localStorage.getItem('portfolioData')
    if (p) setProjects(JSON.parse(p))
    if (d) {
      const parsed = JSON.parse(d)
      setData(parsed)
      setSettings({ name: parsed.name || '', title: parsed.title || '', bio: parsed.bio || '', email: parsed.email || '', phone: parsed.phone || '', github: parsed.github || '' })
      if (parsed.theme) { setAccent1(parsed.theme.accent1); setAccent2(parsed.theme.accent2) }
    } else {
      setSettings({ name: defaultData.name, title: defaultData.title, bio: defaultData.bio, email: defaultData.email, phone: defaultData.phone, github: defaultData.github })
    }
  }, [])

  const unlock = async () => {
    const hash = await sha256(password)
    const stored = localStorage.getItem('dashPasswordHash') || DEFAULT_HASH
    if (hash === stored) { setUnlocked(true); setError(false) }
    else { setError(true); setPassword('') }
  }

  const saveProjects = (p: Project[]) => { setProjects(p); localStorage.setItem('portfolioProjects', JSON.stringify(p)) }
  const saveData = (d: PortfolioData) => { setData(d); localStorage.setItem('portfolioData', JSON.stringify(d)) }

  const openAdd = () => { setEditing(null); setForm({ title: '', description: '', tags: '', icon: 'fas fa-folder', status: 'published', link: '' }); setModal(true) }
  const openEdit = (p: Project) => { setEditing(p); setForm({ title: p.title, description: p.description, tags: p.tags.join(', '), icon: p.icon, status: p.status, link: p.link }); setModal(true) }
  const deleteProject = (id: number) => { if (confirm('Delete this project?')) saveProjects(projects.filter(p => p.id !== id)) }

  const saveProject = () => {
    const entry = { ...form, tags: form.tags.split(',').map(t => t.trim()).filter(Boolean), date: new Date().toISOString().split('T')[0] }
    if (editing) { saveProjects(projects.map(p => p.id === editing.id ? { ...p, ...entry } : p)) }
    else { saveProjects([...projects, { ...entry, id: Date.now() }]) }
    setModal(false)
  }

  const addSkill = () => {
    if (!skillName) return
    const updated = { ...data, skills: [...(data.skills || []), { name: skillName, icon: skillIcon || 'fas fa-code' }] }
    saveData(updated); setSkillName(''); setSkillIcon('')
  }
  const removeSkill = (i: number) => {
    const skills = [...data.skills]; skills.splice(i, 1)
    saveData({ ...data, skills })
  }

  const saveSettings = (e: React.FormEvent) => {
    e.preventDefault()
    saveData({ ...data, ...settings })
    setSaveFeedback(true); setTimeout(() => setSaveFeedback(false), 2000)
  }

  const changePassword = async (e: React.FormEvent) => {
    e.preventDefault()
    if (newPw !== confirmPw) { alert('Passwords do not match'); return }
    if (newPw.length < 4) { alert('Min 4 characters'); return }
    localStorage.setItem('dashPasswordHash', await sha256(newPw))
    alert('Password updated!'); setNewPw(''); setConfirmPw('')
  }

  const applyTheme = () => {
    document.documentElement.style.setProperty('--accent-1', accent1)
    document.documentElement.style.setProperty('--accent-2', accent2)
    saveData({ ...data, theme: { accent1, accent2 } })
  }

  const themePresets = [
    { a1: '#6c5ce7', a2: '#00cec9' }, { a1: '#fd79a8', a2: '#e84393' },
    { a1: '#00b894', a2: '#00cec9' }, { a1: '#fdcb6e', a2: '#e17055' },
    { a1: '#a29bfe', a2: '#6c5ce7' }, { a1: '#74b9ff', a2: '#0984e3' },
  ]

  const published = projects.filter(p => p.status === 'published').length

  if (!unlocked) return (
    <div className="lock-screen">
      <div style={{ background: 'var(--dash-card)', border: '1px solid var(--dash-border)', borderRadius: 'var(--radius)', padding: '3rem 2.5rem', textAlign: 'center', maxWidth: 400, width: '100%' }}>
        <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(108,92,231,0.15)', color: 'var(--dash-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', margin: '0 auto 1.5rem' }}>
          <i className="fas fa-lock" />
        </div>
        <h2 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Dashboard Protected</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>Enter password to access the CMS</p>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && unlock()}
            placeholder="Enter password" autoFocus
            style={{ flex: 1, padding: '0.75rem 1rem', background: 'var(--dash-bg)', border: `1px solid ${error ? 'var(--dash-danger)' : 'var(--dash-border)'}`, borderRadius: 'var(--radius-sm)', color: 'var(--text-primary)', fontFamily: 'inherit', fontSize: '0.9rem', outline: 'none' }} />
          <button onClick={unlock} className="btn btn-primary" style={{ padding: '0.75rem 1.2rem' }}><i className="fas fa-arrow-right" /></button>
        </div>
        {error && <div style={{ color: 'var(--dash-danger)', fontSize: '0.8rem', marginTop: '0.8rem' }}>Incorrect password</div>}
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', marginTop: '1rem' }}>Default: admin123</p>
      </div>
    </div>
  )

  const navItems = [
    { id: 'overview', icon: 'fas fa-th-large', label: 'Overview', group: 'Management' },
    { id: 'projects', icon: 'fas fa-folder', label: 'Projects', group: 'Management' },
    { id: 'skills', icon: 'fas fa-code', label: 'Skills', group: 'Management' },
    { id: 'settings', icon: 'fas fa-sliders-h', label: 'Profile Settings', group: 'Appearance' },
    { id: 'theme', icon: 'fas fa-palette', label: 'Theme Customizer', group: 'Appearance' },
  ]

  return (
    <div className="dash-layout" style={{ background: 'var(--dash-bg)', minHeight: '100vh' }}>
      {/* Sidebar */}
      <aside className="dash-sidebar">
        <div style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <i className="fas fa-crown" style={{ color: 'var(--dash-accent)' }} /> Portfolio CMS
        </div>
        {['Management', 'Appearance'].map(group => (
          <div key={group} style={{ marginBottom: '1.5rem' }}>
            <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--text-secondary)', marginBottom: '0.8rem', paddingLeft: '0.5rem' }}>{group}</div>
            {navItems.filter(n => n.group === group).map(n => (
              <div key={n.id} className={`dash-nav-item ${section === n.id ? 'active' : ''}`} onClick={() => setSection(n.id)}>
                <i className={n.icon} style={{ width: 20, textAlign: 'center' }} /> {n.label}
              </div>
            ))}
          </div>
        ))}
        <div style={{ marginTop: 'auto', paddingTop: '2rem' }}>
          <Link href="/" className="dash-nav-item"><i className="fas fa-external-link-alt" style={{ width: 20, textAlign: 'center' }} /> View Site</Link>
          <div className="dash-nav-item" style={{ color: 'var(--dash-danger)' }}
            onClick={() => { if (confirm('Reset all data?')) { localStorage.removeItem('portfolioData'); localStorage.removeItem('portfolioProjects'); setProjects(defaultProjects); setData(defaultData) } }}>
            <i className="fas fa-trash-restore" style={{ width: 20, textAlign: 'center' }} /> Reset All Data
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="dash-main">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--dash-border)' }}>
          <h1 style={{ fontSize: '1.5rem' }}>Dashboard</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Link href="/" className="btn btn-secondary btn-sm"><i className="fas fa-eye" /> View Site</Link>
            <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'linear-gradient(135deg,var(--accent-1),var(--accent-2))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: '0.85rem' }}>AR</div>
          </div>
        </div>

        {/* Overview */}
        {section === 'overview' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: '1.2rem' }}>
            {[
              { label: 'Total Projects', value: projects.length, icon: 'fas fa-folder', bg: 'rgba(108,92,231,0.15)', color: 'var(--accent-1)' },
              { label: 'Published', value: published, icon: 'fas fa-globe', bg: 'rgba(0,206,201,0.15)', color: 'var(--accent-2)' },
              { label: 'Drafts', value: projects.length - published, icon: 'fas fa-pen-fancy', bg: 'rgba(253,203,110,0.15)', color: 'var(--accent-4)' },
              { label: 'Skills', value: data.skills?.length || 0, icon: 'fas fa-code', bg: 'rgba(253,121,168,0.15)', color: 'var(--accent-3)' },
            ].map(s => (
              <div key={s.label} style={{ background: 'var(--dash-card)', border: '1px solid var(--dash-border)', borderRadius: 'var(--radius-sm)', padding: '1.2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{s.label}</span>
                  <div style={{ width: 32, height: 32, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', background: s.bg, color: s.color, fontSize: '0.9rem' }}><i className={s.icon} /></div>
                </div>
                <div style={{ fontSize: '1.6rem', fontWeight: 700 }}>{s.value}</div>
              </div>
            ))}
          </div>
        )}

        {/* Projects */}
        {section === 'projects' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
              <input type="text" placeholder="Search projects..." style={{ padding: '0.6rem 1rem', background: 'var(--dash-card)', border: '1px solid var(--dash-border)', borderRadius: 'var(--radius-sm)', color: 'var(--text-primary)', fontFamily: 'inherit', fontSize: '0.85rem', minWidth: 250, outline: 'none' }} />
              <button className="btn btn-primary" onClick={openAdd}><i className="fas fa-plus" /> Add Project</button>
            </div>
            <table className="data-table">
              <thead><tr><th style={{ width: 30 }} /><th>Title</th><th>Tags</th><th>Status</th><th>Date</th><th style={{ width: 100 }}>Actions</th></tr></thead>
              <tbody>
                {projects.map(p => (
                  <tr key={p.id}>
                    <td><i className={p.icon} style={{ color: 'var(--accent-1)', width: 20, textAlign: 'center' }} /></td>
                    <td>{p.title}</td>
                    <td>{p.tags.slice(0, 2).map(t => <span key={t} className="status-badge published" style={{ marginRight: '0.3rem', fontSize: '0.7rem' }}>{t}</span>)}</td>
                    <td><span className={`status-badge ${p.status}`}>{p.status}</span></td>
                    <td>{p.date}</td>
                    <td>
                      <button className="btn btn-sm btn-primary" onClick={() => openEdit(p)} style={{ marginRight: '0.4rem' }}><i className="fas fa-edit" /></button>
                      <button className="btn btn-sm btn-danger" onClick={() => deleteProject(p.id)}><i className="fas fa-trash" /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Skills */}
        {section === 'skills' && (
          <div>
            <h2 style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>Manage Skills</h2>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              {[{ val: skillName, set: setSkillName, ph: 'Skill name (e.g. React)' }, { val: skillIcon, set: setSkillIcon, ph: 'Icon class (e.g. fab fa-react)' }].map((f, i) => (
                <input key={i} value={f.val} onChange={e => f.set(e.target.value)} placeholder={f.ph}
                  style={{ padding: '0.7rem 1rem', background: 'var(--dash-card)', border: '1px solid var(--dash-border)', borderRadius: 'var(--radius-sm)', color: 'var(--text-primary)', fontFamily: 'inherit', fontSize: '0.85rem', minWidth: 200, outline: 'none' }} />
              ))}
              <button className="btn btn-primary" onClick={addSkill}><i className="fas fa-plus" /> Add Skill</button>
            </div>
            {(data.skills || []).map((s, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.6rem 0.8rem', background: 'var(--dash-card)', borderRadius: 'var(--radius-sm)', marginBottom: '0.5rem', border: '1px solid var(--dash-border)' }}>
                <span><i className={s.icon} style={{ color: 'var(--accent-1)', width: 24, display: 'inline-block' }} /> {s.name}</span>
                <button className="btn btn-sm btn-danger" onClick={() => removeSkill(i)}><i className="fas fa-times" /></button>
              </div>
            ))}
          </div>
        )}

        {/* Settings */}
        {section === 'settings' && (
          <div>
            <h2 style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>Profile Settings</h2>
            <form onSubmit={saveSettings} style={{ maxWidth: 600 }}>
              {[
                { id: 'name', label: 'Your Name', type: 'text' }, { id: 'title', label: 'Title / Tagline', type: 'text' },
                { id: 'email', label: 'Email', type: 'email' }, { id: 'phone', label: 'Phone', type: 'text' },
                { id: 'github', label: 'GitHub Username', type: 'text' },
              ].map(f => (
                <div key={f.id} className="form-group" style={{ marginBottom: '1rem' }}>
                  <label>{f.label}</label>
                  <input type={f.type} value={(settings as any)[f.id]} onChange={e => setSettings({ ...settings, [f.id]: e.target.value })} />
                </div>
              ))}
              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label>Bio</label>
                <textarea value={settings.bio} onChange={e => setSettings({ ...settings, bio: e.target.value })} />
              </div>
              <button type="submit" className="btn btn-primary" style={saveFeedback ? { background: 'linear-gradient(135deg,#00cec9,#00b894)' } : {}}>
                <i className={`fas ${saveFeedback ? 'fa-check' : 'fa-save'}`} /> {saveFeedback ? 'Saved!' : 'Save Settings'}
              </button>
            </form>
            <h2 style={{ margin: '2.5rem 0 1rem', fontSize: '1.2rem' }}>Change Password</h2>
            <form onSubmit={changePassword} style={{ maxWidth: 400 }}>
              <div className="form-group" style={{ marginBottom: '1rem' }}><label>New Password</label><input type="password" value={newPw} onChange={e => setNewPw(e.target.value)} required minLength={4} /></div>
              <div className="form-group" style={{ marginBottom: '1rem' }}><label>Confirm Password</label><input type="password" value={confirmPw} onChange={e => setConfirmPw(e.target.value)} required /></div>
              <button type="submit" className="btn btn-primary"><i className="fas fa-key" /> Update Password</button>
            </form>
          </div>
        )}

        {/* Theme */}
        {section === 'theme' && (
          <div>
            <h2 style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>Theme Customizer</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Choose a preset theme or customize your own accent colors.</p>
            <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              {themePresets.map((t, i) => (
                <div key={i} className="theme-swatch"
                  style={{ background: `linear-gradient(135deg,${t.a1},${t.a2})` }}
                  onClick={() => { setAccent1(t.a1); setAccent2(t.a2); document.documentElement.style.setProperty('--accent-1', t.a1); document.documentElement.style.setProperty('--accent-2', t.a2) }} />
              ))}
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', maxWidth: 400, marginBottom: '1.5rem' }}>
              {[{ label: 'Accent Color 1', val: accent1, set: setAccent1 }, { label: 'Accent Color 2', val: accent2, set: setAccent2 }].map(c => (
                <div key={c.label} className="form-group" style={{ flex: 1 }}>
                  <label>{c.label}</label>
                  <input type="color" value={c.val} onChange={e => c.set(e.target.value)} style={{ height: 40, cursor: 'pointer' }} />
                </div>
              ))}
            </div>
            <button className="btn btn-primary" onClick={applyTheme}><i className="fas fa-palette" /> Apply Theme</button>
          </div>
        )}
      </main>

      {/* Modal */}
      {modal && (
        <div className="modal-overlay active" onClick={e => e.target === e.currentTarget && setModal(false)}>
          <div className="modal">
            <h2 style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>{editing ? 'Edit Project' : 'Add Project'}</h2>
            {[
              { label: 'Project Title', key: 'title', type: 'text' }, { label: 'Tags (comma separated)', key: 'tags', type: 'text' },
              { label: 'Icon (Font Awesome class)', key: 'icon', type: 'text' }, { label: 'Project Link', key: 'link', type: 'text' },
            ].map(f => (
              <div key={f.key} className="form-group" style={{ marginBottom: '1rem' }}>
                <label>{f.label}</label>
                <input type={f.type} value={(form as any)[f.key]} onChange={e => setForm({ ...form, [f.key]: e.target.value })} />
              </div>
            ))}
            <div className="form-group" style={{ marginBottom: '1rem' }}><label>Description</label><textarea value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} /></div>
            <div className="form-group" style={{ marginBottom: '1rem' }}>
              <label>Status</label>
              <select value={form.status} onChange={e => setForm({ ...form, status: e.target.value })} style={{ background: 'var(--dash-bg)' }}>
                <option value="published">Published</option>
                <option value="draft">Draft</option>
              </select>
            </div>
            <div style={{ display: 'flex', gap: '0.8rem', justifyContent: 'flex-end', marginTop: '1.5rem' }}>
              <button className="btn btn-secondary" onClick={() => setModal(false)}>Cancel</button>
              <button className="btn btn-primary" onClick={saveProject}><i className="fas fa-save" /> Save Project</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
