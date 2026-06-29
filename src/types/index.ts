export interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  icon: string
  status: 'published' | 'draft'
  link: string
  date: string
}

export interface Skill {
  name: string
  icon: string
}

export interface Theme {
  accent1: string
  accent2: string
}

export interface PortfolioData {
  name: string
  title: string
  bio: string
  email: string
  phone: string
  github: string
  skills: Skill[]
  theme: Theme
}

export interface ExperienceItem {
  title: string
  company: string
  period: string
  current?: boolean
  desc: string
  projects?: string[]
}
