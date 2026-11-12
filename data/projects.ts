import { Project } from './types'

export const projects: Project[] = [
  // Featured Projects - AI & Agents
  {
    id: 'pptx-video-agent',
    title: 'PPTX-to-Video Generation Agent',
    description:
      'An intelligent agent that automatically converts PowerPoint presentations into engaging video content using generative AI.',
    tags: ['Agentic AI', 'Python', 'LangChain', 'Generative AI'],
    github: 'https://github.com/Farooq-21/PPTX-to-Video-Generation-Agent',
    featured: true,
    category: 'ai-agents',
  },
  {
    id: 'travel-agent-ai',
    title: 'AI Travel Agent System',
    description:
      'A comprehensive AI-powered travel planning assistant that helps users discover and plan their perfect trips.',
    tags: ['Agentic AI', 'LangChain', 'Python', 'RAG'],
    github: 'https://github.com/Farooq-21/travel-agent-ai',
    featured: true,
    category: 'ai-agents',
  },
  {
    id: 'reddit-ai-agent',
    title: 'Reddit AI Agent',
    description:
      'An intelligent agent for automating Reddit interactions and content analysis using AI-powered natural language understanding.',
    tags: ['Agentic AI', 'Python', 'LangChain', 'NLP'],
    github: 'https://github.com/Farooq-21/reddit-ai-agent',
    featured: true,
    category: 'ai-agents',
  },
  {
    id: 'car-rental-assistant',
    title: 'Groq Car Rental Assistant System',
    description:
      'A conversational AI assistant for car rental services powered by Groq, providing fast and intelligent customer support.',
    tags: ['Agentic AI', 'Groq', 'Python', 'LangChain'],
    github: 'https://github.com/Farooq-21/Groq-Car-Rental-Assistant',
    featured: true,
    category: 'ai-agents',
  },

  // More Projects
  {
    id: 'weather-api',
    title: 'Weather API',
    description:
      'A RESTful API service that provides real-time weather data and forecasts with clean architecture and efficient data handling.',
    tags: ['Backend', 'REST API', 'Python', 'FastAPI'],
    github: 'https://github.com/Farooq-21/Weather-API',
    featured: false,
    category: 'backend',
  },
  {
    id: 'hostel-management',
    title: 'Hostel Management System (C++)',
    description:
      'A comprehensive hostel management system built with C++ featuring student tracking, room allocation, and administrative tools.',
    tags: ['C++', 'System Design', 'Data Structures'],
    github: 'https://github.com/Farooq-21/Hostel-Management-System-C-',
    featured: false,
    category: 'systems',
  },
  {
    id: 'huffman-compression',
    title: 'Huffman Compression System',
    description:
      'An implementation of Huffman coding algorithm for efficient file compression and decompression with optimal data encoding.',
    tags: ['C++', 'Algorithms', 'Data Structures'],
    github: 'https://github.com/Farooq-21/Huffman-Compression-System',
    featured: false,
    category: 'systems',
  },
  {
    id: 'assembly-encoding',
    title: 'Encoding and Decoding in Assembly Language',
    description:
      'Low-level encoding and decoding implementation using Assembly language, demonstrating system-level programming skills.',
    tags: ['Assembly', 'Low-Level Programming'],
    github: 'https://github.com/Farooq-21/Encode-and-Decode-in-Assembly-Language',
    featured: false,
    category: 'systems',
  },
  {
    id: 'attendance-portal',
    title: 'Attendance Portal System (C++)',
    description:
      'A robust attendance management system with automated tracking, reporting, and analytics capabilities built in C++.',
    tags: ['C++', 'System Design', 'Data Structures'],
    github: 'https://github.com/Farooq-21/Attendance-portal-System-C-',
    featured: false,
    category: 'systems',
  },
]

// Separate featured and other projects for easy access
export const featuredProjects = projects.filter((p) => p.featured)
export const otherProjects = projects.filter((p) => !p.featured)

// Get projects by category
export const getProjectsByCategory = (
  category: 'ai-agents' | 'systems' | 'backend' | 'all'
) => {
  if (category === 'all') return projects
  return projects.filter((p) => p.category === category)
}
