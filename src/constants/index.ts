import type { Project, Skill, ExperienceItem, PortfolioData } from '@/types'

export const SITE = {
  name: 'Abdur Rahman',
  title: 'Backend Developer & AI Engineer',
  email: 'abdurrahmanios710@gmail.com',
  phone: '03000735665',
  github: 'Abdur0300',
  linkedin: 'abdur0300',
  location: 'Islamabad, Pakistan',
  bio: 'Backend Developer specializing in Django, FastAPI, DRF & Flask. Building LLM-powered agentic AI systems and scalable REST APIs.',
} as const

export const DEFAULT_PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Danube Bakery - Bin Dawood Group',
    description: 'Complete bakery management system for Bin Dawood Group. Inventory tracking, order management, billing, and real-time analytics dashboard with staff management.',
    tags: ['Django', 'DRF', 'PostgreSQL', 'Celery'],
    icon: 'fas fa-bread-slice',
    status: 'published',
    link: '/projects/danube-bakery',
    date: '2025-01-15',
  },
  {
    id: 2,
    title: 'SAMS Assets Management',
    description: 'Comprehensive asset tracking and management platform with barcode scanning, depreciation tracking, maintenance scheduling, and detailed reporting.',
    tags: ['FastAPI', 'PostgreSQL', 'Prisma', 'Node.js'],
    icon: 'fas fa-boxes',
    status: 'published',
    link: '/projects/sams-assets',
    date: '2025-03-20',
  },
  {
    id: 3,
    title: 'LLM Agentic AI System',
    description: 'Multi-agent AI framework with tool use, memory, and autonomous task execution. Built with LangChain, LangGraph, and OpenAI APIs.',
    tags: ['LangChain', 'FastAPI', 'Node.js', 'OpenAI'],
    icon: 'fas fa-robot',
    status: 'published',
    link: '#',
    date: '2025-06-01',
  },
]

export const DEFAULT_SKILLS: Skill[] = [
  // Backend
  { name: 'Django', icon: 'fab fa-python' },
  { name: 'FastAPI', icon: 'fab fa-python' },
  { name: 'DRF', icon: 'fab fa-python' },
  { name: 'Flask', icon: 'fab fa-python' },
  { name: 'Node.js', icon: 'fab fa-node-js' },
  // AI / LLM
  { name: 'LangChain', icon: 'fas fa-robot' },
  { name: 'LangGraph', icon: 'fas fa-project-diagram' },
  { name: 'OpenAI API', icon: 'fas fa-brain' },
  // Databases
  { name: 'PostgreSQL', icon: 'fas fa-database' },
  { name: 'MongoDB', icon: 'fas fa-database' },
  { name: 'Redis', icon: 'fas fa-database' },
  // DevOps / Tools
  { name: 'Docker', icon: 'fab fa-docker' },
  { name: 'Git', icon: 'fab fa-git-alt' },
  { name: 'AWS', icon: 'fas fa-cloud' },
]

export const EXPERIENCE: ExperienceItem[] = [
  {
    title: 'Backend Developer',
    company: 'Enigmatix',
    period: '2025 - Present',
    desc: 'Building scalable REST APIs and backend systems using Django, DRF, and FastAPI. Working on data pipelines, authentication systems, and third-party integrations.',
  },
  {
    title: 'Backend Developer',
    company: 'Tronic AI — Islamabad',
    period: '2025 - Present',
    desc: 'Developing LLM-powered agentic AI systems with LangChain and LangGraph. Building intelligent automation pipelines and conversational AI backends with FastAPI and Node.js.',
  },
  {
    title: 'Freelance Backend Developer',
    company: 'Self-Employed',
    period: '2023 - Present',
    desc: 'Delivered full-stack and backend solutions — REST APIs, Django/Flask apps, and AI-integrated systems — for clients across various industries.',
  },
]

export const DEFAULT_PORTFOLIO_DATA: PortfolioData = {
  name: SITE.name,
  title: SITE.title,
  bio: SITE.bio,
  email: SITE.email,
  phone: SITE.phone,
  github: SITE.github,
  skills: DEFAULT_SKILLS,
  theme: { accent1: '#6c5ce7', accent2: '#00cec9' },
}

// Default dashboard password hash (SHA-256 of "admin123")
export const DEFAULT_DASH_HASH = '240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9'
