import { SkillCategory } from './types'

export const skillCategories: SkillCategory[] = [
  {
    id: 'ai-llms',
    name: 'AI & LLMs',
    skills: [
      'Agentic AI',
      'Generative AI',
      'RAGs',
      'LLMs',
      'Prompt Engineering',
      'Vector Databases',
    ],
  },
  {
    id: 'frameworks',
    name: 'Frameworks',
    skills: ['LangChain', 'LangGraph', 'React', 'Next.js', 'NestJS', 'FastAPI'],
  },
  {
    id: 'languages',
    name: 'Languages',
    skills: ['Python', 'C++'],
  },
  {
    id: 'backend',
    name: 'Backend & APIs',
    skills: ['Backend Development', 'REST APIs'],
  },
  {
    id: 'frontend',
    name: 'Frontend',
    skills: ['Frontend Development', 'React', 'Next.js'],
  },
  {
    id: 'tools',
    name: 'Tools',
    skills: ['Git/GitHub'],
  },
]

// Flat list of all skills for easy access
export const allSkills = skillCategories.flatMap((category) =>
  category.skills.map((skill) => ({
    name: skill,
    category: category.name,
  }))
)
