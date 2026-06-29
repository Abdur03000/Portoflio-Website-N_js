import type { Project, Skill, ExperienceItem, PortfolioData } from '@/types'

export const SITE = {
  name: 'Abdur Rahman',
  title: 'Backend Developer & AI Engineer',
  email: 'abdurrahmanios710@gmail.com',
  phone: '03000735665',
  github: 'Abdur03000',
  linkedin: 'abdur0300',
  location: 'Islamabad, Pakistan',
  bio: 'Backend Developer specializing in Django, FastAPI, DRF & Flask. Building LLM-powered agentic AI systems and scalable REST APIs.',
} as const

export const DEFAULT_PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Danube Bakery - Bin Dawood Group',
    description: 'Full bakery ecosystem for Bin Dawood Group — cake customization mobile app, user-friendly admin panel, dedicated KDS for chefs, inventory, billing, and real-time analytics.',
    tags: ['Django', 'DRF', 'React Native', 'PostgreSQL'],
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
    period: 'Jan 2025 – Present',
    current: true,
    desc: 'Building scalable REST APIs and backend systems using Django, DRF, and FastAPI. Working on data pipelines, authentication systems, and third-party integrations.',
    projects: [
      'Danube Bakery – Bin Dawood Group (Django, DRF, PostgreSQL, Celery)',
      'SAMS Asset Management Platform (FastAPI, PostgreSQL, Prisma)',
    ],
  },
  {
    title: 'Backend Developer',
    company: 'Tronic AI — Islamabad',
    period: 'Mar 2025 – Jun 2025',
    current: false,
    desc: 'Developing LLM-powered agentic AI systems with LangChain and LangGraph. Building intelligent automation pipelines and conversational AI backends.',
    projects: [
      'Multi-agent AI framework with tool use & memory (LangChain, LangGraph)',
      'Conversational AI backend with RAG pipeline (FastAPI, OpenAI, Pinecone)',
    ],
  },
  {
    title: 'Freelance Backend Developer',
    company: 'Self-Employed',
    period: 'Jun 2023 – Present',
    current: true,
    desc: 'Delivering backend solutions — REST APIs, Django/Flask apps, and AI-integrated systems — for clients across various industries.',
    projects: [
      'E-commerce REST API with Stripe integration (Django, DRF)',
      'Inventory management system for retail client (Flask, SQLite)',
      'Telegram bot automation for lead generation (Python, FastAPI)',
    ],
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
