/**
 * Type definitions for portfolio data
 */

export interface Profile {
  name: string
  title: string
  email: string
  phone: string
  github: string
  linkedin: string
  heroHook: string
  about: string
  currentStatus: string
}

export interface Experience {
  id: string
  title: string
  company: string
  location?: string
  startDate: string
  endDate: string | 'Present'
  isCurrent: boolean
  description: string[]
}

export interface Skill {
  name: string
  category: string
}

export interface SkillCategory {
  id: string
  name: string
  skills: string[]
}

export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  github: string
  featured: boolean
  category: 'ai-agents' | 'systems' | 'backend' | 'all'
}

export interface Education {
  id: string
  degree: string
  institution: string
  location: string
  startDate: string
  endDate: string | 'Present'
  isCurrent: boolean
  currentSemester?: string
}

export interface Social {
  name: string
  url: string
  icon: string
  label: string
}
