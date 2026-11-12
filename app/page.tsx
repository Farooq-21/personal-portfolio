import {
  Navbar,
  Footer,
  CustomCursor,
  ScrollProgress,
  SmoothScroll,
  CommandPalette,
} from '@/components/layout'
import {
  Hero,
  About,
  Experience,
  Skills,
  Projects,
  Education,
  Contact,
} from '@/components/sections'
import { profile } from '@/data'

export default function Home() {
  // JSON-LD structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: 'Agentic AI Developer',
    description: profile.about,
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    email: profile.email,
    telephone: profile.phone,
    worksFor: {
      '@type': 'Organization',
      name: 'IRAB Technologies',
    },
    affiliation: {
      '@type': 'EducationalOrganization',
      name: 'Air University',
    },
    sameAs: [profile.github, profile.linkedin],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Air University',
    },
    knowsAbout: [
      'Agentic AI',
      'Generative AI',
      'LangChain',
      'LangGraph',
      'Python',
      'Machine Learning',
      'Artificial Intelligence',
    ],
  }

  return (
    <>
      {/* JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <SmoothScroll>
        <ScrollProgress />
        <CustomCursor />
        <Navbar />
        <CommandPalette />

        <main id="main-content">
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </main>

        <Footer />
      </SmoothScroll>
    </>
  )
}
