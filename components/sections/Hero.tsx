'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, ArrowDown, ArrowRight } from 'lucide-react'
import { profile } from '@/data'
import { useReducedMotion } from '@/hooks'

const roles = [
  'Agentic AI Developer',
  'Generative AI Builder',
  'CS Student',
  'AI Engineer',
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const item = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export function Hero() {
  const [roleIndex, setRoleIndex]   = useState(0)
  const prefersReducedMotion        = useReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) return
    const t = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 3000)
    return () => clearInterval(t)
  }, [prefersReducedMotion])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="gradient-mesh" />
      <div className="dotted-grid" />

      {/* Content */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-32 text-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >

        {/* ── Status badge ── */}
        <motion.div variants={item} className="flex justify-center mb-8">
          <span
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full"
            style={{
              background: 'rgba(25,195,125,0.1)',
              border:     '1px solid rgba(25,195,125,0.25)',
              color:      '#19c37d',
            }}
          >
            <span className="relative flex h-2 w-2">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                style={{ background: '#19c37d' }}
              />
              <span
                className="relative inline-flex h-2 w-2 rounded-full"
                style={{ background: '#19c37d' }}
              />
            </span>
            {profile.currentStatus}
          </span>
        </motion.div>

        {/* ── Name ── */}
        <motion.h1
          variants={item}
          className="font-heading font-bold text-white mb-5"
          style={{ fontSize: 'clamp(2.8rem, 7vw, 5rem)', lineHeight: 1.1 }}
        >
          {profile.name}
        </motion.h1>

        {/* ── Animated role ── */}
        <motion.div variants={item} className="h-10 flex items-center justify-center mb-8">
          {prefersReducedMotion ? (
            <span className="text-xl md:text-2xl font-medium text-[#9aa3b2]">{roles[0]}</span>
          ) : (
            <motion.span
              key={roleIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="text-xl md:text-2xl font-medium text-[#9aa3b2]"
            >
              {roles[roleIndex]}
            </motion.span>
          )}
        </motion.div>

        {/* ── Hero hook text ── */}
        <motion.p
          variants={item}
          className="text-base md:text-lg leading-relaxed mx-auto mb-12"
          style={{
            color:    '#9aa3b2',
            maxWidth: '800px',
          }}
        >
          {profile.heroHook}
        </motion.p>

        {/* ── CTA Buttons ── */}
        <motion.div
          variants={item}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <button
            onClick={() => scrollTo('projects')}
            className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold rounded-lg text-white transition-all duration-200 hover:scale-105 active:scale-100"
            style={{ background: '#3b82f6' }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = '#2563eb')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = '#3b82f6')}
          >
            View Projects
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => scrollTo('contact')}
            className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold rounded-lg text-white transition-all duration-200 hover:scale-105 active:scale-100"
            style={{
              background: 'transparent',
              border:     '1px solid rgba(255,255,255,0.18)',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.08)')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = 'transparent')}
          >
            Get in Touch
          </button>
        </motion.div>

        {/* ── Social icons ── */}
        <motion.div
          variants={item}
          className="flex items-center justify-center gap-4"
        >
          {[
            { href: profile.github,   Icon: Github,   label: 'GitHub' },
            { href: profile.linkedin, Icon: Linkedin, label: 'LinkedIn' },
          ].map(({ href, Icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="inline-flex items-center justify-center w-11 h-11 rounded-lg transition-all duration-200"
              style={{
                background: 'var(--surface)',
                border:     '1px solid var(--border)',
                color:      '#9aa3b2',
              }}
              whileHover={{ y: -4, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>

      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-xs text-[#6b7280] hover:text-[#9aa3b2] transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={() => scrollTo('about')}
        aria-label="Scroll to about"
      >
        <span className="font-medium">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.button>
    </section>
  )
}
